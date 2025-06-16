import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = axios.get(path, options);
    return (await response).data;
};
