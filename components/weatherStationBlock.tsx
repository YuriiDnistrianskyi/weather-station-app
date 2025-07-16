import {Pressable, Text, View, StyleSheet} from 'react-native';
import {Feather} from "@expo/vector-icons";

type WeatherStationProps = {
    name: string,
    location: string,
    onPress?: () => void
}

export default function WeatherStationBlock({ name, location, onPress } : WeatherStationProps){
    return (
        <Pressable onPress={onPress} style={styles.block}>
            <View style={styles.image}>
                <Feather style={styles.imageBox} name="hard-drive" size={90} color={"#0c6673"}></Feather>
            </View>
            <View style={styles.textBlock}>
                <Text style={styles.headerText}>{name}</Text>
                <Text style={styles.locationText}>Weather station in {location}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    block: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        height: 100,
        width: '100%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",

        backgroundColor: '#ffffff',
    },
    image: {
        width: '40%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
    },
    imageBox: {

    },
    textBlock: {
        width: '55%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    headerText: {
        width: '100%',
        height: '50%',
        fontSize: 20,
        fontWeight: 'bold',
    },
    locationText: {
        flex: 1,
        fontSize: 15,
    }
})
