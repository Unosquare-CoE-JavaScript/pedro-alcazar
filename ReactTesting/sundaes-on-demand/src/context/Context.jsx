import { createContext, useContext, useState, useMemo, useEffect } from "react";
import {  pricePerItem } from '../constants/index';
import { formatCurrency } from "../utilities";


const OrderDetails = createContext();

//create custom hook

export function useOrderDetails(){
    const context = useContext(OrderDetails);

    if (!context){
        throw new Error ('useOrderDetails must be used within an OrderDetailsProvider')
    }
    return context;
}

export function OrderDetailsProvider(props){

    const [optionCounts, setOptionsCounts] = useState({
        scoops: new Map(),
        toppings: new Map()
    })

    const zeroCurrency = formatCurrency(0);
    const [totals, setTotals] = useState({
        scoops: zeroCurrency,
        toppings: zeroCurrency,
        grandTotal: zeroCurrency
    })

    function calculateSubtotal(optionType, optionCounts){
        let optionCount = 0;
        for(const count of optionCounts[optionType].values()){
            optionCount += count
        }
        return optionCount * pricePerItem[optionType];
    }

    useEffect(() =>{
        const scoopsSubTotal = calculateSubtotal ("scoops", optionCounts)
        const toppingsSubtotal = calculateSubtotal("toppings", optionCounts);
        const grandTotal = scoopsSubTotal + toppingsSubtotal;
        setTotals({
            scoops: formatCurrency(scoopsSubTotal),
            toppings: formatCurrency(toppingsSubtotal),
            grandTotal: formatCurrency(grandTotal)
        })
    },[optionCounts])

    const value = useMemo(() => {
        function updateItemCount(itemName,newItemCount, optionType){
            const newOptionCounts= {...optionCounts}
            
            //update option count for this item with the new value
            const optionCountsMap = optionCounts[optionType];
            optionCountsMap.set(itemName, parseInt(newItemCount));

            setOptionsCounts(newOptionCounts);

        }
        //getter: object containing options count for scoops an toppings, subtotals and totals
        //setter: 


        //Reset count of orders
        function resetOrder(){
            setOptionsCounts({
                scoops: new Map(),
                toppings: new Map(),
                grandTotal: 0
            })
        }


        return [{...optionCounts,totals}, updateItemCount, resetOrder]
    },[optionCounts, totals])
    return <OrderDetails.Provider value={value} {...props} />
}