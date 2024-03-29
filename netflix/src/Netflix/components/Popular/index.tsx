import React from "react";
import Card from "./components/Card";
import Style from "./style.module.scss";
type Props = {};

const Popular = (props: Props) => {
  return (
    <div className={Style.popularContainer}>
      <h1>Phổ Biến Trên Netflix</h1>
      <div className={Style.container}>
        <div className={Style.card}>
          <Card />
        </div>
        <div className={Style.card}>
          <Card />
        </div>
        <div className={Style.card}>
          <Card />
        </div>
        <div className={Style.card}>
          <Card />
        </div>
        <div className={Style.card}>
          <Card />
        </div>
        <div className={Style.card}>
          <Card />
        </div>
        <div className={Style.card}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Popular;
