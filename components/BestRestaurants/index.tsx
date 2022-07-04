import * as React from "react";
import style from "./style.module.scss";
import { bestRestaurants } from "constant";
import Image from "next/image";
import _ from "lodash";

export interface IBestRestaurantsProps {}

export default function BestRestaurants(props: IBestRestaurantsProps) {
  return (
    <div className={style.content}>
      <div className={style.content__left}>
        <div className={style["content__left--title"]}>
          <h1 className={style["content__left--title--h1"]}>
            {bestRestaurants.title}
          </h1>
        </div>
        <div className={style["content__left--subtitle"]}>
          <p>{bestRestaurants.sub_title}</p>
        </div>
        <div className={style["content__left--button"]}>
          <div className={style["content__left--button--btn"]}>
            {bestRestaurants.button}
          </div>
        </div>
      </div>
      <div className={style.content__right}>
        {bestRestaurants.data &&
          bestRestaurants.data.map((item, index) => (
            <div
              className={style.content__food}
              key={index}
              {...bestRestaurants}
            >
              <div className={style.content__foodRight}>
                <div className={style.content__image}>
                  <Image
                    style={{ borderRadius: "8px" }}
                    src={item.img}
                    alt={item.title}
                    width={323}
                    height={182}
                    objectFit = 'cover'
                  />
                </div>
                <div className={style.content__title}>
                  <div className={style.content__titleRight}>
                    <h5 className={style["content__titleRight--h5"]}>
                      {item.title}
                    </h5>
                    <div className={style["content__titleRight--range"]}>
                      {item.range}
                    </div>
                    <div>
                    <span className={style["content__titleRight--range"]}>
                      {item.location}
                    </span>
                    <span className={style["content__titleRight--price"]}>
                      {_.times(item.price, (i) => (
                        <span
                          className={style["content__titleRight--price--bold"]}
                          key={i}
                        >
                          {" "}
                          ${" "}
                        </span>
                      ))}
                      {_.times(4 - item.price, (x) => (
                        <span key={x}>$</span>
                      ))}
                    </span>
                    </div>
                    <div>
                      <span className={style.content__rate}>
                        {item.rate}
                        <span className={style["content__rate--span"]}>/6</span>
                      </span>
                      <span className={style.content__comment}>
                        {item.comment}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className={style.content__button}>
          <div className={style["content__button--btn"]}>
            {bestRestaurants.button}
          </div>
        </div>
      </div>
    </div>
  );
}
