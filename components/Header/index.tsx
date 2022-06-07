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
        <div className={style.header__main} key={index}>
          <div className={style.header__left}>
            <Image src={logo} width={180} height={40} alt="logo" />
          </div>
          <div className={style.header__right}>
            <div className={style.header__item1}> {item.sub_title1} </div>
            <div className={style["header__item"]}> {item.sub_title2} </div>
            <div className={style["header__item"]}> {item.sub_title3} </div>
            <div className={style["header__item"]}> {item.sub_title4}
              <FontAwesomeIcon className={style.header__icon} icon={faAngleDown} size="lg" fixedWidth />
            </div>
            <div className={style["header__item  header__item--user"]}>
              <FontAwesomeIcon icon={faCircleUser} size="lg" fixedWidth />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
