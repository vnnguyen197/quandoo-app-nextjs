import * as React from 'react';
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import googlePlay from '../../public/images/googleplay.svg';
import appStore from '../../public/images/appstore.svg';
import imgfooter from '../../public/images/imgfooter.png.jpg';
import { dataFooter } from 'constant';
import FooterMobile from './components';

export interface FooterProps {}

function Footer(props: FooterProps) {
  return (
    <div className={style.footer}>
      <div className={`container ${style.footer__main}`}>
        {dataFooter.map((item, index) => (
          <div className={style.footer__item} key={index}>
            <div className={style['footer__item--des']}>
              <h3 className={style['footer__item--des--h3']}>{item.title}</h3>
              {item.sub_title.map((sub_title, index) => (
                <div key={index}>
                  <div className={style['footer__item--des--title']}>
                    {sub_title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={style['footer__item--mobile']}>
          <FooterMobile />
        </div>
        <div className={style.footer__social}>
          <h3 className={style['footer__social--h3']}>SOCIAL</h3>
          <FontAwesomeIcon
            className={style['footer__social--item1']}
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className={style['footer__social--item2']}
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className={style['footer__social--item2']}
            icon={faInstagram}
          />
        </div>
        <div className={style.footer__apps}>
          <h3 className={style['footer__apps--h3']}>APPS</h3>
          <div className={style['footer__apps--icons']}>
            <div className={style.footer__googleplay}>
              <Image
                src={googlePlay}
                width={136}
                height={40}
                alt='google play'
              />
            </div>
            <div className={style.footer__appstore}>
              <Image src={appStore} width={136} height={40} alt='app store' />
            </div>
          </div>
        </div>
        <div className={style.footer__bottom}>
          <div className={style['footer__bottom--img']}>
            <div className={style['footer__bottom--img--footer']}>
              <Image
                src={imgfooter}
                width={165}
                height={37}
                alt='images footer'
              />
            </div>
            ©2022 Quandoo GmbH. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
