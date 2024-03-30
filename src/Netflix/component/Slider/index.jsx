import React, { useState, useEffect, useRef } from "react";
import Slider1 from "./images/slider-1.jpeg";
import Slider2 from "./images/slider-2.jpg";
import Slider3 from "./images/slider-3.jpg";

const slides = [Slider1, Slider2, Slider3];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 5000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);
  return (
    <div className="carousel relative w-full px-[70px] py-[40px]">
      <div className="carousel-inner relative overflow-hidden w-full h-[500px] rounded">
        {slides.map((slide, index) => (
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            key={index}
          >
            <img
              src={slide}
              className="w-full h-full "
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
