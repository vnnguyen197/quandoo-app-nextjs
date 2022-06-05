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
      <div className={style.footerMain}>
        {dataFooter.map((item, index) => (
          <div className={style.footerItem} key={index}>

            <div className={style.desktop}>
              <h3>{item.title}</h3>
              <div>
                {item.sub_title.map((sub_title, index) =>(
                    <div key={index}>
                        <div className={style.item}>
                          {sub_title}
                        </div>
                    </div>
                ))}
              </div>
            </div>
            <div className={style.mobile}>
               <div className={style.collapseMobile} {...getToggleProps()}>
                  <h3 className={style.h3Mobile}>{item.title}</h3>
                  <div className={style.collapseIcon}>
                    {isExpanded ? (
                      <FontAwesomeIcon className={style.icon} icon={faAngleUp} size="lg" fixedWidth />
                            ) : (
                      <FontAwesomeIcon className={style.icon} icon={faAngleDown} size="lg" fixedWidth />
                    )}
                  </div>
                </div>
              <div className={style.collapseItemMobile} {...getCollapseProps()}>
                <div>
                {item.sub_title.map((sub_title, index) =>(
                    <div key={index}>
                        <div className={style.item}>
                          {sub_title}
                        </div>
                    </div>
                ))}
                </div>
              </div> 
            </div>
          </div>
        ))}

        <div className={style.footerSocial}>
          <h3 className={style.h3}>SOCIAL</h3>
          <FontAwesomeIcon icon={faFacebook} className={style.icons1} />
          <FontAwesomeIcon icon={faTwitter} className={style.icons} />
          <FontAwesomeIcon icon={faInstagram} className={style.icons} />
        </div>

        <div className={style.footerApps}>
          <h3 className={style.h3}>APPS</h3>
          <div className={style.images}>
              <div className={style.googlePlay}>
                <Image src={googlePlay} width={136} height={40} alt="google play" />
              </div>
              <div className={style.appStore}>
                <Image src={appStore} width={136} height={40} alt="app store" />
              </div>
          </div>
        </div>
      </div>

      <div className={style.footerBottom}>
        <Image
          className={style.imagesBottom}
          src={imgfooter}
          width={200}
          height={40}
          alt="images footer"
        />
        <div className={style.offcialApps}>
          ©2022 Quandoo GmbH. All rights reserved
        </div>
      </div>
    </footer>
  );
}
