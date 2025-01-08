import React from "react";
import JrboOcarz from "./JrboOcarz";

const testimonials = [
  {
    id: 1,
    imgSrc: "phone.webp",
  },
  {
    id: 2,
    imgSrc: "phone.webp",
  },
  {
    id: 3,
    imgSrc: "phone.webp",
  },
];

function Testimonials() {
  return (
    <div className=" bg-white">
      <div className="text-center py-10 items-center mx-auto">
        <h1 className="text-6xl font-bold text-blue-950">
          جربونا و دواو علينا
        </h1>
      </div>

      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-center items-start space-x-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-white border border-orange-300 rounded-3xl shadow-lg p-2 w-80 ${
                index === 0 ? "top-10" : index === 2 ? "top-10" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute z-0 bottom-[-16px] left-[-17px] bg-slate-400/50 w-44 h-52 rounded-bl-3xl"></div>
                <div className="relative z-10">
                  <img
                    src={testimonial.imgSrc}
                    alt={`testimonial-${testimonial.id}`}
                    className="rounded-xl w-98 h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <button className="bg-black/30 hover:bg-black/50 border border-white p-3 px-4 rounded-full shadow-md text-white text-2xl transition-colors">
                      &#9658;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full mt-10 mx-1 ${
                index === 1 ? "bg-orange-400" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <JrboOcarz />
    </div>
  );
}

export default Testimonials;
