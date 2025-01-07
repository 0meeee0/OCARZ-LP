import React from 'react'

function Hero() {
  return (
    // to adjust later
    <div className="relative">
        <img src="hero.png" alt="Hero image" className="w-full h-auto" />
        <div className="absolute inset-0 bg-gray-800 opacity-50 right-0"></div>
        <div className="absolute top-1/3 right-0 transform translate-y-[-50%] text-white p-4 z-10 font-bold ">
            <div className="text-4xl sm:text-6xl md:text-8xl pb-2">
                <h1 className="">
                    عيتي ما تقلب
                </h1>
                <span className="text-orange-500 block ">علا طوموبيل ؟</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-5xl right-6">
                وفينما كتعيط كتلقى  <br />!!!غير السماسرية
            </div><br />
            <button className="mt-4 px-10 py-3 text-3xl bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors absolute right-8 mr-8 sm:mr-4 md:mr-0 sm:px-6 sm:py-2 sm:text-xl">
                عندنا ليك الحل
            </button>
        </div>
    </div>
  )
}

export default Hero
