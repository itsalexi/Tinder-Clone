import axios from 'axios';

// Replace URL with your backend URL
const instance = axios.create({
    baseURL: 'http://localhost:8001',
});

export default instance;
