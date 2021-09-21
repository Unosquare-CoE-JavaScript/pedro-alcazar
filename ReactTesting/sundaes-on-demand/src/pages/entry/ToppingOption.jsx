import React from "react";
import { Col } from "react-bootstrap";

export default function ToppingOption({ name, imagePath }){
    return (
        <Col xs={12} sm={6} mx={4} lg={3} style={{textAlign: 'center'}}>
            <img style={{width: '75%'}} src={`${imagePath}`} alt={`${name} topping`} />
        </Col>
    ) 
}