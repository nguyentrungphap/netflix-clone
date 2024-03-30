import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div className="flex justify-between p-y[20px] sticky top-0  bg-black bg-opacity-80 z-10 px-[30px]">
      <div className="items-center flex z-10 gap-3">
        <Link
          to={"/home"}
          className="text-white no-underline text-xl my-[10px]"
        >
          <img className="h-[70px]" src={Logo} alt="..." />
        </Link>
        <Link
          to={"/home"}
          className="text-white no-underline text-xl my-[10px]"
        >
          Home
        </Link>
        <Link
          to={"/login"}
          className="text-white no-underline text-xl my-[10px]"
        >
          TV Shows
        </Link>
        <Link
          to={"/login"}
          className="text-white no-underline text-xl my-[10px]"
        >
          Movies
        </Link>
        <Link
          to={"/login"}
          className="text-white no-underline text-xl my-[10px]"
        >
          Recently Added
        </Link>
        <Link
          to={"/login"}
          className="text-white no-underline text-xl my-[10px]"
        >
          My List
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <button className="text-white">
          <SearchIcon />
        </button>
        <Link
          to={"/login"}
          className="text-white no-underline text-xl my-[10px]"
        >
          KIDS
        </Link>
        <Link
          to={"/login"}
          className="text-white no-underline text-xl my-[10px]"
        >
          DVD
        </Link>
        <Link
          to={"/login"}
          className="text-white no-underline text-xl my-[10px] text-white"
        >
          {/* <NotificationsNoneIcon /> */}
        </Link>
        <Link to="" className="text-white no-underline text-xl my-[10px]">
          USER
        </Link>
      </div>
    </div>
  );
}

export default Header;
