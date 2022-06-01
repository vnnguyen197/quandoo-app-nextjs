import Image from "next/image";
import * as React from "react";
import logoSlide from "../../../public/images/home_hero_bg.avif";
import style from "./style.module.scss"

export interface SildeFindProps {}

export default function SildeFind(props: SildeFindProps) {
  return (
    <div className={style.slide}>
      <div className={style.slideMain}>
        <Image className={style.images} src={logoSlide} alt="logoSlide"  />
        <div className={style.b}>
        <h1> It is time to treat yourseft</h1>
        <h2> Let is book you a table - the Quandoo way. </h2>
        <input type="text" placeholder="Find retaurants or cuisines" />
        <input type="text" placeholder="Singapore" />
        </div>
        <button> Find </button>
      </div>
    </div>
  );
}
