import { render, screen } from '@testing-library/react';
import UserCard from '../components/UserCard';

const testUser = {
  id: 1,
  avatar: 'https://via.placeholder.com/150',
  firstname: 'Tamizharasan',
  lastname: 'Senguttuvan',
  role: 'Frontend Developer',
  join_date: '2024-11-11',
  description: 'A passionate Frontend developer.'
};

describe('UserCard', () => {
  it('renders user card with correct details', () => {
    render(<UserCard user={testUser} onViewMore={jest.fn()} />);
    expect(screen.getByText('Tamizharasan Senguttuvan')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    const avatarImage = screen.getByAltText('Tamizharasan Senguttuvan');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  it('calls onViewMore function when the "View More" button is clicked', () => {
    const onViewMoreMock = jest.fn();
    render(<UserCard user={testUser} onViewMore={onViewMoreMock} />);
    const viewMoreButton = screen.getByText('View More');
    viewMoreButton.click();
    expect(onViewMoreMock).toHaveBeenCalledTimes(1);
  });
});