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

  const handleLogin = () => {
    navigate("/login/phone");
    // Redirect to login page after logout
};

  return (
    <>
      <div className="font-['gilroy'] flex justify-center items-center h-[100%] bg-[url('https://img.freepik.com/premium-photo/farmer-hold-full-basket-vegetables_1031240-10968.jpg?w=826')] bg-cover">
        <div className="backdrop-blur-sm bg-white/30 p-10 rounded-3xl">
          <div className="flex justify-center items-center mb-4">
            <div className='grid grid-cols-1'>

              <h1 className="text-5xl font-bold text-center mb-4">Login</h1>

              <button onClick={firebase.signinWithGoogle} className="bg-white text-black border border-gray-300 rounded-md p-1 flex items-center justify-center text-xl my-2">
                <div className="flex items-center">
                  <img src="https://firebasestorage.googleapis.com/v0/b/webcraft-b6ba7.appspot.com/o/google.png?alt=media&token=e5d9b6f8-a355-4db0-a108-3e50c4e68b30" alt="Google Logo" className="w-12 h-12 mr-2" />
                  Login in with Google
                </div>
              </button>


              <div class="flex items-center justify-center">
                ---- <h1 class="text-black-900 text-2xl text-center">OR</h1> ----
              </div>

              <button onClick={handleLogin} className="bg-white text-black border border-gray-300 rounded-md p-2 flex items-center justify-center text-xl my-2">
                <div className="flex items-center">
                  <img src="https://firebasestorage.googleapis.com/v0/b/webcraft-b6ba7.appspot.com/o/phone.png?alt=media&token=538329b1-ec5e-4387-a5a7-4d641ca7fee9" alt="Google Logo" className="w-10 h-10 mr-2" />
                  Login in with Phone Number
                </div>
              </button>
              {/* <span class="text-black-500 flex items-center justify-center ">SignUp</span> */}

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login