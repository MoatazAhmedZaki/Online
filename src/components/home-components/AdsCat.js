import React from "react";
import { Container, Button } from "react-bootstrap";
import "../../stylesheets/AdsCat.css";

import Slider from "react-slick";

export default function AdsCat() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div fluid className="AdsCat py-5  text-center">
      <h2>أقسام الاعلانات</h2>
      <Container className="py-5">
        <Slider {...settings}>
          <div>
            <div className="ads-card px-3">
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p>أثاث منزلى</p>
            </div>
          </div>
          <div>
            <div className="ads-card px-3">
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p> أراضى و عقارات</p>
            </div>{" "}
          </div>
          <div>
            <div className="ads-card px-3">
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p> أراضى و عقارات</p>
            </div>{" "}
          </div>
          <div>
            <div className="ads-card px-3">
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p>وظائف</p>
            </div>{" "}
          </div>
          <div>
            <div className="ads-card px-3">
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p>وظائف</p>
            </div>{" "}
          </div>
        </Slider>
      </Container>

      {/* <Container>
        <Row className="py-5">

<Slider>


<div>cddv</div>

<div>cddv</div>



</Slider>
       



          <Col lg={3} md={12} sm={12}>
            <div
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                    ")",
                }}
              className="ads-card"
            >
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p>أثاث منزلى</p>
            </div>
          </Col>

          <Col lg={3} md={12} sm={12}>
            <div
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                    ")",
                }}
              className="ads-card"
            >
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p> أراضى و عقارات</p>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                    ")",
                }}
              className="ads-card"
            >
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p>وظائف</p>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                    ")",
                }}
              className="ads-card"
            >
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <p> سيارات</p>
            </div>
          </Col>
        </Row>
      </Container> */}

      <Button className="mt-5 AdsCat-btn">المزيد</Button>
    </div>
  );
}
