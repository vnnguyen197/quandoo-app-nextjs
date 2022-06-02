import * as React from 'react';
import Image from "next/image";
import style from './style.module.scss';

export interface IRestaurantGuideProps {

}

export default function RestaurantGuide (props: IRestaurantGuideProps) {
  return (
    <div className={style.content}>
       <h2> Explore our <span>restaurant guide</span> to Singapore </h2>
       <div className={style.contentFind}>
         <h3> Find your new local restaurant </h3>
         <p>Get cosy and comfortable at some of Singapore's most-loved restaurants.</p>
       </div>
       <div className={style.button}>
         <button type="button">More restaurants</button>
       </div>
    </div>
  );
}
