import {DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
    let isLogin = true; //

    return (
        <ThemeProvider value={DefaultTheme}>
            <Stack screenOptions={{headerShown: false}}>
                { isLogin ?
                    <Stack.Screen name="(tabs)"/>
                    :
                    <Stack.Screen name="login"/>
                }
                <Stack.Screen name="+not-found"/>
            </Stack>
            <StatusBar style="auto"/>
        </ThemeProvider>
    );
}
