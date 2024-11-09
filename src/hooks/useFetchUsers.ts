import { useState, useEffect } from 'react';
import api from '../utils/api';
import { User } from '../types/types';

export const useFetchUsers = () => {
  const [data, setData] = useState<User[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/users');
      setData(response.data.data.users);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to load user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { data, loading, error };
};
