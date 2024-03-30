import React from "react";
import Fim from "./images/fim-img.webp";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Link to="/detail" className="inline-block w-48 h-64 object-cover mx-1 ">
      <img
        src={Fim}
        alt={Fim}
        className="w-full h-full object-cover rounded-xl"
      />
    </Link>
  );
}

export default Card;
