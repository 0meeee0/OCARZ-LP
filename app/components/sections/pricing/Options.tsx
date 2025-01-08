import React from "react";

function Options() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 pb-10">
      <div className="w-full md:w-96 opacity-50 transition-all">
        <div className="text-xl text-center py-5">
          <img className="mx-auto w-auto h-auto" src="carsL.png" alt="" />
        </div>
        <div className="p-4 text-gray-700 text-center">
          <p className="mb-2 text-2xl md:text-4xl font-bold p-3">عندي غير هاد الفلوس</p>
          <p className="mb-2 font-bold text-slate-500 text-base md:text-xl">
            لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور
            النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس
            عشر.
          </p>
        </div>
        <div className="px-4 pb-10 text-center py-3">
          <button className="w-full md:w-48 px-6 md:px-10 py-1 text-xl md:text-2xl font-bold bg-[#FBA01A] text-white border-2 border-[#FBA01A] hover:text-[#FBA01A] hover:bg-white transition-colors">
            جربو أوكارز
          </button>
        </div>
      </div>

      <div className="w-full md:w-96">
        <div className="text-xl text-center py-5">
          <img className="mx-auto w-auto h-auto" src="cars.png" alt="" />
        </div>
        <div className="p-4 text-gray-700 text-center">
          <p className="mb-2 text-2xl md:text-4xl font-bold p-3">بغيت هادي ولا بحالها</p>
          <p className="mb-2 font-bold text-slate-500 text-base md:text-xl">
            لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور
            النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس
            عشر.
          </p>
        </div>
        <div className="px-4 pb-10 text-center py-3">
          <button className="w-full md:w-48 px-6 md:px-10 py-1 text-xl md:text-2xl font-bold bg-[#FBA01A] text-white border-2 border-[#FBA01A] hover:text-[#FBA01A] hover:bg-white transition-colors">
            جربو أوكارز
          </button>
        </div>
      </div>

      <div className="w-full md:w-96 opacity-50">
        <div className="text-xl text-center py-5">
          <img className="mx-auto w-auto h-auto" src="carsR.png" alt="" />
        </div>
        <div className="p-4 text-gray-700 text-center">
          <p className="mb-2 text-2xl md:text-4xl font-bold p-3">بغيت هاد الطوموبيل</p>
          <p className="mb-2 font-bold text-slate-500 text-base md:text-xl">
            لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور
            النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس
            عشر.
          </p>
        </div>
        <div className="px-4 pb-10 text-center py-3">
          <button className="w-full md:w-48 px-6 md:px-10 py-1 text-xl md:text-2xl font-bold bg-[#FBA01A] text-white border-2 border-[#FBA01A] hover:text-[#FBA01A] hover:bg-white transition-colors">
            جربو أوكارز
          </button>
        </div>
      </div>
    </div>
  );
}

export default Options;
