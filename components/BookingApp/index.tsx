import * as React from "react";
import googlePlay from "../../public/images/googleplay.svg";
import appStore from "../../public/images/appstore.svg";
import style from "./style.module.scss";
import { bookingApp } from "constant";
import Image from "next/image";

export interface IBookingAppProps {}

export default function BookingApp(props: IBookingAppProps) {
  return (
    <div className={`container ${style.booking}`}> 
      <div className={style.booking__app}>
        <div className={style.booking__content}>
          <div className={style.booking__left}>
                  <h3 className={style["booking__left--h3"]}>{bookingApp.title}</h3>
            <div className={style["booking__left--img"]}>
                <Image src={appStore} alt="app store" width={136} height={40} />
                <Image src={googlePlay} alt="google play" width={136} height={40} />
            </div>
          </div>
          <div className={style.booking__right}>
            <Image className={style["booking__right--img"]} src={bookingApp.img} alt="booking mobile" width={230} height={290} />
          </div>
        </div>
    </div>
    <div className={style.booking__border}></div>
  </div>
  );
}
