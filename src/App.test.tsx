import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders code block link', () => {
  render(<App />);
  const element = screen.getByText(/type = /i);
  expect(element).toBeInTheDocument();
});
