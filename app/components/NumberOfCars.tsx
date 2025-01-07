import React, { useState, useEffect, useRef } from "react";

const NumberOfCars = () => {
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
    <div ref={componentRef} className="bg-orange-400 flex flex-col pb-10">
      <div className="text-center pt-10">
        <h1 className="text-6xl font-bold text-blue-950">
          عدد السيارات الموجودة
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center text-blue-950">
          <span className="text-9xl font-bold text-white">+</span>
          <h1 className="text-[20rem] font-bold">{count}</h1>
        </div>
      </div>
    </div>
  );
};

export default NumberOfCars;