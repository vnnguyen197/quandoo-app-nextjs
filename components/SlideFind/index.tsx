import Image from "next/image";
import * as React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export interface SildeFindProps {}

const data = {
  h1: "It's time to treat yourself.",
  h2: "Let's book you a table - the Quandoo way."
}

export default function SildeFind(props: SildeFindProps) {
  return (
      <div className={style.slide}>
        <div className={style.slide__img}>
          <div className={style.slide__content}>
            <div className={style.slide__contentCenter}> 
                  <h1 className={style["slide__contentCenter--h1"]}>{data.h1}</h1>
                  <h2 className={style["slide__contentCenter--h2"]}>{data.h2}</h2> 
              </div> 
              <div className={style.slide__input}>
                  <input className={style.slide__find} placeholder="Find restaurant or cuisines" type="text"/>
                  <input className={style.slide__singapore} placeholder="Singapore" type="text" />
                  <button className={style.slide__button} type="submit">Find</button>
              </div>
              <div className={style.slide__search}>
                  <span className={style["slide__search--icon"]}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" fixedWidth />
                  </span>
                  <input className={style["slide__search--input"]} placeholder="Search" type="search" />
              </div>
            </div>
          </div>
        </div>
  );
}
