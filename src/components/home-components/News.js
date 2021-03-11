import React from "react";
import "../../stylesheets/News.css";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

export default function News(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // console.log(props);
  // const bg = props.bg;
  // console.log(bg);

  return (
    <div
      className="news"
      style={{ backgroundColor: props.bg, color: props.color }}
    >
      <Container className="pt-3 ">
        <Slider {...settings} className="px-5">
          <div>
            <h3>
              <span className="news-title">أخبارنا</span> لفترة محدودة جدا 50 %
              على اسعار الاشتراكات الجديدة .. العرض سارى حنى نفاذ الشهر
            </h3>
          </div>
          <div>
            <h3>
              <span className="news-title">أخبارنا</span> لفترة محدودة جدا 50 %
              على اسعار الاشتراكات الجديدة .. العرض سارى حنى نفاذ الشهر
            </h3>
          </div>
          <div>
            <h3>
              <span className="news-title">أخبارنا</span> لفترة محدودة جدا 50 %
              على اسعار الاشتراكات الجديدة .. العرض سارى حنى نفاذ الشهر
            </h3>
          </div>
        </Slider>
      </Container>
    </div>
    // <Carousel
    //   indicators={false}
    //   interval={50000}
    //   prevIcon={
    //     <i
    //       class="fas fa-chevron-left"
    //       style={{
    //         color: props.color,
    //       }}
    //     ></i>
    //   }
    //   nextIcon={
    //     <i
    //       class="fas fa-chevron-right"
    //       style={{
    //         color: props.color,
    //       }}
    //     >
    //       {" "}
    //     </i>
    //   }
    //   className="news"
    //   style={{ backgroundColor: props.bg }}

    // >
    //   <Carousel.Item>
    //     <Carousel.Caption
    //       style={{
    //         color: props.color,
    //       }}
    //     >
    //       <h3>
    //         <span className="news-title">أخبارنا</span> لفترة محدودة جدا 50 %
    //         على اسعار الاشتراكات الجديدة .. العرض سارى حنى نفاذ الشهر
    //       </h3>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Carousel.Caption
    //       style={{
    //         color: props.color,
    //       }}
    //     >
    //       <h3>
    //         <span className="news-title">أخبارنا</span> لفترة محدودة جدا 50 %
    //         على اسعار الاشتراكات الجديدة .. العرض سارى حنى نفاذ الشهر
    //       </h3>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Carousel.Caption
    //       style={{
    //         color: props.color,
    //       }}
    //     >
    //       <h3>
    //         <span className="news-title">أخبارنا</span> لفترة محدودة جدا 50 %
    //         على اسعار الاشتراكات الجديدة .. العرض سارى حنى نفاذ الشهر
    //       </h3>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}
