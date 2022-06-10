import * as React from "react";
import style from "./style.module.scss";
import { districts } from "constant";


export interface IDistrictsProps {}

export default function Districts(props: IDistrictsProps) {


  return (
    <div className={style.content}>
      <div className={style.content__title}>
        <h2 className={style["content__title--h2"]}>{districts.h2}</h2>
        <p className={style["content__title--p"]}>{districts.h3}</p>
      </div>
      <div className={style.content__row}>
        <button className={`${style.content__buttons} ${style["content__buttons--btn1"]}`}>
          {districts.button1}
        </button>
        <button className={`${style.content__buttons} ${style["content__buttons--btn2"]}`}>
          {districts.button2}
        </button>
        <button className={`${style.content__buttons} ${style["content__buttons--btn3"]}`}>
          {districts.button3}
        </button>
        <button className={`${style.content__buttons} ${style["content__buttons--btn4"]}`}>
          {districts.button4}
        </button>
        <button className={`${style.content__buttons} ${style["content__buttons--btn5"]}`}>
          {districts.button5}
        </button>
        <button className={`${style.content__buttons} ${style["content__buttons--btn6"]}`}>
          {districts.button6}
        </button>
      </div>
     
    </div>
  );
}
