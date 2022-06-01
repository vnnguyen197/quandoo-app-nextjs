import Image from "next/image";
import * as React from "react";
import logoSlide from "../../../public/images/home_hero_bg.avif";
import style from "./style.module.scss";

export interface SildeFindProps {}

export default function SildeFind(props: SildeFindProps) {
  return (
    <div className={style.slide}>
      <div className={style.slideMain}>

        <div className={style.slideImg}>
          <Image className={style.images} src={logoSlide} alt="logoSlide"/>
        </div>

        <div className={style.slideContent}>
          <h1> It is time to treat yourseft</h1>
          <h2> Let is book you a table - the Quandoo way. </h2>
          <div className={style.contentBottom}>
            <input placeholder="Find restaurant or cuisines" type="text" />
            <input placeholder="Singapore" type="text" />
            <button type="submit">Find</button>
          </div>
        </div>

      </div>
    </div>
  );
}
