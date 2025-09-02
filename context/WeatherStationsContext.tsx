import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
// import * as SecureStore from "expo-secure-store";
import { setItem, getItem, removeItem} from "@/utils/storage"
import "../routes/routes"
import {apiGetAllWeatherStations, apiLogin, apiLogout} from "@/routes/routes";

type WeatherStation = {
  id: string;
  user_id: string;
  name: string;
  macAddress: string;
  location: string;
}

type ContextType = {
  token: string | null;
  loading: boolean;
  login(email: string, password: string): void;
  logout(): void;

  weatherStations: WeatherStation[];
  setWeatherStations: (items: WeatherStation[]) => void;
  getWeatherStations: (filters?: any) => Promise<void>;
};

export const WeatherStationContext = createContext<ContextType | null>(null);

export const WeatherStationContextProvider = ({ children}: { children: ReactNode}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [weatherStations, setWeatherStations] = useState<WeatherStation[]>([]);

  useEffect(() => {
    (async () => {
      const storeAccessToken = await getItem("access_token");
      if (storeAccessToken) {
        setToken(storeAccessToken);
      }
      setLoading(false);
    })();
  }, []);

  const login = async(email: string, password: string) => {
    const data = await apiLogin(email, password);
    setToken(data.access_token);
  }

  const logout = async () => {
    await apiLogout();
    setToken(null);
  }

  const getWeatherStations = async (filters?: any) => {
    const weatherStationResponse = await apiGetAllWeatherStations();
    setWeatherStations(weatherStationResponse.data);
  };

  return (
      <WeatherStationContext.Provider value={{
        token,
        loading,
        login,
        logout,
        weatherStations,
        setWeatherStations,
        getWeatherStations
      }}>
        {children}
      </WeatherStationContext.Provider>
  )
}
