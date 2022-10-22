import React from "react";
import { Row, Col } from "react-bootstrap";
import DailyNavigation from "./action_panel/DailyNavigation";
import SellMemoForm from "./action_panel/SellMemoForm";


const ActionPanel = () => {
    return (

    <div>
        <Row>
            <Col sm={12} md={4}>
                <DailyNavigation />
            </Col>
            <Col sm={12} md={4}>
                <SellMemoForm />
               
            </Col>
            
        </Row>
    </div>
    )
};

export default ActionPanel;