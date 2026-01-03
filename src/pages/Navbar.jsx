import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LinkInfoContext } from '../context/LinkInfoContext'
import { UserInfoContext } from "../context/UserInfoContext";


export const Navbar = () => {

    const { userInfo } = useContext(UserInfoContext);
    const { getLinkDetails } = useContext(LinkInfoContext);

    const NavLinks = getLinkDetails(userInfo.u_role)

    return (
        <>
            <div className="navbar sticky top-5 z-50 bg-white/20 backdrop-blur-lg border shadow-md rounded-3xl px-4 my-5">

                {/* Left Icon */}
                <div className="navbar-start">
                    <a>
                        <img
                            className="w-10 h-10"
                            src="https://cdn-icons-png.flaticon.com/128/3665/3665892.png"
                            alt="Brand"
                        />
                    </a>
                </div>

                {/* Center Brand */}
                <div className="navbar-center">
                    <Link to="/home">
                        <h1 className="font-bold text-lg md:text-xl">AShopStopper</h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden md:flex">
                    <ul className="flex">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.linkurl}
                                    className="btn mx-2 rounded-2xl"
                                >
                                    {link.linkname}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end md:hidden">
                    <div className="dropdown dropdown-end">
                        <button className="btn btn-ghost btn-circle">
                            ☰
                        </button>

                        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                            {NavLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.linkurl}>{link.linkname}</Link>
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                </div>

            </div>

        </>
    )
}
