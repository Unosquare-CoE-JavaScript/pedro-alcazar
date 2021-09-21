import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ScoopOptions from './ScoopOptions';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';

export default function Options ({optionType}){
    const [items, setItems] = useState([])
    const [error, setError] = useState(false);
    //optionType is 'scoops' or 'toppings'
    useEffect(() =>{
        axios.get(`${optionType}`)
        .then((response) => setItems(response.data))
        .catch((error) => {setError(true)})
    },[optionType])


    if (error){
        return <AlertBanner />
    }

    //TODO: replace null with ToppingOption when available
    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption;

    const optionsItems = items.map(item => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />)

    return <Row>{optionsItems}</Row>;
}