import axios from "axios";
import React, { useEffect, useState } from "react";
import { useOrderDetails } from "../../context/Context";

export default function OrderConfirmation(){
    const [orderNumber, setOrderNumber] = useState(null)
    const [, , resetOrder ] = useOrderDetails()

    useEffect(() => {
        axios.get('/order')
            .then(data => {setOrderNumber(data.orderNumber)})
            .catch(error => console.log(error))
    })

    const orderReset = () => {
        resetOrder()
    }

    
    if (orderNumber){
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Thank you</h1>
                <h3>Confirmation</h3>
                <div>Your order number is: {orderNumber}</div>
                <p>as per our terms and conditions, nothing will happend now</p>
                <button onClick={orderReset}>New Order</button>
            </div>
        )
    }else{
        return (
            <div style={{textAlign: 'center'}}>Loading..</div>
        )

    }
        
}