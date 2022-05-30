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
import Uc from "../../public/images/australia.png";
import zealand from "../../public/images/new-zealand.png";
import austria from "../../public/images/austria.png";
import switzerland from "../../public/images/switzerland.png";
import germany from "../../public/images/germany.png";
import italy from "../../public/images/italy.png";
import finland from "../../public/images/finland.png";
import kingdom from "../../public/images/united-kingdom.png";
import luxembourg from "../../public/images/luxembourg.png";
import turkey from "../../public/images/turkey.png";
import netherlands from "../../public/images/netherlands.png";
import singapore from "../../public/images/singapore.png";
import hongkong from "../../public/images/hong-kong.png";
import imgfooter from "../../public/images/imgfooter.png.jpg";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <footer className={style.footer}>
      <div className={style.footerMain}>
        <div className={style.footerLegal}>
          <h3>LEGAL</h3>
          <div className={style.item}>Imprint</div>
          <div className={style.item}>Privacy Policy</div>
          <div className={style.item}>Term and Conditions</div>
        </div>
        <div className={style.footerAbout}>
          <h3>ABOUT</h3>
          <div className={style.item}>Loyalty Points</div>
          <div className={style.item}>Quisine Blog</div>
          <div className={style.item}>Contact</div>
          <div className={style.item}>List your restaurant</div>
          <div className={style.item}>Careers</div>
          <div className={style.item}>Press</div>
          <div className={style.item}>Sitemap</div>
        </div>
        <div className={style.footerRegions}>
          <h3>COUNTRIES AND REGIONS</h3>
          <div className={style.item}>
            <Image
              className={style.images}
              src={Uc}
              width={20}
              height={17}
              alt="australia"
            />
            <span>Australia</span>
          </div>
          <div className={style.item}>
            <Image src={zealand} width={20} height={17} alt="new zealand" />
            <span>New Zealand</span>
          </div>
          <div className={style.item}>
            <Image src={austria} width={20} height={15} alt="austria" />
            <span>Austria</span>
          </div>
          <div className={style.item}>
            <Image src={switzerland} width={20} height={15} alt="switzerland" />

            <span>Switzerland</span>
          </div>
          <div className={style.item}>
            <Image src={germany} width={20} height={15} alt="germany" />
            <span>Germany</span>
          </div>
          <div className={style.item}>
            <Image src={italy} width={20} height={15} alt="italy" />
            <span>Italy</span>
          </div>
          <div className={style.item}>
            <Image src={finland} width={20} height={15} alt="finland" />
            <span>Finland</span>
          </div>
          <div className={style.item}>
            <Image src={kingdom} width={20} height={15} alt="kingdom" />

            <span>United Kingdom</span>
          </div>
          <div className={style.item}>
            <Image src={luxembourg} width={20} height={15} alt="luxembourg" />

            <span>Luxembourg</span>
          </div>
          <div className={style.item}>
            <Image src={turkey} width={20} height={15} alt="new zealand" />

            <span>Turkey</span>
          </div>
          <div className={style.item}>
            <Image src={netherlands} width={20} height={15} alt="netherlands" />
            <span>Netherlands</span>
          </div>
          <div className={style.item}>
            <Image src={singapore} width={20} height={15} alt="singapore" />

            <span>Singapore</span>
          </div>
          <div className={style.item}>
            <Image src={hongkong} width={20} height={15} alt="hongkong" />
            <span>Hong Kong</span>
          </div>
        </div>
        <div className={style.footerSocial}>
          <h3>SOCIAL</h3>
          <FontAwesomeIcon icon={faFacebook} className={style.icons1} />
          <FontAwesomeIcon icon={faTwitter} className={style.icons} />
          <FontAwesomeIcon icon={faInstagram} className={style.icons} />
        </div>
        <div className={style.footerApps}>
          <h3>APPS</h3>
          <div className={style.images}>
              <div className={style.imagesItem}>
                <Image  src={googlePlay} width={136} height={40} alt="google play" />
              </div>   
                <Image src={appStore} width={136} height={40} alt="app store" />
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
            <Image src={imgfooter} width={200} height={40} alt="images footer" />
            <div className={style.offcialApps}> ©2022 Quandoo GmbH. All rights reserved </div>
        </div>
    </footer>
  );
}
