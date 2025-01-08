import React, { useState, useEffect, useRef } from "react";

function NumberOfCars(){
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef<boolean>(false);
  
  const targetNumber: number = 743;
  const duration: number = 1500;
  const steps: number = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsVisible(true);
          hasStarted.current = true;
        }
      },
      {
        threshold: 0.5
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < targetNumber) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const nextCount = prevCount + Math.ceil((targetNumber - prevCount) / 10);
          return nextCount > targetNumber ? targetNumber : nextCount;
        });
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [count, isVisible]);

  return (
    <div 
      ref={componentRef} 
      className="bg-orange-400 flex flex-col pb-6 sm:pb-8 md:pb-10"
    >
      <div className="text-center pt-6 sm:pt-8 md:pt-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">
          عدد السيارات الموجودة
        </h1>
      </div>
      
      <div className="flex items-center justify-center overflow-hidden">
        <div className="flex items-center text-blue-950 relative">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white absolute -left-8 sm:-left-10 md:-left-12 top-1/2 -translate-y-1/2">
            +
          </span>
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[20rem] font-bold pl-8 sm:pl-10 md:pl-12">
            {count}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NumberOfCars;