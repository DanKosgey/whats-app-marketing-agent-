import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AIChatAgent from '../AIChatAgent';

describe('AIChatAgent', () => {
  it('renders the chat toggle button and opens the chat window', async () => {
    render(<AIChatAgent whatsappLink="https://wa.me/123" />);

    const toggle = screen.getByRole('button');
    expect(toggle).toBeInTheDocument();

    // open
    fireEvent.click(toggle);
    const header = await screen.findByText(/PulseChat AI/i);
    expect(header).toBeInTheDocument();
  });
});
