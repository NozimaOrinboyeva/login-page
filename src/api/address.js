// import axios from "axios";

// const API_URL = "https://5e4a7e4200577421.mokky.dev/addresses";

// export const getAddresses = () => 
//     axios.get(`${API_URL}`); 
// export const addAddress = (data) => 
//     axios.post(`${API_URL}`, data);
// export const deleteAddress = (id) => 
//     axios.delete(`${API_URL}/${id}`);
// export const updateAddress = (id, data) =>
//     axios.put(`${API_URL}/${id}`, data);


import axios from "axios";

const API_URL = "https://5e4a7e4200577421.mokky.dev/addresses";

export const getAddresses = () => axios.get(API_URL);

export const addAddress = (data) => axios.post(API_URL, data);

export const deleteAddress = (id) => axios.delete(`${API_URL}/${id}`);

export const updateAddress = (id, data) =>
    axios.patch(`${API_URL}/${id}`, data);
