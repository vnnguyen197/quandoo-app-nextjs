import * as React from "react";
import { booking } from "constant";
import style from "./style.module.scss";
import Image from "next/image";

export interface IBookingProps {}

export default function Booking(props: IBookingProps) {
  return (
    <div className={style.content}>
      <div className={style.content__border}><div className={style["content__border--item"]}></div></div>
      <h1 className={style.content__h1}>  {booking.title} <span className={style["content__h1--span"]}> {booking.span}  </span> </h1>
      <div className={style.content__bottom}>
        {booking.data1.map((item, index) => (
          <div key={index}>
            <div className={style.content__items}>
              <div className={style.content__image}>
              <Image className={style["content__image--img"]} src={item.img} alt={item.title}  width={210} height={140}  />
              </div>
              <div className={`${style.content__title} ${style['content__title--user1']}`}>
                  <h2 className={style["content__title--h2"]}>{item.title}</h2>
                  <span className={style["content__title--span"]}>{item.note}</span>
              </div>
            </div>
          </div>
        ))}
        {booking.data2.map((item, index) => (
          <div key={index}>
            <div className={`${style.content__items} ${style["content__items--flexbox"]}`} >
            <div className={style.content__image}>
              <Image className={style["content__image--img"]} src={item.img} alt={item.title}  width={175} height={140}  />
              </div>
              <div className={`${style.content__title} ${style['content__title--user2']}`}>
                  <h2 className={style["content__title--h2"]}>{item.title}</h2>
                  <span className={style["content__title--span"]}>{item.note}</span>
              </div>
            </div>
          </div>
        ))}
        {booking.data3.map((item, index) => (
          <div key={index}>
            <div className={style.content__items}>
            <div className={style.content__image}>
              <Image className={style["content__image--img"]} src={item.img} alt={item.title}  width={140} height={110}  />
              </div>
              <div className={`${style.content__title} ${style['content__title--user1']}`}>
                  <h2 className={style["content__title--h2"]}>{item.title}</h2>
                  <span className={style["content__title--span"]}>{item.note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
