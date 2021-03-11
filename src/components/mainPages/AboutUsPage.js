import React, { Component } from "react";
import "../../stylesheets/AboutUsPage.css";
import BreadC from "../layouts/BreadC";
import { Container, Col } from "react-bootstrap";

import { connect } from "react-redux";
 class AboutUsPage extends Component {
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
      <div className="AboutUs-Page pb-5 " >
        <BreadC />

        <Container>
          <Col sm={12}>
            <div className="AboutUs-Page-card py-4 px-3">
              <h2 className="py-3">موقع اون لاين</h2>

              <p>
                {" "}
                موقع ويب للإعلانات ، يمكن للمستخدمين التسجيل في الموقع والاشتراك
                في إحدى حزمنا وتقديم طلب إعلان ، تظهر الطلبات للمشرف في لوحة
                التحكم ، يبدأ المسؤول في جمع الإعلانات في ملف PDF أو يجعل كل
                إعلان كملف PDF منفصل ، يقوم المسؤول بتحميل ملفات PDF إلى موقع
                الويب مقسمًا حسب المنطقة والفئة أو يمكن تحميله بشكل عام لجميع
                المناطق والفئات ، يمكن للمستخدمين الآخرين والزوار تنزيل ملفات
                PDF لتصفح الإعلانات.
              </p>
            </div>
          </Col>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state, ownprops) => {
  console.log("ownprops");

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
)(AboutUsPage);
