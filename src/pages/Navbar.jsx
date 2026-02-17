import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LinkInfoContext } from '../context/LinkInfoContext'
import { UserInfoContext } from "../context/UserInfoContext";
import { useTheme } from '../provider/ThemeProvider';
import { MdOutlineWbSunny, MdOutlineNightlight } from 'react-icons/md';


export const Navbar = () => {

    const { userInfo } = useContext(UserInfoContext);
    const { getLinkDetails } = useContext(LinkInfoContext);
    const { theme, toggleTheme } = useTheme();

    const NavLinks = getLinkDetails(userInfo.u_role)

    return (
        <>
            <div className={`navbar sticky top-5 z-50 backdrop-blur-lg border shadow-md rounded-3xl px-4 my-5 transition-all duration-300 ${theme === 'light' ? 'bg-white/70 border-gray-200' : 'bg-base-100/70 border-gray-700'}`}>

                {/* Left Icon */}
                <div className="navbar-start">
                    <Link to="/home">
                        <img
                            className="w-10 h-10"
                            src="https://cdn-icons-png.flaticon.com/128/3665/3665892.png"
                            alt="Brand"
                        />
                    </Link>
                </div>

                {/* Center Brand */}
                <div className="navbar-center">
                    <Link to="/home">
                        <h1 className="font-bold text-lg md:text-xl">AShopStopper</h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden md:flex items-center">
                    <ul className="flex items-center">
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
                    <button
                        onClick={toggleTheme}
                        className="btn btn-circle btn-ghost ml-4 text-2xl transition-all duration-300 transform hover:scale-110"
                        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    >
                        {theme === 'light' ? <MdOutlineNightlight className="text-gray-800" /> : <MdOutlineWbSunny className="text-yellow-400" />}
                    </button>
                </div>

                <div className="navbar-end md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="btn btn-circle btn-ghost text-xl mr-2"
                        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    >
                        {theme === 'light' ? <MdOutlineNightlight className="text-gray-800" /> : <MdOutlineWbSunny className="text-yellow-400" />}
                    </button>
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
