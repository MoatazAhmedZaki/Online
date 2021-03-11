import React, { Component } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/PricePlanPage.css";
import BreadC from "../layouts/BreadC";

import { connect } from "react-redux";

 class PricePlanPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dir: "rtl",
  //   };
  // }
  componentWillMount(){

    window.scrollTo(0,0)

  }

  render() {
    return (
      <div className="PricePlanPage pb-5 text-center " >
        <BreadC />

      <h2 className="pb-4 mb-5 underline-head-title">خطط الاسعار</h2>
      <Container>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <div className="pricePlan-card  mb-4">
              <h2 className="pt-4 px-4 title">باقة اساسية</h2>
              <hr />
              <h3>شهرية</h3>

              <div className="display-inline-block  py-2">
                <div className="w-75 px-4 ">
                  {" "}
                  <i class="fas fa-check"></i> عدد الاعلانات
                </div>
                <div className="w-25">10</div>
              </div>
              <div className="display-inline-block  py-2">
                <div className="w-75 px-4">
                  {" "}
                  <i class="fas fa-check"></i> لينكات الاعلان{" "}
                </div>
                <div className="w-25">3</div>
              </div>

              <div className="display-inline-block  py-2">
                <div className="w-75 px-4 ">
                  {" "}
                  <i class="fas fa-check"></i> عدد حروف الاعلان{" "}
                </div>
                <div className="w-25">50</div>
              </div>

              <h2 className="plan-price p-4">
                <span>100</span> درهم
              </h2>
              <Button className="w-100">اشتراك</Button>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="pricePlan-card  mb-4 ">
              <h2 className="pt-4 px-4 title"> باقة بيزنس</h2>
              <hr />
              <h3>سنوية</h3>

              <div className="display-inline-block  py-2">
                <div className="w-75 px-4 ">
                  {" "}
                  <i class="fas fa-check"></i> عدد الاعلانات
                </div>
                <div className="w-25">100</div>
              </div>
              <div className="display-inline-block  py-2">
                <div className="w-75 px-4">
                  {" "}
                  <i class="fas fa-check"></i> لينكات الاعلان{" "}
                </div>
                <div className="w-25">50</div>
              </div>

              <div className="display-inline-block  py-2">
                <div className="w-75 px-4 ">
                  {" "}
                  <i class="fas fa-check"></i> عدد حروف الاعلان{" "}
                </div>
                <div className="w-25">300</div>
              </div>

              <h2 className="plan-price p-4">
                <span>500 </span> درهم
              </h2>
              <Button className="w-100">اشتراك</Button>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="pricePlan-card  mb-4 ">
              <h2 className="pt-4 px-4 title"> باقة اقتصادية</h2>
              <hr />
              <h3>ربع سنوى</h3>

              <div className="display-inline-block  py-2">
                <div className="w-75 px-4 ">
                  {" "}
                  <i class="fas fa-check"></i> عدد الاعلانات
                </div>
                <div className="w-25">35</div>
              </div>
              <div className="display-inline-block  py-2">
                <div className="w-75 px-4">
                  {" "}
                  <i class="fas fa-check"></i> لينكات الاعلان{" "}
                </div>
                <div className="w-25">6</div>
              </div>

              <div className="display-inline-block  py-2">
                <div className="w-75 px-4 ">
                  {" "}
                  <i class="fas fa-check"></i> عدد حروف الاعلان{" "}
                </div>
                <div className="w-25">160</div>
              </div>

              <h2 className="plan-price p-4">
                <span>150 </span> درهم
              </h2>
              <Button className="w-100">اشتراك</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}




const mapStateToProps = (state, ownprops) => {
  console.log(ownprops);
  return {
    lan: state.lan,
    // posts:state.posts
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeLang: (lan) => {
//       dispatch(changeLang(lan));
//     },
//   };
// };

export default connect(
  mapStateToProps
  // ,
  // mapDispatchToProps
)(PricePlanPage);

