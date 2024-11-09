import React from 'react';
import { User } from '../types/types';
import '../styles/UserModal.css';

interface UserModalProps {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!user) {
    return (
      <div className="modal-overlay" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden={!user}
      data-testid="modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-header">
          <img
            className="avatar"
            src={user.avatar || 'https://via.placeholder.com/150'}
            alt={`${user.firstname} ${user.lastname}'s avatar`}
          />
        </div>

        <h2 className="user-name" id="modal-title">
          {`${user.firstname} ${user.lastname}`}
        </h2>
        <p className="user-role">{`Role: ${user.role || 'N/A'}`}</p>
        <p className="user-joined">{`Joined: ${user.join_date || 'N/A'}`}</p>
        <p className="user-description">{user.description || 'No description available'}</p>
      </div>
    </div>
  );
};

export default UserModal;
