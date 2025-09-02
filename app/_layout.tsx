import {DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';
import { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { WeatherStationContextProvider } from "@/context/WeatherStationsContext";
import { WeatherStationContext } from "@/context/WeatherStationsContext";
import { ActivityIndicator, View } from "react-native";
import 'react-native-reanimated';

export function AppNav() {
    const weatherContext = useContext(WeatherStationContext);
    if (!weatherContext) return null;

    const { token, loading } = weatherContext;

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            {token ? (
                <>
                    <Stack.Screen name="index" />
                    {/*<Stack.Screen name="stations" />*/}
                    <Stack.Screen name="+not-found" />
                </>
            ) : (
                <Stack.Screen name="login" />
            )}
        </Stack>
    );
}


export default function RootLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemeProvider value={DefaultTheme}>
                <WeatherStationContextProvider>
                    <AppNav />
                </WeatherStationContextProvider>
                <StatusBar style="auto"/>
            </ThemeProvider>
        </SafeAreaView>
    );
}
