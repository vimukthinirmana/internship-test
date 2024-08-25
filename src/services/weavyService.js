import axios from 'axios';

const API_URL = 'https://27f73f4c548f47c79e4e7977b2d4b0f6.weavy.io';
const API_KEY = process.env.REACT_APP_WEAVY_API_KEY;

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

export const createUser = (userData) => {
  return axios.post(`${API_URL}users`, userData, { headers });
};

export const listUsers = () => {
  return axios.get(`${API_URL}users`, { headers });
};

export const getUserDetails = (userId) => {
  return axios.get(`${API_URL}users/${userId}`, { headers });
};

export const updateUser = (userId, userData) => {
  return axios.put(`${API_URL}users/${userId}`, userData, { headers });
};

export const deleteUser = (userId) => {
  return axios.delete(`${API_URL}users/${userId}`, { headers });
};
