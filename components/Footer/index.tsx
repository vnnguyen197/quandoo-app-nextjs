import * as React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import googlePlay from "../../public/images/googleplay.svg";
import appStore from "../../public/images/appstore.svg";
import imgfooter from "../../public/images/imgfooter.png.jpg";
import { dataFooter } from "constant";
import useCollapse from "react-collapsed";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <footer className={style.footer}>
      <div className={style.footer_main}>
        {dataFooter.map((item, index) => (
          <div className={style.footer_main__item} key={index}>
            <div className={style["footer_main__item--desktop"]}>
              <h3>{item.title}</h3>
              <>
                {item.sub_title.map((sub_title, index) =>(
                    <div key={index}>
                        <div className={style["footer_main__item--desktop--item"]}>
                          {sub_title}
                        </div>
                    </div>
                ))}
              </>
            </div>
            <div className={style["footer_main__item--mobile"]}>
               <div className={style["footer_main__item--mobile--collapse"]} {...getToggleProps()}>
                  <h3 className={style["footer_main__item--mobile--collapse--h3"]}>{item.title}</h3>
                  <div className={style["footer_main__item--mobile--collapse-icon"]}>
                    {isExpanded ? (
                      <FontAwesomeIcon className={style["footer_main__item--mobile--collapse--1"]} icon={faAngleUp} size="lg" fixedWidth />
                            ) : (
                      <FontAwesomeIcon className={style["footer_main__item--mobile--collapse--1"]} icon={faAngleDown} size="lg" fixedWidth />
                    )}
                  </div>
                </div>
                <div className={style["footer_main__item--mobile--subtitle"]} {...getCollapseProps()}>
                  <>
                    {item.sub_title.map((sub_title, index) =>(
                      <div key={index}>
                        <div className={style["footer_main__item--mobile--subtitle--item"]}>
                          {sub_title}
                        </div>
                      </div>
                      ))}
                  </>
                </div> 
            </div>
          </div>
        ))}
        <div className={style.footer_main__social}>
          <h3 className={style["footer_main__social--h3"]}>SOCIAL</h3>
          <FontAwesomeIcon className={style["footer_main__social--1"]} icon={faFacebook}/>
          <FontAwesomeIcon className={style["footer_main__social--2"]} icon={faTwitter} />
          <FontAwesomeIcon className={style["footer_main__social--2"]} icon={faInstagram} />
        </div>
        <div className={style.footer_main__apps}>
          <h3 className={style["footer_main__apps--h3"]}>APPS</h3>
          <div className={style["footer_main__apps--icons"]}>
              <div className={style["footer_main__apps--icons--googleplay"]}>
                <Image src={googlePlay} width={136} height={40} alt="google play" />
              </div>
              <div className={style["footer_main__social-images-appstore"]}>
                <Image src={appStore} width={136} height={40} alt="app store" />
              </div>
          </div>
        </div>
      </div>
      <div className={style.footer_bottom}>
        <Image className={style["footer_bottom--image"]} src={imgfooter} width={200} height={40} alt="images footer"/>
        <div className={style.footer_bottom__intro}>
          ©2022 Quandoo GmbH. All rights reserved
        </div>
      </div>
    </footer>
  );
}

