import React, { useState } from "react";
import JrboOcarz from "./JrboOcarz";

interface Step {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
}

const Steps = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps: Step[] = [
    {
      title: "المرحلة 1",
      subtitle: "واتساب",
      description:
        "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر.",
      imgSrc: "phone.webp",
    },
    {
      title: "المرحلة 2",
      subtitle: "فيسبوك",
      description:
        "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر.",
      imgSrc: "phone.webp",
    },
    {
      title: "المرحلة 3",
      subtitle: "تويتر",
      description:
        "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر.",
      imgSrc: "phone.webp",
    },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col px-4 md:px-8">
      <div className="text-center py-4 md:py-6">
        <img src="steps.png" alt="" className="max-w-full h-auto mx-auto" />
      </div>

      <div className="flex-1 flex items-center justify-center relative py-8 md:py-12">
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-4 lg:left-52 text-white text-4xl lg:text-8xl hover:text-orange-300 transition-colors"
        >
          &#8249;
        </button>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4">
          <div className="relative inline-block w-full md:w-auto">
            <div className="absolute z-0 bottom-[-10px] left-[-10px] bg-slate-400/50 w-36 md:w-44 h-44 md:h-52 rounded-bl-3xl"></div>
            <img
              src={steps[currentStep].imgSrc}
              alt="Step illustration"
              className="rounded-3xl w-full md:w-60 border-2 p-3 border-orange-300 z-10 relative"
            />
          </div>

          <div className="text-right w-full md:w-auto">
            <h1 className="text-purple-300 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              {steps[currentStep].title}
            </h1>
            <h2 className="text-orange-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {steps[currentStep].subtitle}
            </h2>
            <p className="text-white mt-4 text-base md:text-lg max-w-lg">
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="hidden md:block absolute right-4 lg:right-52 text-white text-4xl lg:text-8xl hover:text-orange-300 transition-colors"
        >
          &#8250;
        </button>
      </div>

      <div className="flex justify-center gap-4 md:hidden mb-4">
        <button
          onClick={handlePrev}
          className="text-white text-4xl hover:text-orange-300 transition-colors"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="text-white text-4xl hover:text-orange-300 transition-colors"
        >
          &#8250;
        </button>
      </div>

      <div className="flex justify-center mb-4">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full mx-1 transition-colors ${
              index === currentStep ? "bg-orange-300" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
      <JrboOcarz />
    </div>
  );
};

export default Steps;