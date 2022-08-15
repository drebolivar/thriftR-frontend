import Axios from "axios";

export const BASE_URL = "http://localhost:3001";

const Client = Axios.create({ baseURL: BASE_URL });

// Client.interceptors.request.use(
//   (config) => {
//     //Reads the token in localStorage
//     const token = localStorage.getItem('token')
//     //if the token exists we set the auth header
//     if (token) {
//       config.headers['authorization'] = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => Promise.reject(error)
// )

export default Client;
