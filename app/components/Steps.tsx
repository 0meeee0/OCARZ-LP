import React, { useState } from "react";

interface Step {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
}

const Steps: React.FC = () => {
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
    <div className="h-screen bg-blue-950 flex flex-col">
      <div className="text-center py-6 items-center mx-auto">
        {/* <h2 className="text-white text-3xl font-bold">
          أشنو هما المراحل عند <span className="text-orange-400">OCARZ؟</span>
        </h2> */}
        <img src="steps.png" alt="" />
      </div>

      {/* left arrow */}
      <div className="flex-1 flex items-center justify-center relative">
        <button
          onClick={handlePrev}
          className="absolute left-52 text-white text-8xl"
        >
          &#8249;
        </button>

        <div className="flex items-center gap-8">
          <div className="relative inline-block">
            <div className="absolute z-0 bottom-[-10px] left-[-10px] bg-slate-400/50 w-44 h-52 rounded-bl-3xl"></div>
            <img
              src={steps[currentStep].imgSrc}
              alt="Image"
              className="rounded-3xl w-60 border-2 p-3 border-orange-300 z-10 relative"
            />
          </div>

          <div className="text-right">
            <h1 className="text-purple-300 text-8xl font-bold">
              {steps[currentStep].title}
            </h1>
            <h2 className="text-orange-300 text-6xl">
              {steps[currentStep].subtitle}
            </h2>
            <p className="text-white mt-4 text-lg max-w-lg">
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        {/* right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-52 text-white text-8xl"
        >
          &#8250;
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentStep ? "bg-orange-300" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
      <div className="flex justify-center py-10 sm:py-20">
        <button className="bg-orange-400 font-bold text-white py-4 sm:py-5 px-16 sm:px-24 md:px-32 text-2xl sm:text-4xl">
          جربو أوكارز
        </button>
      </div>
    </div>
  );
};

export default Steps;
