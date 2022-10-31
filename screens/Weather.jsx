import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'

const Weather = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Hoy</Text>
                <Text style={styles.subtitle}>31 Oct</Text>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/weather-images/rainy-day.png')} style={{width: '100%', height: '100%'}} />
                </View>

                <View style={styles.temperatureContainer}>
                    <Text style={styles.temperatureDescription}>80%</Text>
                    <Text style={styles.temperatureDescription}>10 mm</Text>
                    <Text style={styles.temperature}>
                        <Text style={{color: '#cb2c2a'}}>31°</Text>
                        /
                        <Text style={{color: '#2a65cb'}}>22°</Text>
                    </Text>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>Lluvioso</Text>
                    <Text style={styles.subDescription}>16 - 37 km/h</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Weather;

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#a9a9a9'
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginVertical: 30,
    },
    temperatureContainer: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    temperatureDescription: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1d5d63'
    },
    temperature: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#a9a9a9'
    },
    descriptionContainer: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    description: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3BBAC7'
    },
    subDescription: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#a9a9a9'
    }
});