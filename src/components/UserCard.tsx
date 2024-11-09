import React from 'react';
import { User } from '../types/types';
import '../styles/UserCard.css';

interface UserCardProps {
  user: User;
  onViewMore: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onViewMore }) => {
  const { avatar, firstname, lastname, role } = user;

  const handleViewMore = () => {
    onViewMore(user);
  };

  return (
    <div className="user-card">
      <div className="user-card-body">
        <div className="profile-img-container">
          <img
            className="profile-img"
            src={avatar}
            alt={`${user.firstname} ${user.lastname}`}
          />
        </div>
        <h5 className="user-name">
          {`${firstname} ${lastname}`}
        </h5>
        <span className="role">{role}</span>
        <button
          onClick={handleViewMore}
          className="view-more-btn"
          aria-label={`View more about ${firstname} ${lastname}`}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default UserCard;
