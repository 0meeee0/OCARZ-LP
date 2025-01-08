import { Download01Icon, DownloadCircle02Icon } from "hugeicons-react";
import React from "react";
import JrboOcarz from "./JrboOcarz";

function Hdro() {
  // change font
  return (
    <div className=" bg-white">
      <div className="flex items-center justify-around">
        <img src="press.png" alt="" />
        <div className="flex justify-center align-center items-center">
          <h1 className="text-3xl font-bold text-orange-500">هضرو علينا</h1>
          <DownloadCircle02Icon size={50} color="white" fill="orange" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col py-7">
        <div className="space-y-5">
          <img
            className="mx-auto w-32 sm:w-48 md:w-64"
            src="logo2.png"
            alt=""
          />
          <h1 className="text-4xl sm:text-6xl md:text-8xl text-blue-950">
            عندها ليك الحل{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 sm:gap-16 lg:gap-40 items-center">
        <div className="flex flex-col items-center space-y-3">
          <img className="w-32 sm:w-40 md:w-96" src="checkCar.png" alt="" />
          <div className="w-80 sm:w-96 text-center font-bold">
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-900 py-5">
              وكنقلبو السيارة
            </p>
            <span className="mt-2 text-sm sm:text-base">{`لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر.`}</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <img className="w-32 sm:w-40 md:w-80" src="findCar.png" alt="" />
          <div className="w-80 sm:w-96 text-center font-bold">
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-900 py-5">
              كنلقاو ليك السيارة
            </p>
            <span className="mt-2 text-sm sm:text-base">{`لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر.`}</span>
          </div>
        </div>
      </div>
      <JrboOcarz />
    </div>
  );
}

export default Hdro;
