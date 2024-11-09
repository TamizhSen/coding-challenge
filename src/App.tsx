import React from 'react';
import UserList from './components/UserList';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">User Directory</h1>
      <UserList />
    </div>
  );
};

export default App;
