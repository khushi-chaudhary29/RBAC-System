import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // mock API endpoint
});

export const createUser = async (userData) => {
  return api.post('/users', userData);
};
