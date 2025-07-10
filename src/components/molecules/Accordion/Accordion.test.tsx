import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

describe('Accordion', () => {
  it('renders accordion items correctly', () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    // Conteúdo só aparece após clicar no trigger
    fireEvent.click(screen.getByText('Section 1'));
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Section 2'));
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('toggles accordion item when trigger is clicked', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText('Section 1');
    // Inicialmente fechado
    expect(screen.queryByText('Content 1')).toBeNull();

    // Clica no trigger
    fireEvent.click(trigger);

    // Deve abrir
    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('supports multiple open items when allowMultiple is true', () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByText('Section 1');
    const trigger2 = screen.getByText('Section 2');

    // Abre o primeiro
    fireEvent.click(trigger1);
    expect(screen.getByText('Content 1')).toBeVisible();

    // Abre o segundo (ambos devem ficar abertos)
    fireEvent.click(trigger2);
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('closes other items when allowMultiple is false', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByText('Section 1');
    const trigger2 = screen.getByText('Section 2');

    // Abre o primeiro
    fireEvent.click(trigger1);
    expect(screen.getByText('Content 1')).toBeVisible();

    // Abre o segundo (primeiro deve fechar)
    fireEvent.click(trigger2);

    // O conteúdo 1 deve ser removido do DOM
    expect(screen.queryByText('Content 1')).toBeNull();
    // O conteúdo 2 deve estar visível
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('calls onOpenChange when items are toggled', () => {
    const onOpenChange = jest.fn();

    render(
      <Accordion type="single" onValueChange={onOpenChange}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText('Section 1');
    fireEvent.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith('item-1');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByRole('button', { name: 'Section 1' });

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-controls');
  });

  it('opens with defaultOpenItems', () => {
    render(
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const content = screen.getByText('Content 1');
    expect(content).toBeVisible();
  });
}); 