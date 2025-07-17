import React, { createContext, useState, ReactNode, useContext } from "react";

type WeatherStation = {
  id: string;
  user_id: string;
  name: string;
  macAddress: string;
  location: string;
}

type ContextType = {
  weatherStations: WeatherStation[];
  setWeatherStations: (items: WeatherStation[]) => void;
  getWeatherStations: (filters?: any) => Promise<void>;
};

export const WeatherStationContext = createContext<ContextType | null>(null);

export const WeatherStationContextProvider = ({ children}: { children: ReactNode}) => {
  const [weatherStations, setWeatherStations] = useState<WeatherStation[]>([]);

  const stations = [
    {
      id: "1",
      name: "Weather Station",
      location: "Weather Station",
      macAddress: "2345234543",
      user_id: "2"
    },
    {
      id: "1",
      name: "Weather Station",
      location: "Weather Station",
      macAddress: "2345234543",
      user_id: "2"
    },
  ]

  const getWeatherStations = async (filters?: any) => {
    setWeatherStations(stations);
  };

  return (
      <WeatherStationContext.Provider value={{
        weatherStations,
        setWeatherStations,
        getWeatherStations
      }}>
        {children}
      </WeatherStationContext.Provider>
  )
}
