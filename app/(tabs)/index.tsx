import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from "expo-router"
import { useContext, useEffect, useState } from "react";
import WeatherStationBlock from "../../components/weatherStationBlock"
import {WeatherStationContext} from "@/context/WeatherStationsContext";

export default function HomeScreen() {
    const router = useRouter();
    const context = useContext(WeatherStationContext);

    if (!context) return (<Text style={styles.loader}>Loading</Text>);

    const { weatherStations, getWeatherStations } = context;

    useEffect(() => {
        getWeatherStations();
    }, []);

    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Add new station +</Text>
            </Pressable>
            <View style={styles.WeatherStationContainer}>
                <View style={styles.block}>
                    {weatherStations.map(weatherStation => (
                        <WeatherStationBlock name={weatherStation.name} location={weatherStation.location} onPress={() => router.push(`/weatherStation/${weatherStation.id}`)}></WeatherStationBlock>
                    ))}
               </View>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        backgroundColor: '#0c6673',
    },
    headerText: {
        height: '100%',
        width: '80%',
        fontSize: 20,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        color: 'white',
    },
    buttonContainer: {
        marginTop: 10,
        width: '85%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#0c6673',
    },
    buttonText: {
        marginTop: 10,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Roboto',
        color: 'white'
    },
    WeatherStationContainer: {
        flex: 1,
        alignItems: 'center',
    },
    block: {
        height: '100%',
        width: '90%',
    },
    loader: {
        width: '100%',
        height: '30%',
        color: '#000000',

        backgroundColor: '#000000',
    }
})
