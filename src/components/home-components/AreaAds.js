import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "../../stylesheets/AreaAds.css"
export default function AreaAds() {
  
    return (
        <Container className="AreaAds ">

<h2 className="text-center">اعلانات المنطقة</h2>
<Row className="py-5">


{[1,2,3,4,5,6].map((cards) => <Col lg={3} md={6} sm={12}>
           <Link to="/ads/id"> <div
    
              className="ads-card"
            >
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <div className="card-cap">
              <h4> دبى</h4>
              <p>Ads 50</p>
              </div>
            </div></Link>
          </Col>)}

  
          <Col lg={3} md={6} sm={12}>
           <Link to="/ads/id"> <div
    
              className="ads-card"
            >
              <img
                className="img-fluid h-100 "
                src={require("../../imgs/homeHeader.png")}
                alt="First slide"
              />
              <div className="card-cap">
              <h4> دبى</h4>
              <p>Ads 50</p>
              </div>
            </div></Link>
          </Col>


          <Col lg={3} md={6} sm={12}>
          <Link to="/Ads">  <div
    
              className="ads-card"
            >
              <img
                className="img-fluid h-100  w-100  "
                src={require("../../imgs/allAds.png")}
                alt="First slide"
              />
              <div className=" card-cap-all">
              <h4> اعلانات دولية</h4>
              <p>Ads 50</p>
              </div>
            </div></Link>
          </Col>
          
          
          


            </Row>
            
        </Container>
    )
}
