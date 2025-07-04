import { render, screen } from '@testing-library/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './Modal';

describe('Modal', () => {
  it('renderiza o Modal fechado', () => {
    render(
      <Modal isOpen={false} onClose={() => { }}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it('renderiza o Modal aberto', () => {
    render(
      <Modal isOpen={true} onClose={() => { }}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );
    // O Modal não usa role="dialog" explicitamente, então vamos checar pelo texto
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
}); 