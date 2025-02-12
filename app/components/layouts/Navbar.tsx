'use client'

import {
  Facebook02Icon,
  GlobalEditingIcon,
  InstagramIcon,
  Menu01Icon,
  NewTwitterIcon,
  XingIcon,
} from "hugeicons-react";
import React, { useState, useRef, useEffect } from "react";
import scrollToSection from "../../helpers/smoothScrolling";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav id="nav" className="flex justify-between items-center px-6 py-7 bg-[rgba(9,27,87,255)] text-white">
      <div className="flex items-center space-x-10">
        <div className="hidden md:flex ml-10 space-x-3">
          <a href="#" className="hover:text-gray-400">
            <Facebook02Icon size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <NewTwitterIcon size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <InstagramIcon size={20} />
          </a>
        </div>

        <a href="#" className="hover:text-gray-400 flex">
          <GlobalEditingIcon />
          <span>FR</span>
        </a>

        <button className="hidden md:block bg-green-500 px-4 py-1 rounded font-bold">
          جربو أوكارز
        </button>
      </div>

      <div className="flex items-center space-x-6 gap-5">
        <div className="hidden md:flex space-x-6 font-semibold">
          <a
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-orange-400"
          >
            نصائح
          </a>
          <a
            onClick={() => scrollToSection("car")}
            className="hover:text-orange-400"
          >
            أثمنة السيارات
          </a>
          <a
            onClick={() => scrollToSection("pricing")}
            className="hover:text-orange-400 cursor-pointer"
          >
            التسعير
          </a>
          <a href="#" className="hover:text-orange-400">
            الصفحة الرئيسية
          </a>
        </div>
        <img src="/logo.png" alt="logo" className="left-10" />
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <Menu01Icon size={20} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-0 z-10 left-0 w-full bg-[rgba(9,27,87,255)] text-white flex flex-col items-center space-y-4 py-6 md:hidden"
        >
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-400">
              <Facebook02Icon size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <NewTwitterIcon size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <InstagramIcon size={20} />
            </a>
          </div>
          <a
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-orange-400"
          >
            نصائح
          </a>
          <a
            onClick={() => scrollToSection("car")}
            className="hover:text-orange-400"
          >
            أثمنة السيارات
          </a>
          <a
            onClick={() => scrollToSection("pricing")}
            className="hover:text-orange-400 cursor-pointer"
          >
            التسعير
          </a>
          <a href="#" className="hover:text-orange-400">
            الصفحة الرئيسية
          </a>
          <button className="bg-green-500 px-4 py-1 rounded font-bold">
            جربو أوكارز
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
