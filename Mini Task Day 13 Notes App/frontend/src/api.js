import axios from 'axios';

const API = axios.create({
  baseURL: '/api'   // thanks to Vite proxy
});

export default API;
