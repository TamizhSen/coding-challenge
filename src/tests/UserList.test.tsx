import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import UserList from '../components/UserList';
import { useFetchUsers } from '../hooks/useFetchUsers';

jest.mock('../hooks/useFetchUsers');

const mockUsers = [
  {
    id: 1,
    avatar: 'https://via.placeholder.com/150',
    firstname: 'Tamizharasan',
    lastname: 'Senguttuvan',
    role: 'Frontend Developer',
    join_date: '2024-11-11',
    description: 'A passionate Frontend developer.',
  },
  {
    id: 2,
    avatar: 'https://via.placeholder.com/150',
    firstname: 'Tamz',
    lastname: 'Sen',
    role: 'Backend Developer',
    join_date: '2025-01-01',
    description: 'A passionate Backend developer.',
  },
];

describe('UserList Integration Test', () => {
    it('renders the user list, handles view more click, and modal', async () => {
        (useFetchUsers as jest.Mock).mockReturnValue({
          data: mockUsers,
          loading: false,
          error: null,
        });
              render(<UserList />);
      
        expect(screen.getByText('Tamizharasan Senguttuvan')).toBeInTheDocument();
        expect(screen.getByText('Tamz Sen')).toBeInTheDocument();
      
        const viewMoreButton = screen.getAllByText('View More')[0];
        fireEvent.click(viewMoreButton);
      
        const modal = await screen.findByRole('dialog');
      
        expect(modal).toBeInTheDocument();
      
        const modalContent = within(modal);
        expect(modalContent.getByText('Tamizharasan Senguttuvan')).toBeInTheDocument();
        expect(modalContent.getByText('Role: Frontend Developer')).toBeInTheDocument();
        expect(modalContent.getByText('Joined: 2024-11-11')).toBeInTheDocument();
        expect(modalContent.getByText('A passionate Frontend developer.')).toBeInTheDocument();
      });
      
});
