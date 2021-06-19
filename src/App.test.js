import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Project by Acevedo Fernando - Ing. Soft. UTN FRRe/i);
  expect(linkElement).toBeInTheDocument();
});
