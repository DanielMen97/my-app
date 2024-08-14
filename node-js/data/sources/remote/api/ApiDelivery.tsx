import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'http://10.175.81.181:3000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export {ApiDelivery};