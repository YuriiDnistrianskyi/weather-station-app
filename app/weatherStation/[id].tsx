import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function WeatherStationPage() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const weatherStation = {
        name: "Weather Station",
        location: "Weather Station",
        temperature: 60.11,
        humidity: 60,
        pressure: 60
    }

    const dataTemperature = {
        maxTemperature: 25.43,
        minTemperature: -5.75,
    }

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <Pressable style={styles.backButtonContainer} onPress={() => router.back()}>
                    <Feather style={styles.backButton} name="arrow-left" size={30} color="white" />
                </Pressable>
                <Text style={styles.headerText}>{weatherStation.name}</Text>
                <View style={styles.editButtonContainer}>
                    <Feather style={styles.editButton} name="edit" size={30} color="white" />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.blockTop}>
                    <View style={styles.blockTopContainer}>
                        <View style={styles.TBlock}>
                            <Text style={styles.tBlockText}>{dataTemperature.maxTemperature}°С</Text>
                        </View>
                        <Text style={styles.line}>/</Text>
                        <View style={styles.TBlock}>
                            <Text style={styles.tBlockText}>{dataTemperature.minTemperature}°С</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.title}>Temperature:</Text>
                    <View style={styles.display}>
                        <Text style={styles.displayText}>{weatherStation.temperature}°С</Text>
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.title}>Humidity:</Text>
                    <View style={styles.display}>
                        <Text style={styles.displayText}>{weatherStation.humidity}%</Text>
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.title}>Pressure:</Text>
                    <View style={styles.display}>
                        <Text style={styles.displayText}>{weatherStation.pressure}hPa</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

WeatherStationPage.options = {
    headerShown: false,
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        width: '100%',
        backgroundColor: '#0c6673',
        alignItems: 'center',
    },
    backButtonContainer: {
        width: '20%',
        height: '30%',
    },
    backButton: {
        marginLeft: 20,
    },
    headerText: {
        marginTop: 8,
        width: '60%',
        height: '30%',
        fontSize: 20,
        fontFamily: 'Roboto',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
    },
    editButtonContainer: {
        width: '20%',
        height: '30%',
    },
    editButton: {
        marginLeft: 20,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    blockTop: {
        marginTop: 20,
        alignItems: 'center',
        width: '90%',
        height: 120,
        borderRadius: 8,
        backgroundColor: '#0c6673',
    },
    blockTopContainer: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '80%',
        height: '40%',
    },
    TBlock: {
        width: '30%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: 'white',
    },
    tBlockText: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    line: {
        fontSize: 40,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'white',
    },
    block: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        width: '90%',
        height: 120,
        backgroundColor: '#dddddd',
        borderRadius: 8,

        alignItems: 'center',
    },
    title: {
        width: '60%',
        height: '30%',

        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    display: {
        marginLeft: 15,
        width: '30%',
        height: '30%',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#0c6673',
        borderRadius: 8,
    },
    displayText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})
