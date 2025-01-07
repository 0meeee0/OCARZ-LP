import { Facebook02Icon, GlobalEditingIcon, InstagramIcon, NewTwitterIcon } from 'hugeicons-react';
import React from 'react';

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-7 bg-[rgba(9,27,87,255)] text-white">
            <div className="flex items-center space-x-10">
                <div className='flex ml-10 space-x-3'>
                    <a href="#" className="hover:text-gray-400"><Facebook02Icon size={20}/> </a>
                    <a href="#" className="hover:text-gray-400"> <NewTwitterIcon size={20}/> </a>
                    <a href="#" className="hover:text-gray-400"><InstagramIcon size={20}/> </a>
                </div>

                <a href="#" className="hover:text-gray-400 flex"> <GlobalEditingIcon/><span>FR</span></a>
                    

                <button className="bg-green-500 px-4 py-1 rounded font-bold">جربو أوكارز</button>
            </div>
            <div className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-6 font-semibold">
                    <a href="#" className="hover:text-orange-400">نصائح</a>
                    <a href="#" className="hover:text-orange-400">أثمنة السيارات</a>
                    <a href="#" className="hover:text-orange-400">التسعير</a>
                    <a href="#" className="hover:text-orange-400">الصفحة الرئيسية</a>
                </div>
                <img src="/logo.png" alt="logo" className="px-10" />
            </div>
        </nav>
    );
}

export default Navbar;
