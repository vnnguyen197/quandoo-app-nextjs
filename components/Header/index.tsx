import * as React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo_quandoo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { dataHeader } from "constant";

export interface HeaderProps {
}

export default function Header(props: HeaderProps) {
  return (
    <div className={style.header}>
      {dataHeader.map((item, index) => (
        <div className={style.header_main} key={index}>
          <div className={style.header_main__left}>
            <Image src={logo} width={180} height={40} alt="logo" />
          </div>
          <div className={style.header_main__right}>
            <div className={style["header_main__right--1"]}>{item.sub_title1}</div>
            <div className={style["header_main__right--2"]}>
              <div>{item.sub_title2}</div>
            </div>
            <div className={style["header_main__right--2"]}>{item.sub_title3}</div>
            <div className={style["header_main__right--3"]}> {item.sub_title4}
              <FontAwesomeIcon className={style["header_main__right--3--icon"]} icon={faAngleDown} size="lg" fixedWidth />
            </div>
            <div className={style["header_main__right--4"]}>
              <FontAwesomeIcon className={style["header_main__right--4--icon"]} icon={faCircleUser} size="lg" fixedWidth />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
