import api from "./api"
import * as SecureStore from "expo-secure-store";

const BASE_URI = 'http://localhost:8080'

export async function apiLogin(email: string, password: string) {
    const response = await api.post("/login", {email: email, password: password});
    const { access_token, refresh_token } = response.data;
    await SecureStore.setItemAsync("access_token", access_token);
    await SecureStore.setItemAsync("refresh_token", refresh_token);
    return response.data;
}

// export async function refreshToken() {
//     // api.
//     const response = await api.post("/refresh");
//     const { access_token } = response.data;
//     await SecureStore.setItemAsync("access_token", access_token);
//     return response.data;
// }

export async function apiLogout() {
    await SecureStore.deleteItemAsync("access_token");
    await SecureStore.deleteItemAsync("refresh_token");
}

export async function apiGetAllWeatherStations() {
    const response = await api.get(`${BASE_URI}/weather-stations`, {});
    return response;
}

export async function apiGetDataByWeatherStationId(weather_station_id: string) {
    const params = new URLSearchParams({"weather_station_id": weather_station_id}).toString()
    const response = await api.get(`${BASE_URI}/info?${params}`, {});
    return response;
}

export async function apiGetAllDataByWeatherStationId(weather_station_id: string) {
    const params = new URLSearchParams({"weather_station_id": weather_station_id}).toString()
    const response = await api.get(`${BASE_URI}/info/all?${params}`, {});
    return response;
}

