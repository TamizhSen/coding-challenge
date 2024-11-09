import { render, screen, fireEvent } from '@testing-library/react';
import UserModal from '../components/UserModal';

describe('UserModal', () => {
  const testUser = {
    avatar: 'https://via.placeholder.com/150',
    firstname: 'Tamizharasan',
    lastname: 'Senguttuvan',
    role: 'Engineer',
    join_date: '2024-11-11',
    description: 'A passionate Frontend developer.'
  };

  test('renders user info and avatar', () => {
    render(<UserModal user={testUser} onClose={() => {}} />);
    expect(screen.getByText('Tamizharasan Senguttuvan')).toBeInTheDocument();
    expect(screen.getByText(/Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/Joined: 2024-11-11/)).toBeInTheDocument();
    expect(screen.getByText('A passionate Frontend developer.')).toBeInTheDocument();
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  test('closes modal when close button is clicked', () => {
    const onClose = jest.fn();
    render(<UserModal user={testUser} onClose={onClose} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });
});
