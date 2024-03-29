import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Logo from "./asset/Image/logo.png";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className={Style.headerComponent}>
        <div className={Style.headerNav}>
          <Link to={"/home"} className={Style.navLink}>
            <img className={Style.headerLogo} src={Logo} alt="..." />
          </Link>
          <Link to={"/home"} className={Style.navLink}>
            Home
          </Link>
          <Link to={"/login"} className={Style.navLink}>
            TV Shows
          </Link>
          <Link to={"/login"} className={Style.navLink}>
            Movies
          </Link>
          <Link to={"/login"} className={Style.navLink}>
            Recently Added
          </Link>
          <Link to={"/login"} className={Style.navLink}>
            My List
          </Link>
        </div>
        <div className={Style.headerUser}>
          <button>
            <SearchIcon />
          </button>
          <Link to={"/login"} className={Style.navLink}>
            KIDS
          </Link>
          <Link to={"/login"} className={Style.navLink}>
            DVD
          </Link>
          <Link to={"/login"} className={`${Style.navLink} ${Style.navIcon}`}>
            <NotificationsNoneIcon />
          </Link>
          <Link to={"/login"} className={Style.navLink}>
            USER
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
