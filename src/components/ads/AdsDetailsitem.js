import React from "react";
import { Row, Col } from "react-bootstrap";

import "../../stylesheets/AdsDetailsitem.css";

export default function AdsDetailsitem() {
  return (
    <Row className="AdsDetailsitem">
      <Col lg={8} md={12} sm={12} className="mb-4">
        {/* <Media>
          <img
            width={100}
            height={100}
            className="ml-3 "
            src={require("../../imgs/homeHeader.png")}
            alt="Generic placeholder"
          />
          <Media.Body className="text-right">
            <h5 className="ads-title">طلب اعلان اثاث منزلى </h5>

            <p className="ads-subtitle"> اثاث منزلى</p>
            <p className="ads-pargh">
              للفخامه...... عشاقها ....الذىن يحرصون على اقتنائها دائماا للتمتع ب
              الذوق الكلاسيكى لما به من روح الاصالة والتفرد 2020 و2021 وصل
              حديثاا جديد مجموعة غرف_نوم_ استيل وكلاسيك حديثه بارقى وافخم
              الموديلات نقدم لكم اليوم مجموعه وكولكشن واسع لغرف النوم الكلاسيك
              والاستيل موديلات وتصميمات روووووعة غرف نوم كلاسيك دمياط 2020 -2021
            </p>

            <p className="ads-date mb-0">
              <i class="fas fa-calendar"></i> 1/7/2020
            </p>

            <p className="ads-location">
              <i class="fas fa-map-marker-alt"></i> دبى
            </p>
          </Media.Body>
        </Media> */}

        <Row>
          <Col lg={4} md={12} sm={12}>
            <img
              className=" img-fluid "
              src={require("../../imgs/homeHeader.png")}
              alt="Generic placeholder"
            />
          </Col>

          <Col lg={8} md={12} sm={12} className="py-4">
            <h5 className="ads-title">طلب اعلان اثاث منزلى </h5>

            <p className="ads-subtitle"> اثاث منزلى</p>
            <p className="ads-pargh">
              للفخامه...... عشاقها ....الذىن يحرصون على اقتنائها دائماا للتمتع ب
              الذوق الكلاسيكى لما به من روح الاصالة والتفرد 2020 و2021 وصل
              حديثاا جديد مجموعة غرف_نوم_ استيل وكلاسيك حديثه بارقى وافخم
              الموديلات نقدم لكم اليوم مجموعه وكولكشن واسع لغرف النوم الكلاسيك
              والاستيل موديلات وتصميمات روووووعة غرف نوم كلاسيك دمياط 2020 -2021
            </p>

            <p className="ads-date mb-0">
              <i class="fas fa-calendar"></i> 1/7/2020
            </p>

            <p className="ads-location">
              <i class="fas fa-map-marker-alt"></i> دبى
            </p>
          </Col>
        </Row>
      </Col>

      <Col lg={4} md={12} sm={12} className="text-center">
        <div className="display-inline-block">
          <div className="remove-btn mx-1"> حذف</div>

          <div className="edit-btn mx-1">تعديل</div>

          <div className="add-btn mx-1">جديد</div>
        </div>
      </Col>
    </Row>
  );
}
