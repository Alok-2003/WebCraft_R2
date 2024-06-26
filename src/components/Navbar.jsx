// Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { FiAlignRight } from "react-icons/fi";
import { useFirebase } from '../context/Firebase';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const firebase = useFirebase();
    const { isLoggedIn, getUserDetails } = useFirebase();
    const userDetails = getUserDetails();
    const userName = userDetails?.displayName ? userDetails.displayName.split(' ')[0] : 'Guest';
    const navigate = useNavigate();
    const handleLogout = () => {
        firebase.signOut();
        // navigate("/login"); // Redirect to login page after logout
    };
    console.log(firebase)

    const content = (
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 backdrop-blur-sm bg-white/50">
            <ul className="grid grid-cols-3 text-center text-2xl font-bold px-8 py-0">
                <Link to={"/admin_create"} className='' spy={true} smooth={true} >
                    <li className="my-3 py-1 border-b border-slate-800 hover:rounded">Admin</li>
                </Link>
                {/* <Link to="" spy={true} smooth={true} >
                    <li className="my-3 py-1 border-b border-slate-800 hover:rounded">Profile</li>
                </Link> */}
                {firebase.isLoggedIn ? (
                    <>
                        <Link>
                            <li className='flex justify-center' >
                                <img
                                    src={userDetails.photoURL}
                                    alt="User Profile"
                                    className="rounded-full w-12 h-12 object-cover"
                                />
                            </li>
                        </Link>
                        <Link to='/login' onClick={handleLogout}>
                            <li className="my-3 py-1 border-b border-slate-800 hover:rounded">Logout</li>
                        </Link>
                    </>
                ) : (
                    <Link to="/login">
                        <li className="my-3 py-1 border-b border-slate-800 hover:rounded">Login</li>
                    </Link>
                )}
            </ul>
            <ul className="grid grid-cols-3 text-center text-2xl font-bold px-8 py-0">
            <Link to="" spy={true} smooth={true} >
                    <li className="my-3 py-1   hover:rounded"><span className='border-b border-slate-800'></span></li>
                </Link>
                <Link to="" spy={true} smooth={true} >
                    <li className="my-3 py-1 border-b border-slate-800 hover:rounded">Profile</li>
                </Link>
                <Link to="" spy={true} smooth={true} >
                    <li className="my-3 py-1   hover:rounded"><span className='border-b border-slate-800'></span></li>
                </Link>
                
            </ul>

        </div>
    );

    return (
        <nav className="z-50">
            <div className="font-gilroy h-16 flex justify-between z-50 text-black lg:py-5 md:px-12 px-4 py-4  fixed w-full backdrop-blur-sm bg-white/50">
                <div className="flex items-center md:flex-1 flex-none">
                    <span className="md:text-2xl text-xl"> Hi, {userName} </span>
                </div>
                <div className="flex items-center md:flex-none ">
                    <span className="text-3xl font-bold ml-3"> Farm2Market</span>
                </div>
                <div className=" md:flex md:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 items-center justify-center text-[20px]">
                            <Link to={"admin_create"}>
                                <li className="">Admin</li>
                            </Link>

                            {firebase.isLoggedIn ? (
                                <>
                                    <Link>
                                        <li>
                                            <img
                                                src={userDetails.photoURL}
                                                alt="User Profile"
                                                className="rounded-full w-12 h-12 object-cover"
                                            />
                                        </li>
                                    </Link>
                                    <Link to='/login' onClick={handleLogout}>
                                        <li className="">Logout</li>
                                    </Link>
                                </>
                            ) : (
                                <Link to="/login">
                                    <li className="">Login</li>
                                </Link>
                            )}
                        </ul>

                    </div>
                </div>
                <div>{click && content}</div>
                <button className="block md:hidden lg:hidden transition text-2xl" onClick={handleClick}>
                    {click ? <FaTimes /> : <FiAlignRight />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
