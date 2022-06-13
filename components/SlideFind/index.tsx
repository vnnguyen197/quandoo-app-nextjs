import Image from "next/image";
import * as React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export interface SildeFindProps {}

const data = {
  h1: "It's time to treat yourseft.",
  h2: "Let's book you a table - the Quandoo way."
}

export default function SildeFind(props: SildeFindProps) {
  return (
      <div className={style.slideMain}>
        <div className={style.slideImg}>
          <div className={style.slideContent}>
            <div className={style.content}>
              <h1>{data.h1}</h1>
              <h2>{data.h2}</h2>  
              <input className={style.inputFind} placeholder="Find restaurant or cuisines" type="text"/>
              <input className={style.inputSingapore} placeholder="Singapore" type="text" />
              <div className={style.search}>
                <span className={style.icon}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" fixedWidth />
                </span>
                <input className={style.inputSearch} placeholder="Search" type="search" />
              </div>
              <button type="submit">Find</button>
            </div>
          </div>
        </div>
      </div>
  );
}
