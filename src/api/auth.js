import axios from "axios";

const API_URL = "https://9cf59ad24cc24f2e.mokky.dev"; 

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data; 
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};
