import * as React from "react";
import googlePlay from "../../public/images/googleplay.svg";
import appStore from "../../public/images/appstore.svg";
import style from "./style.module.scss";
import { bookingApp } from "constant";
import Image from "next/image";

export interface IBookingAppProps {}

export default function BookingApp(props: IBookingAppProps) {
  return (
    <>
    <div className={style.app}>
      <div className={style.app__booking}>
        <div className={style.app__left}>
          <div style={{paddingRight: "35px"}}>
          <h4 className={style["app__left--h4"]}>{bookingApp.title}</h4>
          </div>
          <div className={style["app__left--img"]}>
            <Image src={appStore} alt="app store" width={136} height={40} />
            <Image src={googlePlay} alt="google play" width={136} height={40} />
          </div>
        </div>
        <div className={style.app__right}>
          <Image className={style["app__right--img"]} src={bookingApp.img} alt="booking mobile" width={230} height={230} />
        </div>
      </div>
    </div>
    <div className={style.border}></div>
    </>
  );
}
