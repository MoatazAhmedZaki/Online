import React, { Component } from "react";

import "../../stylesheets/AllAdsPage.css";
import BreadC from "../layouts/BreadC";
import { Form, Container, Row, Col, Pagination } from "react-bootstrap";
import AdsCard from "../ads/AdsCard";

export default class AllAdsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [1, 2, 3, 4, 5, 6] };
  }

  componentWillMount(){

    window.scrollTo(0,0)

  }

  render() {
    return (
      <div className="AllAdsPage pb-5 ">
        <BreadC />
        <Container>
          <div className="filter-bar px-3 ">
            <div className="w-25">
              <Form className="w-100 py-3">
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form>
            </div>

            <div className="w-75 filter-number">
              <p>أظهر 12 من 80</p>
            </div>
          </div>

          <Row>
            {this.state.data.map((card) => {
              return (
                <Col sm={4}>
                  <AdsCard />
                </Col>
              );
            })}
          </Row>

          <div>
            <Pagination className="p-0 py-4">
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Container>
      </div>
    );
  }
}
