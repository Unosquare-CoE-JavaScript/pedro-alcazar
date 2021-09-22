import React from "react";
import { Col } from "react-bootstrap";
import { Form } from 'react-bootstrap'; 
import { Row } from "react-bootstrap";

export default function ScoopOptions ({name, imagePath, updateItemCount}){
  const handleChange = (event) =>{
    updateItemCount(name, event.target.value)
  }
    return <Col xs={12} sm={6} mx={4} lg={3} style={{textAlign: 'center'}}>
            <img style={{width: '75%'}} src={`${imagePath}`} alt={`${name} scoop`} />
            <Form.Group controlId = {`${name}-count`} as={Row} style={{marginTop: "10px"}}> 
              <Form.Label column xs="6" style={{textAlign: 'right'}}>{name}</Form.Label>
              <Col xs="5" style={{textAlign: 'left'}}>
                <Form.Control type="number" defaultValue={0} onChange={handleChange}></Form.Control>
              </Col>
            </Form.Group>
          </Col>;
}