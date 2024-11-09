import React from 'react';
import { useFetchUsers } from '../hooks/useFetchUsers';
import UserCard from './UserCard';
import UserModal from './UserModal';
import '../styles/UserList.css';

const UserList: React.FC = () => {
  const { data: users, loading, error } = useFetchUsers();
  const [selectedUser, setSelectedUser] = React.useState<null | any>(null);
 
  const handleViewMore = (user: any) => {
    setSelectedUser(user);
    document.body.classList.add('no-scroll'); 
  };

  const closeModal = () => {
    setSelectedUser(null);
    document.body.classList.remove('no-scroll');
  };

  if (loading) {
    return <p className="loading-message">Loading users...</p>;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="user-list-container">
      {users && users.length > 0 ? (
        users.map((user) => (
          <UserCard key={user.id} user={user} onViewMore={handleViewMore} />
        ))
      ) : (
        <p>No users available</p>
      )}
      {selectedUser && <UserModal user={selectedUser} onClose={closeModal} />}
    </div>
  );
};

export default UserList;
