import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent  from '@testing-library/user-event';
import Options from '../Options';
import OrderEntry from '../OrderEntry';

test('update scoop subtotal when scoops change', async() => {
    render (<Options optionType="scoops" />);

    //make sure total starts out $0
    const scoopsSubTotal = screen.getByText('Scoops Total: $', { exact : false})
    expect(scoopsSubTotal).toHaveTextContent('0.00');
    
    //update vanilla scoops to 1 and check the subtotal
    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla'})
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput,'1');

    expect(scoopsSubTotal).toHaveTextContent('2.00')

    //update chocolate scoops and check subtotal

    const chocolateInput = await screen.findByRole('spinbutton', { name : 'Chocolate'})
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');
    expect(scoopsSubTotal).toHaveTextContent('6.00');
});

test('update toppings subtotal when topping change',async() => {
    render (<Options optionType="toppings" />);
    // validate Subtotal
    const toppingSubtotal = screen.getByText('Toppings total: $', { exact: false });
    expect(toppingSubtotal).toHaveTextContent('0.00');
    
    
    //find checkbox
    const cherriesCheckbox = await screen.findByRole('checkbox', { name: 'Cherries'});

    const MMsCheckbox = await screen.findByRole('checkbox', { name: 'M&Ms'});

    const HotfudgeCheckbox = await screen.findByRole('checkbox', { name: 'Hot fudge'})


    userEvent.click(cherriesCheckbox)
    expect(toppingSubtotal).toHaveTextContent('1.50')
    
    userEvent.click(MMsCheckbox)
    expect(toppingSubtotal).toHaveTextContent('3.00')
    
    userEvent.click(HotfudgeCheckbox)
    expect(toppingSubtotal).toHaveTextContent('4.50')

});

// this code is commented because it can't check the status after changes of the others testsw
// describe('grand total', () =>{
//     test('grand total starts in 0.00', async() =>{
//         render(<OrderEntry />);
//         const grandTotal = screen.getByRole('heading', { name: /grand total: /i})
//         expect(grandTotal).toHaveTextContent('0.0')
//     })
// })