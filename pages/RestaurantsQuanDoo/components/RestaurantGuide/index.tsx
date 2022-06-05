import * as React from "react";
import Image from "next/image";
import style from "./style.module.scss";
import { restaurantsguide } from "constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import _ from "lodash";


export interface IRestaurantGuideProps {}

export default function RestaurantGuide(props: IRestaurantGuideProps) {
  const settings = {
    className : "{style.slider_restaurants}",
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={style.content}>
      <h2> {restaurantsguide.title_main1} <span>{restaurantsguide.title_span}</span> {restaurantsguide.title_main2} </h2>
      <div className={style.contentFind}>
        <h3> {restaurantsguide.tilte_child} </h3>
        <p>{restaurantsguide.content}</p>
      </div>
      <div className={style.slider}>
        <Slider {...settings}>
          {restaurantsguide.data && restaurantsguide.data.map((item, index) => (
            <div className={style.contentFood} key={index}>
              <Link href={`/quandoo/${item.id}`}>
                  <div className={style.contentBox}>
                    <div className={style.imgFood}>
                      <Image src={item.img} alt={item.title} width={323} height={182} />
                    </div>
                    <div className={style.contentBoxInfor}>
                      <div className={style.title}>
                        {item.title.length > 36 ? (
                          <h3>{item.title.slice(0, 36)}...</h3>
                        ) : (
                          <h3>{item.title}</h3>
                        )}
                      </div>
                      <div className={style.mainBottom}>
                      <div className={style.contentRight}>
                        <div className={style.title}>
                            <div className={style.location}>{item.location}</div>
                            <span className={style.range}>{item.range}</span>
                            <span className={style.price}>
                              {_.times(item.price, (i) => (
                                <span className={style.bold} key={i}>
                                  $
                                </span>
                              ))}
                              {_.times(4 - item.price, (x) => (
                                <span key={x}>$</span>
                              ))}
                            </span>
                        </div>
                      </div>
                      <div className={style.contentLeft}>
                        <div className={style.rate}>{item.rate}<span>/6</span></div>
                        <div className={style.comment}>
                          <span className={style.commentIcon}>
                          <FontAwesomeIcon icon={faMessage} size="lg" width={12} height={12} fixedWidth />
                          </span>
                          <span style={{ marginLeft: "5px" }}>
                            {item.comment}
                          </span>
                        </div>
                      </div>
                      </div> 
                    </div>
                  </div>
                </Link>           
            </div>
          ))}
        </Slider>
      </div>
      <div className={style.button}>
        <button type="button">More restaurants</button>
        <Link href="/">
          <a>More restaurants</a>
        </Link>
      </div>
    </div>
  );
}   