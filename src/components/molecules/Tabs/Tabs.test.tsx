import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabList, TabTrigger, TabContent } from './Tabs';

describe('Tabs', () => {
  it('renders tabs correctly', () => {
    render(
      <Tabs defaultActiveTab="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument(); // Inicialmente não visível
  });

  it('switches tabs when trigger is clicked', () => {
    render(
      <Tabs defaultActiveTab="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    const tab2Trigger = screen.getByText('Tab 2');
    fireEvent.click(tab2Trigger);

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('calls onTabChange when tab is switched', () => {
    const onTabChange = jest.fn();

    render(
      <Tabs defaultActiveTab="tab1" onTabChange={onTabChange}>
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    const tab2Trigger = screen.getByText('Tab 2');
    fireEvent.click(tab2Trigger);

    expect(onTabChange).toHaveBeenCalledWith('tab2');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Tabs defaultActiveTab="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    const tabList = screen.getByRole('tablist');
    const tab1 = screen.getByText('Tab 1');
    const tab2 = screen.getByText('Tab 2');

    expect(tabList).toHaveAttribute('aria-orientation', 'horizontal');
    expect(tab1).toHaveAttribute('role', 'tab');
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
  });

  it('supports vertical orientation', () => {
    render(
      <Tabs defaultActiveTab="tab1" orientation="vertical">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    const tabList = screen.getByRole('tablist');
    expect(tabList).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders with no default active tab', () => {
    render(
      <Tabs>
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    // Sem aba ativa, nenhum conteúdo deve ser exibido
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('updates active tab when defaultActiveTab changes', () => {
    const { rerender } = render(
      <Tabs activeTab="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();

    rerender(
      <Tabs activeTab="tab2">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
}); 