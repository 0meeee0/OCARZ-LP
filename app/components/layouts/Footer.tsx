import scrollToSection from "@/app/helpers/smoothScrolling";
import {
  ArrowUp01Icon,
  ArrowUp02Icon,
  Facebook01Icon,
  InstagramIcon,
  YoutubeIcon,
} from "hugeicons-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#091C59] py-10">
      <div className="container mx-auto text-white flex flex-wrap justify-around items-start">
        <div className="flex flex-col space-y-3 items-end">
          <img src="logo.png" alt="Logo" className=" mb-4" />
          <a href="" className="hover:text-[#FBA01A]">
            الصفحة الرئيسية
          </a>
          <a href="" className="hover:text-[#FBA01A]">
            الخدمات
          </a>
          <a href="" className="hover:text-[#FBA01A]">
            أثمنة السيارات
          </a>
          <a href="" className="hover:text-[#FBA01A]">
            التسعير
          </a>
          <a href="" className="hover:text-[#FBA01A]">
            الإتصال
          </a>
        </div>

        <div className="text-right">
          <p className="bg-[#FBA01A] w-64 py-2 mb-4 text-right pr-5 rounded-sm text-white font-bold">
            آخر المقالات
          </p>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="mb-3">
              <span className="text-[#FBA01A] text-sm">02-01-2022</span>
              <p className="font-bold text-sm">عنوان عنوان عنوان عنوان </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <p className="bg-[#FBA01A] w-64 py-2 mb-4 text-right pr-5 rounded-sm text-white font-bold">
            تابعنا
          </p>
          <div className="flex justify-between w-64 gap-2 mb-4">
            <div className="bg-[#FF0000] w-32 h-16 flex items-center justify-end rounded-sm px-4 gap-3">
              <div className="text-white items-end text-right">
                <p className="relative top-2 font-bold text-lg">1</p>
                <p className="text-sm">مشترك</p>
              </div>
              <YoutubeIcon className="text-white text-2xl" />
            </div>
            <div className="bg-[#4267B2] w-32 flex items-center justify-end rounded-sm px-4 gap-3">
              <div className="text-white text-right flex flex-col items-end">
                <p className="relative top-2 font-bold text-lg">2</p>
                <p className="text-sm">معجب</p>
              </div>
              <Facebook01Icon className="text-white text-2xl" />
            </div>
          </div>
          <div className="bg-[#C13584] w-64 h-16 flex items-center justify-end rounded-sm px-4 gap-3">
            <div className="text-white items-end text-right">
              <p className="relative top-2 font-bold text-lg">88787</p>
              <p className="text-sm">متابع</p>
            </div>
            <InstagramIcon className="text-white text-2xl" />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <a
          onClick={() => scrollToSection("nav")}
          className="relative w-10 h-10 bg-orange-400 rounded-full flex justify-center items-center cursor-pointer z-10"
        >
          <ArrowUp02Icon color="white" />
        </a>
        <div className="absolute left-0 right-0 h-[0.2px] bg-orange-400" />
      </div>
      <div className="text-center pt-2 text-white">
        <p className="font-bold">2025 © جميع الحقوق محفوظة | تصميم وتطوير بواسطة فريق واحة</p>
      </div>
    </footer>
  );
}

export default Footer;
