import React, { Component } from "react";
import HomeHeader from "../home-components/HomeHeader";
import News from "../home-components/News";
import AdsFilesSection from "../home-components/AdsFilesSection";
import Services from "../home-components/Services";
import AdsCat from "../home-components/AdsCat";
import SponsoredAds from "../home-components/SponsoredAds.js";
import AreaAds from "../home-components/AreaAds";

import { connect } from "react-redux";

class HomePage extends Component {
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

    console.log(this.props.lan)
    return (
      <div className="" >
        <HomeHeader />
        <News bg="#3631cc" color="white" />
        <AdsFilesSection />
        <Services />
        <AdsCat />
        <SponsoredAds />
        <AreaAds />
        <News bg="#f8f8f8" color="#757575" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  // console.log(ownprops);
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
)(HomePage);
