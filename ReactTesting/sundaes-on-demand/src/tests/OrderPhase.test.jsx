import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import OrderSummary from '../pages/summary/OrderSummary';

test ('order phases for happy path', async() => {
    //render app
    render(<App />);
    const vanilla = await screen.findByRole ('spinbutton', { name: 'Vanilla'});

    userEvent.clear((vanilla))
    userEvent.type(vanilla, '1');
    
    const Chocolate = await screen.findByRole ('spinbutton', { name: 'Chocolate'});

    userEvent.clear((Chocolate))
    userEvent.type(Chocolate, '2');


    const cherriesCheckbox = await screen.findByRole('checkbox', { name : 'Cherries'})
    userEvent.click(cherriesCheckbox)


    render (<OrderSummary />)
    const summaryHanding =  screen.getByRole('heading', { name : 'Order Summary'})
    expect(summaryHanding).toBeInTheDocument();


    //add oce cream scoops and  toppings

    //find and click other button

    //check summary information based on order

    //accept terms and conditions and click button to confirm order

    //confirm order number on confirmation page

    //click "new order" button on confirmation page

    //check thath scoops and toopings subtotals have been reset

    //do we need to await anything to avoid test errors?
})