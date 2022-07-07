import * as React from "react";
import { topDistricts } from "constant";
import style from "./style.module.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExpandMore } from "@material-ui/icons";
import { Accordion, AccordionSummary, AccordionDetails, } from "@material-ui/core";

export interface ITopDistrictsProps {}

export default function TopDistricts(props: ITopDistrictsProps) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [expandedPanel, setExpandedPanel] = React.useState('');
  const handleOnChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <div className={style.content}>
      <div className={style.content__border}></div>
      <Box className={style.content__box} sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList className={style.content__tabList}  onChange={handleChange} aria-label="lab API tabs example">
              <Tab className={style["content__tabList--tab"]} label={topDistricts.title1} value="1" />
              <Tab className={style["content__tabList--tab"]} label={topDistricts.title2} value="2" />
              <Tab className={style["content__tabList--tab"]} label={topDistricts.title3} value="3" />
            </TabList>
          </Box>
          <TabPanel className={style.content__items} value="1">
            <ul className={style["content__items--ul"]}>
              {topDistricts.data1.map((item,index)=>(
                <li key={index} className={style["content__items--ul--li"]}> 
                   <FontAwesomeIcon icon={faCaretRight}  style={{ color: "orange", paddingRight:'10px', width: "20px" }} />
                      {item}
                </li>
              ))}
            </ul>  
          </TabPanel>
          <TabPanel className={style.content__items} value="2">
            <ul className={style["content__items--ul"]}>
              {topDistricts.data2.map((item,index)=>(
                <li key={index} className={style["content__items--ul--li"]}> 
                   <FontAwesomeIcon icon={faCaretRight} style={{ color: "orange", paddingRight:'10px', width: "20px" }} />
                      {item}
                </li>
              ))}
            </ul>  
          </TabPanel>
          <TabPanel className={style.content__items} value="3">
            <ul className={style["content__items--ul"]}>
              {topDistricts.data3.map((item,index)=>(
                <li key={index} className={style["content__items--ul--li"]}> 
                   <FontAwesomeIcon icon={faCaretRight} style={{ color: "orange", paddingRight:'10px',  width: "20px" }} />
                      {item}
                </li>
              ))}
            </ul>  
          </TabPanel>
        </TabContext>
      </Box>

      <div className={style.content__responsive}>
        <Accordion className={style.content__collapse} expanded={expandedPanel === "panel1"} onChange={handleOnChange("panel1")}>
          <AccordionSummary  expandIcon={<ExpandMore style={{ color: "black" }} />}>
              <h5 className={style["content__collapse--h3"]} > {topDistricts.title1} </h5>
          </AccordionSummary>
          <AccordionDetails className={style.content__subtitle}>
            <ul className={style["content__subtitle--ul"]}>
              {topDistricts.data1.map((item,index)=>(
                <li key={index} className={style["content__subtitle--ul--li"]}> 
                   <FontAwesomeIcon icon={faCaretRight}  style={{ color: "orange", paddingRight:'5px', width: "20px"}}  />
                      {item}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion className={style.content__collapse} expanded={expandedPanel === "panel2"} onChange={handleOnChange("panel2")}>
          <AccordionSummary  expandIcon={<ExpandMore style={{ color: "black" }} />}>
              <h3 className={style["content__collapse--h3"]}> {topDistricts.title2} </h3>
          </AccordionSummary>
          <AccordionDetails className={style.content__subtitle}>
            <ul className={style["content__subtitle--ul"]}>
              {topDistricts.data2.map((item,index)=>(
                <li key={index} className={style["content__subtitle--ul--li"]}> 
                   <FontAwesomeIcon icon={faCaretRight} style={{ color: "orange", paddingRight:'5px', width: "20px" }}   />
                      {item}
                </li>
              ))}
            </ul>  
          </AccordionDetails>
        </Accordion>

        <Accordion className={style.content__collapse} expanded={expandedPanel === "panel3"} onChange={handleOnChange("panel3")}>
          <AccordionSummary  expandIcon={<ExpandMore style={{ color: "black" }} />}>
              <h5 className={style["content__collapse--h3"]}> {topDistricts.title3} </h5>
          </AccordionSummary>
          <AccordionDetails className={style.content__subtitle}>
            <ul className={style["content__subtitle--ul"]}>
              {topDistricts.data3.map((item,index)=>(
                <li key={index} className={style["content__subtitle--ul--li"]}> 
                   <FontAwesomeIcon icon={faCaretRight}  style={{ color: "orange", paddingRight:'5px', width: "20px" }}  />
                      {item}
                </li>
              ))}
            </ul>  
          </AccordionDetails>
        </Accordion>
      </div>
    </div>  
  );
}
