import {Text, View, StyleSheet} from 'react-native';

type WeatherStationProps = {
    name: string
}

export default function WeatherStationBlock({ name } : WeatherStationProps){
    return (
        <View style={styles.block}>
            <View style={styles.image}></View>
            <View style={styles.textBlock}>
                <Text style={styles.headerText}>{name}</Text>
                <Text style={styles.dataText}>detail text</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        height: 70,
        width: '100%',
        borderRadius: 10,

        backgroundColor: '#37cac6',
    },
    image: {
        width: '40%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: 'black', //
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
        fontSize: 15,
        fontWeight: 'bold',
    },
    dataText: {
        flex: 1,
        fontSize: 10,
    }
})
