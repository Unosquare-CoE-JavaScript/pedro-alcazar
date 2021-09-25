import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ScoopOptions from './ScoopOptions';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';
import { pricePerItem } from '../../constants'; 
import { useOrderDetails } from '../../context/Context';  
import { formatCurrency } from '../../utilities';

export default function Options ({optionType}){
    const [items, setItems] = useState([])
    const [error, setError] = useState(false);
    const [orderDetails, updateItemCount] = useOrderDetails();
    //optionType is 'scoops' or 'toppings'
    useEffect(() =>{
        axios.get(`/${optionType}`)
        .then((response) => setItems(response.data))
        .catch((error) => {setError(true)})
    },[optionType])


    if (error){
        return <AlertBanner />
    }

    //TODO: replace null with ToppingOption when available
    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption;
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

    const optionsItems = items.map(item => (
        <ItemComponent 
            key={item.name} 
            name={item.name} 
            imagePath={item.imagePath} 
            updateItemCount={(itemName, newItemCount) => updateItemCount(itemName, newItemCount, optionType)}/>)
    )


    return (
        <>
            <h2>{title}</h2>
            <p>{formatCurrency(pricePerItem[optionType])} each</p>
            <p>{title} total: {orderDetails.totals[optionType]}</p>
            <Row>{optionsItems}</Row>;
        </>
    )
}