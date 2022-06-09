import React, { useState } from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import style from './style.module.scss';
import {about, legal, countries} from "constant";

export interface FooterMobile {}
function FooterMobile(props: FooterMobile) {


  const [expandedPanel, setExpandedPanel] = useState('');
  const handleOnChange = (panel :any) => (event :any, isExpanded :any) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <div className={style.footer}>
      <Accordion className={style.footer__collapse} expanded={expandedPanel === 'panel1'} onChange={handleOnChange('panel1')}>
          <AccordionSummary className={style["footer__collapse--h3"]} expandIcon={<ExpandMore style={{color: 'white'}}/>}>
              LEGAL
          </AccordionSummary>
          <AccordionDetails className={style.footer__subtitle}>
                {legal.map((item, index) => (
                    <div key={index}>
                          <div className={style["footer__subtitle--item"]}>{item}</div>
                    </div>
                ))}
          </AccordionDetails>
      </Accordion>

      <Accordion className={style.footer__collapse} expanded={expandedPanel === 'panel2'} onChange={handleOnChange('panel2')}>
          <AccordionSummary className={style["footer__collapse--h3"]} expandIcon={<ExpandMore style={{color: 'white'}}/>}>
            ABOUT
          </AccordionSummary>
          <AccordionDetails className={style.footer__subtitle}>
                {about.map((item, index) => (
                    <div className={style["footer__subtitle--item"]} key={index}>
                          <div className={style["footer__subtitle--item--1"]}>{item}</div>
                    </div>
                ))}
          </AccordionDetails>
      </Accordion>

      <Accordion className={style.footer__collapse} expanded={expandedPanel === 'panel3'} onChange={handleOnChange('panel3')}>
          <AccordionSummary className={style["footer__collapse--h3"]} expandIcon={<ExpandMore style={{color: 'white'}}/>}>
            COUNTRIES AND REGIONS
          </AccordionSummary>
          <AccordionDetails className={style.footer__subtitle}>
                {countries.map((item, index) => (
                    <div key={index}>
                          <div className={style["footer__subtitle--item"]}>{item}</div>
                    </div>
                ))}
          </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FooterMobile;