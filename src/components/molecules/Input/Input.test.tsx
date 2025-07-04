import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders label and input', () => {
    render(
      <Input.Root label="Name">
        <Input.Control placeholder="Type your name" />
      </Input.Root>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your name')).toBeInTheDocument();
  });
}); 