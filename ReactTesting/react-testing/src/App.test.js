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

