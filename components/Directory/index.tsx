import React, { useState } from 'react';
import style from './style.module.scss';
import {directory} from 'constant'
import { ExpandMore } from "@material-ui/icons";
import { Accordion, AccordionSummary, AccordionDetails, } from "@material-ui/core";

export interface IDirectoryProps {
}

export default function Directory (props: IDirectoryProps) {

  const [expandedPanel, setExpandedPanel] = React.useState('');
  const handleOnChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <div className={style.directory}>
      <div className={style.directory__top}>
        <h2 className={style.directory__h2}> {directory.big_title1} <span className={style["directory__h2--span"]}>{directory.span}</span> {directory.big_title2} </h2>
        <div className={style.directory__img}>
          <div className={style.directory__content}>
              <span className={style["directory__content--span"]}>{directory.location}</span>
              <h2 className={style["directory__content--h2"]}>{directory.title}</h2>
              <span className={style["directory__content--sub"]}>{directory.sub_title}</span>
              <div className={style.directory__button}>
                  <button className={style["directory__button--btn"]}>Learn more</button>
              </div>
        </div>
      </div>
      </div>
      <div className={style.directory__bottom}>
        <h3 className={style["directory__bottom--h3"]}>{directory.content}</h3>
        <div>

          <Accordion className={style.directory__collapse} expanded={expandedPanel === "panel1"} onChange={handleOnChange("panel1")}>
            <AccordionSummary  expandIcon={<ExpandMore style={{ color: "black" }} />}>
                   <h5 className={style["directory__collapse--h3"]}> {directory.sub_title1} </h5>
            </AccordionSummary>
            <AccordionDetails className={style.directory__subtitle}>
              {directory.data1.map((item, index) => (
                <div className={style["directory__subtitle--item"]} key={index}>
                  <div className={style["directory__subtitle--item--1"]}>
                      <div style={{paddingBottom:'20px'}}>{item.item.item1}</div>
                      <span>{item.item.item2}</span>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion className={style.directory__collapse} expanded={expandedPanel === "panel2"} onChange={handleOnChange("panel2")}>
            <AccordionSummary  expandIcon={<ExpandMore style={{ color: "black" }} />}>
                      <h5 className={style["directory__collapse--h3"]}>{directory.sub_title2}</h5>
            </AccordionSummary>
            <AccordionDetails className={style.directory__subtitle}>
              {directory.data2.map((item, index) => (
                <div className={style["directory__subtitle--item"]} key={index}>
                  <div className={style["directory__subtitle--item--1"]}>
                      <div style={{paddingBottom:'20px'}}>{item.item.item1}</div>
                      <span>{item.item.item2}</span>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion className={style.directory__collapse} expanded={expandedPanel === "panel3"} onChange={handleOnChange("panel3")}>
            <AccordionSummary expandIcon={<ExpandMore style={{ color: "black" }} />}>
                    <h5 className={style["directory__collapse--h3"]} > {directory.sub_title3}</h5>
            </AccordionSummary>
            <AccordionDetails className={style.directory__subtitle}>
              {directory.data3.map((item, index) => (
                <div className={style["directory__subtitle--item"]} key={index}>
                  <div className={style["directory__subtitle--item--1"]}>
                      <div style={{paddingBottom:'20px'}}>{item.item.item1}</div>
                      <span>{item.item.item2}</span>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion className={style.directory__collapse} expanded={expandedPanel === "panel4"} onChange={handleOnChange("panel4")}>
            <AccordionSummary  expandIcon={<ExpandMore style={{ color: "black" }} />}>
                <h5 className={style["directory__collapse--h3"]}>{directory.sub_title4}</h5>
            </AccordionSummary>
            <AccordionDetails className={style.directory__subtitle}>
              {directory.data4.map((item, index) => (
                <div className={style["directory__subtitle--item"]} key={index}>
                  <div className={style["directory__subtitle--item--1"]}>
                      <div style={{paddingBottom:'20px'}}>{item.item.item1}</div>
                      <span>{item.item.item2}</span>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion className={style.directory__collapse} expanded={expandedPanel === "panel5"} onChange={handleOnChange("panel5")}>
            <AccordionSummary  expandIcon={<ExpandMore style={{ color: "black" }} />}>
                  <h5 className={style["directory__collapse--h3"]}>{directory.sub_title5}</h5>
            </AccordionSummary>
            <AccordionDetails className={style.directory__subtitle}>
              {directory.data5.map((item, index) => (
                <div className={style["directory__subtitle--item"]} key={index}>
                  <div className={style["directory__subtitle--item--1"]}>
                      <div style={{paddingBottom:'20px'}}>{item.item.item1}</div>
                      <span>{item.item.item2}</span>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion className={style.directory__collapse} expanded={expandedPanel === "panel6"} onChange={handleOnChange("panel6")}>
            <AccordionSummary expandIcon={<ExpandMore style={{ color: "black" }} />}>
                  <h5 className={style["directory__collapse--h3"]} >{directory.sub_title6}</h5>
            </AccordionSummary>
            <AccordionDetails className={style.directory__subtitle}>
              {directory.data6.map((item, index) => (
                <div className={style["directory__subtitle--item"]} key={index}>
                  <div className={style["directory__subtitle--item--1"]}>
                      <div style={{paddingBottom:'20px'}}>{item.item.item1}</div>
                      <span>{item.item.item2}</span>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>

        </div>
      </div>
    </div>
  );
}
