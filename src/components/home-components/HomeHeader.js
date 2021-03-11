import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import "../../stylesheets/HomeHeader.css";
export default function HomeHeader() {
  return (
    <Carousel indicators={false} interval={5000} className="homeHeader">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../imgs/homeHeader.png")}
          alt="First slide"
        />
<Container>
        <Carousel.Caption>
          <h3 className=" mx-auto">
            أوصل لملايين العملاء عن طريق الاعلانات
          </h3>
          <Button className="homeHeader-btn">انضم الان</Button>
        </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../imgs/homeHeader.png")}
          alt="Third slide"
        />

<Container>
        <Carousel.Caption>
          <h3 className=" mx-auto">
            أوصل لملايين العملاء عن طريق الاعلانات
          </h3>
          <Button className="homeHeader-btn">انضم الان</Button>
        </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../imgs/homeHeader.png")}
          alt="Third slide"
        />

<Container>
        <Carousel.Caption>
          <h3 className=" mx-auto">
            أوصل لملايين العملاء عن طريق الاعلانات
          </h3>
          <Button className="homeHeader-btn">انضم الان</Button>
        </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}
