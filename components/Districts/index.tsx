import * as React from "react";
import style from "./style.module.scss";
import { Container, Row, Col } from "reactstrap";
import {districts} from "constant"
export interface IDistrictsProps {}

export default function Districts(props: IDistrictsProps) {
  return (
    <div>
      <div>
        <h2>{districts.h2}</h2>
        <h3>{districts.h3}</h3>
      </div>
      <Container>
        <Row>
          <Col sm>
            <button>{districts.button1}</button>
          </Col>
          <Col sm>
            <button>{districts.button2}</button>
          </Col>
          <Col sm>
            <button>{districts.button3}</button>
          </Col>
          <Col sm>
            <button>{districts.button4}</button>
          </Col>
          <Col sm>
            <button>{districts.button5}</button>
          </Col>
          <Col sm>
            <button>{districts.button6}</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
