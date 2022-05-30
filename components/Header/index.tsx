import * as React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo_quandoo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export interface HeaderProps {
}

export default function Header(props: HeaderProps) {
  return (
    <div className={style.header}>
      <div className={style.headerMain}>
        <div className={style.headerLeft}>
          <Image src={logo} width={180} height={40} alt="logo" />
        </div>

        <div className={style.headerRight}>
          <div className={style.items1}>For restaurant</div>
          <div className={style.items2}>
            <div>Sign up</div>
          </div>
          <div className={style.items2}>Log in</div>
          <div className={style.items2}>
            EN
            <FontAwesomeIcon icon={faAngleDown} size="lg" fixedWidth />
          </div>
        </div>
      </div>
    </div>
  );
}
