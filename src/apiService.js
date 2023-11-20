import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getRecyclingPoints = () => {
    return axios.get(`${BASE_URL}/points`);
};

export const getPointDetails = (pointId) => {
    return axios.get(`${BASE_URL}/points/${pointId}`);
};