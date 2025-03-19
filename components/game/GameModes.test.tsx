import { render, screen, fireEvent } from '@testing-library/react';
import { GameModes } from './GameModes';
import userEvent from '@testing-library/user-event';

describe('GameModes', () => {
  it('renders all game modes', () => {
    // Tests if all game modes are displayed
    render(<GameModes />);
    expect(screen.getByText('501')).toBeInTheDocument();
    expect(screen.getByText('Cricket')).toBeInTheDocument();
  });

  // Add more specific test cases
  it('handles mode selection correctly', async () => {
    render(<GameModes />);
    await userEvent.click(screen.getByText('501'));
    expect(screen.getByText('Double Out')).toBeInTheDocument();
  });
});
