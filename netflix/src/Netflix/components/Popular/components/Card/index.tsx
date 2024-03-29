import React from "react";
import Fim from "../asset/Image/fim-img.webp";
import Style from "./style.module.scss";
type Props = {};

const Card = (props: Props) => {
  return (
    <div className={Style.cardContent}>
      <div className={Style.cardItem}>
        <img className={Style.image} src={Fim} alt="..." />
        <div className={Style.cardButton}>
          <button className={Style.newEpisode}>Tập mới</button>
          <button className={Style.watchNow}>Xem ngay</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
