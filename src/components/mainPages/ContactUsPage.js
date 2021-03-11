import React, { Component } from "react";
import "../../stylesheets/ContactUsPage.css";
import BreadC from "../layouts/BreadC";
import {
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import { connect } from "react-redux";

 class ContactUsPage extends Component {
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
      <div className="ContactUs-Page pb-5 "  >
      <BreadC />

      <Container>
        <div className="ContactUs-Page-card py-5">
          <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h3 className="pb-4">لديك استفسار او مشكلة ؟ نحن هنا لمساعدتك</h3>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <i class="fas fa-user"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  size="lg"
                  placeholder="الاسم"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <i class="fas fa-envelope "></i>{" "}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  size="lg"
                  placeholder="البريد الالكترونى"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <i class="fas fa-phone  "></i>{" "}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  size="lg"
                  placeholder="رقم الهاتف"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <FormControl
                size="lg"
                as="textarea"
                placeholder="أضف رسالتك"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />

              <Button className="w-100 send-btn my-4 py-2">ارسال</Button>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h3 className="pb-3">عناوين الاتصال</h3>

              <p>
                {" "}
                <i class="fas fa-envelope pl-3"></i> info@onlineads.com{" "}
              </p>
              <p>
                {" "}
                <i class="fas fa-phone  pl-3"></i> +977 1235 8662
              </p>
            </Col>
          </Row>
          </Container>
        </div>
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
)(ContactUsPage);

