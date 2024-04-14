import React, { useEffect, useState } from 'react'

import Carousel from './components/Carousel';
const Home = () => {

  const slides = [
    "https://firebasestorage.googleapis.com/v0/b/portfolio-21602.appspot.com/o/Fruit%201.jpg?alt=media&token=86ebc683-526f-4963-aa3c-8f4fe1d63caa",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-21602.appspot.com/o/craft%201.jpg?alt=media&token=50b1e80f-da6c-4821-8124-7484059217e3",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-21602.appspot.com/o/baked%201.jpg?alt=media&token=49b62e07-49f2-4912-bb63-ec63d40b13c5"
  ];
  const slides2 = [
    "https://firebasestorage.googleapis.com/v0/b/portfolio-21602.appspot.com/o/Fruit%202.jpg?alt=media&token=d626ca17-e122-4cb5-81fc-d0ba145b103e",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-21602.appspot.com/o/craft%202.jpg?alt=media&token=1f61fbe0-596f-42be-ad2d-be0690494e01",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-21602.appspot.com/o/baked%202.jpg?alt=media&token=e8c13ea9-4ad8-4369-b2c2-3c43c036cf62"
  ];
  const [isSmallDisplay, setIsSmallDisplay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDisplay(window.innerWidth < 768);
    };

    handleResize(); // Call it initially to set isSmallDisplay correctly

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='py-16 bg- '>
      <div className="flex justify-center rounded-2xl mx-2 md:m-0">
        <div className=' md:w-11/12   flex justify-center  ' >

          {isSmallDisplay ? (
            <Carousel className="" >
              {slides.map((s) => (
                <img key={s} src={s} alt="" className='' />
              ))}
            </Carousel>
          ) : (
            <>
              <Carousel className="" >
                {slides.map((s) => (
                  <img key={s} src={s} alt="" className='' />
                ))}
              </Carousel>
              <Carousel className="" >
                {slides2.map((x) => (
                  <img key={x} src={x} alt="" className='h-1/2' />
                ))}
              </Carousel>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home