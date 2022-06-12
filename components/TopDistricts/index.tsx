import * as React from 'react';
import { topDistricts } from 'constant';
import style from "./style.module.scss";


export interface ITopDistrictsProps {
}

export default function TopDistricts (props: ITopDistrictsProps) {
  return (
    <div className={style.content}>
        <div className={style.content__top}>
          <h4>{topDistricts.title1}</h4>
          <h4>{topDistricts.title2}</h4>
          <h4>{topDistricts.title3}</h4>
        </div>
        <div className={style.content__bottom}>
            <ul>
              <li>
                  {topDistricts.data1}
              </li>
            </ul>
            <ul>
            <li>
                  {topDistricts.data2}
              </li>
            </ul>
             <ul> 
              <li>
                  {topDistricts.data3}
              </li>
            </ul>
        </div>
    </div>
  );
}
