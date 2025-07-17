import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from "expo-router"
import WeatherStationBlock from "../../components/weatherStationBlock"

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add new station</Text>
                </Pressable>
            </View>
            <View style={styles.WeatherStationContainer}>
                <View style={styles.block}>
                    <WeatherStationBlock name="Weather Station 1" location="Room 1" onPress={() => router.push('/weatherStation/1')}></WeatherStationBlock>
                    <WeatherStationBlock name="Weather Station 1" location="Room 1" onPress={() => router.push('/weatherStation/2')}></WeatherStationBlock>
                </View>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 1
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
    }
})
