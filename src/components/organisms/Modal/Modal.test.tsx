import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('renders the Modal closed', () => {
    render(<Modal isOpen={false} onClose={() => { }} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders the Modal open', () => {
    render(
      <Modal isOpen={true} onClose={() => { }}>
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
}); 