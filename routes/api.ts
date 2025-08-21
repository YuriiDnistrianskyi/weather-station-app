import axios from "axios"

const BASE_URL = 'http://localhost:8080'

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    async(config) => {
        const token = await getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
)

export default api;

import * as SecureStore from "expo-secure-store";

export async function getToken() {
    return await SecureStore.getItemAsync("token");
}
