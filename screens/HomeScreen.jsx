import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Inicio</Text>
                <Image style={styles.image} source={require('../assets/home-images/navaja-suiza.jpg')} />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})