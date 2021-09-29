import React from "react";
import { Col, Form, } from "react-bootstrap";
import { pricePerItem } from "../../constants";

export default function ToppingOption({ name, imagePath, updateItemCount}){
    
    return (
        <Col xs={12} sm={6} mx={4} lg={3} style={{textAlign: 'center'}}>

            <Form.Group>
                <img style={{width: '75%'}} src={`${imagePath}`} alt={`${name} topping`} />
                <Form.Check type="checkbox" id={`toppings-${name}`} label={`${name}`} name={`${name}`} onChange={e =>{updateItemCount(name,e.target.checked ? pricePerItem["toppings"]: '0')}}/>
            </Form.Group>
        </Col>
    ) 
}