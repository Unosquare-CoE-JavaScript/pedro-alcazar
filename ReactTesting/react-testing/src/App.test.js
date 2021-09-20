import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // FIND AN ELEMENT WITH A ROLE OF BUTTON AND TEXT OF 'CHANGE TO BLUE'
  const linkElement = screen.getByRole('button',{name: 'Change to blue'});
  // EXPECT THE BACKGROUND COLOR TO BE RED
  expect(linkElement).toHaveStyle({backgroundColor: 'red'});
});

test('button turns blue when clicked',() =>{
  render(<App />);
  const likeElement = screen.getByRole('button', {name: 'Change to blue'})
  expect(likeElement).toHaveStyle({backgroundColor: 'red'})
  fireEvent.click(likeElement);
  expect(likeElement).toHaveStyle({backgroundColor: 'blue'})
  expect(likeElement.textContent).toBe('Change to red')
});

test('initial conditions', () =>{
  render (<App />);

  // check that the botton starts out enabled
  const colorButton  = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled();

  // chect that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click',() =>{
  render (<App />)

  //Selecting elements
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled;

  fireEvent.click(checkbox);
  expect(button).toBeEnabled;
})


