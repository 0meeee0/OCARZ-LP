import { PlaneIcon, PlayCircle02Icon } from "hugeicons-react";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <img
          src="hero.png"
          alt="Hero image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-black/30 hover:bg-black/50 border border-white p-3 px-4 rounded-full shadow-md text-white text-2xl cursor-pointer">
            &#9658;
          </button>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-end">
        <div className="text-white p-4 sm:p-6 md:p-8 lg:p-12 max-w-2xl">
          <div className="text-right space-y-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
                عيتي ما تقلب
              </h1>
              <span className="text-orange-400 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
                علا طوموبيل ؟
              </span>
            </div>

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
              وفينما كتعيط كتلقى
              <br />
              !!!غير السماسرية
            </div>

            <div className="mt-8">
              <button className="bg-green-500 text-white font-bold px-6 py-3 text-lg sm:text-xl md:text-2xl hover:bg-green-600 transition-colors shadow-lg">
                عندنا ليك الحل
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
