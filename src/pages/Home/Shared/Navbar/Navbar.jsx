import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
            >
                HOME
            </NavLink>
            <NavLink to="/contact" className="hover:text-yellow-400">
                CONTACT US
            </NavLink>
            <NavLink to="/dashboard" className="hover:text-yellow-400">
                DASHBOARD
            </NavLink>
            <NavLink to="/menu" className="hover:text-yellow-400">
                OUR MENU
            </NavLink>
            <NavLink to="/shop" className="hover:text-yellow-400">
                OUR SHOP
            </NavLink>
        </>
    );

    return (
        <div className="bg-black fixed z-10 w-[1280px] bg-opacity-30 mx-auto text-white px-6 py-4 flex justify-between items-center">
            {/* Left - Logo */}
            <div>
                <h1 className="text-xl font-bold">BISTRO BOSS</h1>
                <p className="text-sm tracking-widest">RESTAURANT</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 font-semibold">{navLinks}</div>

            {/* Right - Cart + Profile */}
            <div className="flex items-center space-x-4">
                {/* Cart */}
                <div className="relative">
                    <FaShoppingCart className="text-2xl cursor-pointer" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        1
                    </span>
                </div>

                {/* Sign Out */}
                <button className="hidden md:block hover:text-yellow-400">
                    SIGN OUT
                </button>

                {/* User Icon */}
                <FaUserCircle className="text-2xl cursor-pointer hidden md:block" />

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 md:hidden font-semibold">
                    {navLinks}
                    <button className="hover:text-yellow-400">SIGN OUT</button>
                    <FaUserCircle className="text-2xl cursor-pointer" />
                </div>
            )}
        </div>
    );
};

export default Navbar;
