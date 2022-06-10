import Image from 'next/image';
import * as React from 'react';
import style from './style.module.scss';
import {flavours} from "constant"

export interface IFlavoursProps {
}

export default function Flavours (props: IFlavoursProps) {
  return (
    <div className={style.content}> 
      <div className={style.content__top}>
          <h3 className={style["content__top--h3"]}>{flavours.title}</h3>
          <span className={style["content__top--span"]}>{flavours.sub_title}</span>
      </div>
      <div className={style.content__button}>
        <button className={style["content__button--btn"]}>SINGAPORE</button>
      </div>
        <div >
           <ul className={style.content__bottom}>
              <li className={style.content__bottom___item}>
                  <Image className={style["content__bottom--img"]} src={flavours.img1} alt=" images" width={172} height={172}/>
                  <p className={style["content__bottom--p"]}>Asian</p>    
              </li>        
              <li className={style.content__bottom___item}>
                  <Image className={style["content__bottom--img"]} src={flavours.img2} alt=" images" width={172} height={172}/>
                  <p className={style["content__bottom--p"]}>Drinks</p>    
              </li>        
              <li className={style.content__bottom___item}>
                  <Image className={style["content__bottom--img"]} src={flavours.img3} alt=" images" width={172} height={172}/>
                  <p className={style["content__bottom--p"]}>Chinese</p>    
              </li>        
              <li className={style.content__bottom___item}>
                  <Image className={style["content__bottom--img"]} src={flavours.img4} alt=" images" width={172} height={172}/>
                  <p className={style["content__bottom--p"]}>Japanese</p>    
              </li>           
              <li className={style.content__bottom___item}>
                  <Image className={style["content__bottom--img"]} src={flavours.img5} alt=" images" width={172} height={172}/>
                  <p className={style["content__bottom--p"]}>Eat & Drinks</p>    
              </li>
            </ul>         
          </div> 
    </div>
  );
}
