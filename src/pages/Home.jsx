import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel';
import Calendar from '../components/Calender';

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

  const events = [
    { date: '2024-04-20', eventName: 'Local Bakery Grand Opening' },
    { date: '2024-04-08', eventName: 'Artisan Cheese Festival' },
    { date: '2024-04-25', eventName: 'Community Potluck Dinner' },
    // Add more events as needed
  ];

  return (
    <div className='py-16 bg- '>
      <hr />
      <div className="flex justify-center rounded-2xl mx-2 md:m-0 my-2">
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

      <hr />
      <div className='flex justify-between mx-3 mt-2 md:mx-14  items-center' >
        <h1 className='text-2xl font-bold md:text-3xl'>Featured Products</h1>
        <h1 className='text-green-600 md:text-xl'>See all</h1>
      </div>
      <div className='flex justify-center mb-4'>
        <div className="mt-0 mx-2 grid grid-cols-2 gap-3  ">
          <div className="w-44 rounded-2xl overflow-hidden shadow-md bg-white p-2 ">
            <img className="h-40 w-44 rounded-2xl" src="https://img.freepik.com/free-photo/wheat-grains-bowl-wheat-popcorn-bowl-wheat-seed-rustic_114579-1319.jpg?t=st=1713081880~exp=1713085480~hmac=3b2cc3b4dc937ac048008d865e2525c15eb40af96fbdb186cb99a1760851afb7&w=360" alt="Rice Seeds" />
            <div className="flex justify-between ">
              <div className="px-2 py-2">
                <div className="font-bold text-md ">Wheat</div>
                <p className="text-green-700 text-base">₹25/kg</p>
              </div>
              <div className="px-4 mt-3">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="w-44 rounded-2xl overflow-hidden shadow-xl bg-white p-2 ">
            <img className="h-40 w-44 rounded-2xl " src="https://img.freepik.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?t=st=1713092119~exp=1713095719~hmac=1c57f31b3262fccdd51e8c24d88ad23c68ce9943e09ca0b520678ff61d34eca7&w=740" alt="Rice Seeds" />
            <div className="flex justify-between ">
              <div className="px-2 py-2">
                <div className="font-bold text-md ">Rice</div>
                <p className="text-green-700 text-base">₹48/kg</p>
              </div>
              <div className="px-4 mt-3">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  +
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Services */}
      <hr />
      <div className='flex justify-between mx-3 mt-2 md:mx-14  items-center' >
        <h1 className='text-2xl font-bold  md:text-3xl'>Services Avaliable</h1>
        <h1 className='text-green-600 md:text-xl'>See all</h1>
      </div>
      <div className='flex justify-center mb-4'>
        <div className="mt-0 mx-2 grid grid-cols-2 gap-3  ">
          <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-md bg-white p-2 flex justify-center items-center bg-[url('https://img.freepik.com/free-photo/wheat-grains-bowl-wheat-popcorn-bowl-wheat-seed-rustic_114579-1319.jpg?t=st=1713081880~exp=1713085480~hmac=3b2cc3b4dc937ac048008d865e2525c15eb40af96fbdb186cb99a1760851afb7&w=360')]  bg-cover bg-no-repeat" >
            <div className="backdrop-blur-sm bg-black/20 p-2 rounded-2xl shadow-lg w-fit h-fit text-2xl font-bold text-white ">Seeds</div>
          </div>
          <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-md bg-white p-2 flex justify-center items-center bg-[url('https://img.freepik.com/premium-photo/farmer-combine-harvester-is-harvesting-grains_222822-225.jpg?w=740')]  bg-cover bg-no-repeat" >
            <div className="backdrop-blur-sm bg-black/20 p-2 rounded-2xl shadow-lg w-fit h-fit text-2xl font-bold text-white ">Machinery</div>
          </div>
        </div>
      </div>
<hr />
      <div className='mt-2 mx-4'>
        <div className='flex justify-between  my-2  md:mx-14 items-center' >
          <h1 className='text-2xl font-bold md:text-3xl md:mb-2'>Upcoming Event</h1>
        </div>
        <Calendar events={events} />
      </div>



    </div>
  )
}

export default Home