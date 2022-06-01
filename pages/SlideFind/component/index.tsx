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
          <div className={style.slideContent}>
            <div className={style.content}>
              <h1> It's time to treat yourseft</h1>
              <h2> Let's book you a table - the Quandoo way. </h2>
            </div>
            <div className={style.contentBottom}>
              <input className={style.inputFind} placeholder="Find restaurant or cuisines" type="text"/>
              <input className={style.inputSingapore} placeholder="Singapore" type="text" />
              <button type="submit">Find</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
