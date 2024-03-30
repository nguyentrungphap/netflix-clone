import React from "react";
import Popular from "../../component/Popular";
import Header from "../../component/Header";
import Slider from "../../component/Slider";

function HomePage() {
  return (
    <div className="bg-black">
      <Header />
      <Slider />
      <Popular />
      <Popular />
      <Popular />
    </div>
  );
}

export default HomePage;
