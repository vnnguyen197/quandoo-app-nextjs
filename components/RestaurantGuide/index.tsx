import * as React from "react";
import Image from "next/image";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import _ from "lodash";
import { restaurantsguide } from "constant";

export interface IRestaurantGuideProps {
}

export default function RestaurantGuide(props: IRestaurantGuideProps) {

  const settings = {
    className : `${style.slider_restaurants}`,
    // className : `${style.slick_list}`,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className={style.content}>
      <h2 className={style.content__h2}> {restaurantsguide.title_main1} <span className={style["content__h2--span"]}>{restaurantsguide.title_span}</span> {restaurantsguide.title_main2} </h2>
      <div className={style.content__find}>
        <h3 className={style["content__find--h3"]}> {restaurantsguide.tilte_child} </h3>
        <p className={style["content__find--p"]}>{restaurantsguide.content}</p>
      </div>
      <div className={style.content__slider}>
        <Slider {...settings}>
          {restaurantsguide.data && restaurantsguide.data.map((item, index) => (
            <div className={style.content__food} key={index} {...restaurantsguide}>
              <Link href={`/quandoo/${item.id}`}>
                  <div className={style.content__box}>
                      <Image style={{borderRadius: "8px"}} className={style["content__box--img--item"]} src={item.img} alt={item.title} width={323} height={182} />
                      <div className={style.content__title}>
                        {item.title.length > 36 ? (
                          <h3 className={style["content__title--h3"]}>{item.title.slice(0, 36)}...</h3>
                        ) : (
                          <h3 className={style["content__title--h3"]}>{item.title}</h3>
                        )}
                      </div>
                    <div className={style.content__bottom}>
                      <div className={style.content__right}>
                            <div className={style["content__right--range"]}>{item.location}</div>
                            <span className={style["content__right--range"]}>{item.range}</span>
                            <span className={style["content__right--price"]}>
                              {_.times(item.price, (i) => (
                                <span className={style["content__right--price--bold"]} key={i}>
                                  $
                                </span>
                              ))}
                              {_.times(4 - item.price, (x) => (
                                <span key={x}>$</span>
                              ))}
                            </span>
                      </div>
                      <div className={style.content__left}>
                        <div className={style.content__rate}>{item.rate}<span className={style["content__rate--span"]}>/6</span></div>
                        <div className={style.content__comment}>
                          <span className={style["content__comment--span"]}>
                          <FontAwesomeIcon icon={faMessage} size="sm" width={8} height={8} fixedWidth />
                          </span>
                          <span style={{ marginLeft: "5px", fontSize: "14px" }}>
                            {item.comment}
                          </span>
                        </div>
                      </div>
                    </div> 
                  </div>
                </Link>           
            </div>
          ))}
        </Slider>
      </div>
      <div className={style.content__button}> 
        <div className={style["content__button--btn"]} >More restaurants</div>
        <Link href="/">
          <a className={style["content__button--a"]}>More restaurants</a>
        </Link>
      </div>
    </div>
  );
}   