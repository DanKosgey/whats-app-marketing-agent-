import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /Automate WhatsApp/i });
    expect(heading).toBeInTheDocument();
  });
});
