import React from "react";
import { Row, Col } from "react-bootstrap";
import DailyNavigation from "./action_panel/DailyNavigation";
import SellMemoForm from "./action_panel/SellMemoForm";
// import Heading from "../../components/common/Heading";

const ActionPanel = () => {
    return (

    <div>
        <Row>
            <Col sm={12} md={4}>
                <DailyNavigation />
            </Col>
            <Col sm={12} md={4}>
                <SellMemoForm />
                {/* <ManageAnchorSessionDay /> */}
                {/* <ManageManualSessionDay /> */}
            </Col>
            {/* <Col sm={12} md={4}>
                <ManageDay />
            </Col> */}
        </Row>
    </div>
    )
};

export default ActionPanel;