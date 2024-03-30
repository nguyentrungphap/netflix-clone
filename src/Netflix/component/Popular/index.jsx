import React, { useRef } from "react";
import Card from "./Card";

function Popular() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      const currentScroll = scrollRef.current.scrollLeft;
      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="px-[40px]">
      <h2 className="text-4xl text-white my-[30px]">Trending Now</h2>
      <div className="flex items-center relative">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-30 bg-black text-white p-2 m-2"
        >
          &#8592;
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto w-full hide-scrollbar"
        >
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 z-30 bg-black text-white p-2 m-2"
        >
          &#8594; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}

export default Popular;
