import React from "react";
import { Link } from "react-router-dom";
import BackgroundLogin from "./images/background.jpg";
import Header from "../../component/Header";
function RegisterPage() {
  return (
    <div className="h-[100vh]  relative">
      <Header />
      <div className="flex justify-center items-center h-[90vh] ">
        <div className="flex flex-col px-[48px] py-[68px] z-10 gap-5 bg-black bg-opacity-80">
          <h2 className="text-4xl text-white">Sign Up</h2>
          <input
            className="w-[400px] h-[30px] text-base pl-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-[400px] h-[30px] text-base pl-2 number-input-no-spinners"
            type="number"
            placeholder="Phone number"
          />
          <input
            className="w-[400px] h-[30px] text-lg pl-2"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-[400px] h-[30px] text-lg pl-2"
            type="password"
            placeholder="Re-enter the password"
          />
          <button className="bg-red-500 text-white text-base h-[50px]">
            Sign Up
          </button>

          <span className="text-gray-400">
            Already using Netflix? &nbsp;
            <Link className="text-white" to="/login">
              Sign in now.
            </Link>
          </span>
        </div>
      </div>
      <div className="absolute top-0 z-0 ">
        <img className="h-[100vh]" src={BackgroundLogin} alt="Background" />
      </div>
    </div>
  );
}

export default RegisterPage;
