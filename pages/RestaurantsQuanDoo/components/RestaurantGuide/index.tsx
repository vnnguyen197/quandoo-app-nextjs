import * as React from "react";
import Image from "next/image";
import style from "./style.module.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { restaurantsguide } from "constant";

export interface IRestaurantGuideProps {}

export default function RestaurantGuide(props: IRestaurantGuideProps) {
  const settings = {
    className: "slider-restaurants",
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <div className={style.content}>
      <div>
        {restaurantsguide.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <div className={style.contentCarousel}>
              <Slider {...settings}>
                <div key={1}>
                  <h3>1</h3>
                </div>
              </Slider>
            </div>
            <div className={style.button}>
              <button type="button">More restaurants</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
{
  /* <h2>
        Explore our <span>restaurant guide</span> to Singapore</h2>
      <div className={style.contentFind}>
        <h3> Find your new local restaurant </h3>
        <p>
          Get cosy and comfortable at some of Singapore's most-loved
          restaurants.
        </p>
      </div> */
}
