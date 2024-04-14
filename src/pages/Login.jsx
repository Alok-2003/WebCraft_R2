import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  return (
    <>
      <div className="font-['gilroy'] flex justify-center items-center h-[100%] bg-[url('https://img.freepik.com/premium-photo/farmer-hold-full-basket-vegetables_1031240-10968.jpg?w=826')] bg-cover">
        <div className="backdrop-blur-sm bg-white/30 p-10 rounded-3xl">
          <div className="flex justify-center items-center mb-4">
            <div className='grid grid-cols-1'>

              <h1 className="text-5xl font-bold text-center">Login</h1>

              <button onClick={firebase.signinWithGoogle} className="bg-white text-black border border-gray-300 rounded-md p-1 flex items-center justify-center text-xl my-2">
                <div className="flex items-center">
                  <img src="public/pngwing.com.png" alt="Google Logo" className="w-12 h-12 mr-2" />
                  Login in with Google
                </div>
              </button>


              <div class="flex items-center space-x-2">
                ---- <span class="text-black-500">Or continue with username/email</span> ----
              </div>
              <button className="bg-white text-black border border-gray-300 rounded-md p-2 flex items-center justify-center text-xl my-2">
                <div className="flex items-center">
                  <img src="public/phone.png" alt="Google Logo" className="w-10 h-10 mr-2" />
                  Login in with Phone Number
                </div>
              </button>
              <span class="text-black-500 flex items-center justify-center ">SignUp</span>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login