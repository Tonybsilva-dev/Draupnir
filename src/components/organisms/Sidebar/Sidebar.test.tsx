import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders logo and title', () => {
    render(<Sidebar />);
    expect(screen.getByText('Draupnir DS')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Sidebar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Tasks')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Reporting')).toBeInTheDocument();
  });

  it('renders logout button', () => {
    render(<Sidebar />);
    expect(screen.getByLabelText('Logout')).toBeInTheDocument();
  });
}); 