import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ScoopOptions from './ScoopOptions';

export default function Options ({optionType}){
    const [items, setItems] = useState([])
    //optionType is 'scoops' or 'toppings'
    useEffect(() =>{
        axios.get(`http://localhost:3030/${optionType}`)
        .then((response) => setItems(response.data))
        .catch((error) => console.warn(error))
    },[optionType])


    //TODO: replace null with ToppingOption when available
    const ItemComponent = optionType = 'scoops' ? ScoopOptions: null;

    const optionsItems = items.map(item => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />)

    return <Row>{optionsItems}</Row>;
}