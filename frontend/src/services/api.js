 
import axios from 'axios';

// Base URL for all API calls to the Java backend
const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export default API;