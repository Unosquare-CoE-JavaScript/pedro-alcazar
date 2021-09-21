import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('Initial conditions',() =>{
    render (<SummaryForm />)
    const checkbox  = screen.getByRole('checkbox',{name:/terms and conditions/i});
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button',{name: /confirm order/i});
    expect(confirmButton).toBeDisabled();
});

test('Checkbox disables button on first click and enables on second click',() => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const confirmButton = screen.getByRole('button', { name : /confirm order/i});
    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', async() => {
    render (<SummaryForm />)
    //popover status out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i)
    expect(nullPopover).not.toBeInTheDocument()
    //popover apperas upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    
    userEvent.hover(termsAndConditions);


    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    
    await waitForElementToBeRemoved(() => {
         screen.queryByText(/no ice cream will actually be delivered/i);
    });

    //popover disaper mouseover
})