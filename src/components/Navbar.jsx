// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { FiAlignRight } from "react-icons/fi";
import { useFirebase } from '../context/Firebase';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const firebase = useFirebase();
    const handleLogout = () => {
        firebase.signOut();
        window.location.href = '/login'; // Redirect to login page after logout
    };
    console.log(firebase)

    const content = (
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 backdrop-blur-sm bg-white/50">
            <ul className="text-centre text-2xl font-bold px-8 py-0">
                <Link to={"hotels"} spy={true} smooth={true} >
                    <li className="my-3 py-1 border-b border-slate-800 hover:rounded">Admin</li>
                </Link>
                <Link to="" spy={true} smooth={true} >
                    <li className="my-3 py-1 border-b border-slate-800 hover:rounded">Profile</li>
                </Link>
                {firebase.isLoggedIn ? (
                    <Link onClick={handleLogout} >
                        <li className="" >Logout</li>
                    </Link>
                ) : (
                    <Link to="/login">
                        <li className="">Login</li>
                    </Link>
                )}

            </ul >
        </div>
    );



    return (
        <nav className="z-50">
            <div className="font-gilroy h-16 flex justify-between z-50 text-black lg:py-5 px-6 py-4  fixed w-full backdrop-blur-sm bg-white/50">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold "> Farm2Market</span>
                </div>
                <div className=" md:flex md:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[20px]">
                            <Link to={"admin_hotels"}   >
                                <li className="">Admin</li>
                            </Link>

                            {firebase.isLoggedIn ? (
                                <>
                                    <Link   >
                                        <li className="">Profile</li>
                                    </Link >
                                    <Link onClick={handleLogout} >
                                        <li className="" >Logout</li>
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
