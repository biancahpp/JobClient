import axios from 'axios';

const api = axios.create({
  baseURL: `https://jobs-bianca.herokuapp.com/`,
});

export default api;