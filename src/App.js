import React, { Component } from "react";
// import logo from './logo.svg';
import {  Route , HashRouter } from "react-router-dom";

import "./App.css";
import NavB from "./components/layouts/NavB.js";
import Footer from "./components/layouts/Footer.js";

import HomePage from "./components/mainPages/HomePage.js";
import SingInPage from "./components/mainPages/SingInPage.js";
import PricePlanPage from "./components/mainPages/PricePlanPage";
import AboutUsPage from "./components/mainPages/AboutUsPage";
import ContactUsPage from "./components/mainPages/ContactUsPage";
import AllAdsPage from "./components/mainPages/AllAdsPage";
import ProfilePage from "./components/mainPages/ProfilePage";
import AdsDetailsPage from "./components/mainPages/AdsDetailsPage";
import PaymentPage from "./components/mainPages/PaymentPage";
import AddAdsPage from "./components/mainPages/AddAdsPage";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: "rtl",
    };
  }
  render() {
    return (
      <HashRouter>
        <div className="App" dir={this.props.lan === "AR" ? "rtl" : "ltr"}>
          <NavB />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Signin" component={SingInPage} />
          <Route exact path="/PricePlan" component={PricePlanPage} />
          <Route exact path="/AboutUs" component={AboutUsPage} />
          <Route exact path="/ContactUs" component={ContactUsPage} />
          <Route exact path="/Ads" component={AllAdsPage} />
          <Route exact path="/ProfileSettings" component={ProfilePage} />
          <Route exact path="/ads/id" component={AdsDetailsPage} />
          <Route exact path="/Payment" component={PaymentPage} />
          <Route exact path="/AddAds" component={AddAdsPage} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  // console.log("ownprops");

  // console.log(ownprops);
  return {
    lan: state.lan,
    // posts:state.posts
  };
};

export default connect(mapStateToProps)(App);
