import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from "expo-router"
import WeatherStationBlock from "../../components/weatherStationBlock"

export default function HomeScreen() {
    const router = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Your weather station</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>+</View>
            </View>
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
        height: 40,
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
        height: '100%',
        width: '20%',
    },
    button: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
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
