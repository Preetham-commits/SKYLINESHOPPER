import axios from "axios";

const API_URL = "http://localhost:5000/api/user";

export const signup = async (userData) => {
    return axios.post(`${API_URL}/signup`, userData);
};

export const login = async (userData) => {
    return axios.post(`${API_URL}/login`, userData);
};
