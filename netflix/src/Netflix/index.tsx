import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Style from "./style.module.scss";
import "../index.css";

type Props = {};

const Netflix = (props: Props) => {
  return (
    <div className={Style.Netflix}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Netflix;
