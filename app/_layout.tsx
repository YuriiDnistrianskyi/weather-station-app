import {DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';
import { useState} from "react";
import {StatusBar} from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import {WeatherStationContextProvider} from "@/context/WeatherStationsContext";
import 'react-native-reanimated';

export default function RootLayout() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemeProvider value={DefaultTheme}>
                <WeatherStationContextProvider>
                    <Stack screenOptions={{headerShown: false}}>
                        { isLogin ?
                            <Stack.Screen name="(tabs)"/>
                            :
                            <Stack.Screen name="login"/>
                        }
                        <Stack.Screen name="+not-found"/>
                    </Stack>
                </WeatherStationContextProvider>
                <StatusBar style="auto"/>
            </ThemeProvider>
        </SafeAreaView>
    );
}
