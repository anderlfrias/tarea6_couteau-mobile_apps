import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'

const About = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>SOBRE MI</Text>

                <View style={styles.image}>
                    <Image source={require('../assets/mi-foto.jpg')} style={{width: '100%', height: '100%'}} />
                </View>

                <View style={styles.cardText}>
                    <Text style={{marginBottom: 10, fontSize: 17}}>
                        <Text style={{fontWeight: 'bold'}}>Nombre:</Text> Anderson Leonel Frias Acosta
                    </Text>

                    <Text style={{marginBottom: 10, fontSize: 17}}>
                        <Text style={{fontWeight: 'bold'}}>Edad:</Text> 21
                    </Text>

                    <Text style={{marginBottom: 10, fontSize: 17}}>
                        <Text style={{fontWeight: 'bold'}}>Universidad:</Text> Instituto Tecnologico de Las Americas (ITLA)
                    </Text>

                    <Text style={{marginBottom: 10, fontSize: 17}}>
                        <Text style={{fontWeight: 'bold'}}>Profesión:</Text> Tecnologo en Desarrollo de Software
                    </Text>

                    <Text style={{marginBottom: 10, fontSize: 17}}>
                        <Text style={{fontWeight: 'bold'}}>Descripción:</Text> Soy un estudiante de la carrera de Desarrollo de Software en el ITLA, me gusta mucho la programación y la tecnología en general. Me gusta mucho aprender cosas nuevas y me gusta mucho el deporte, especialmente el basketball.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default About;

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    cardText: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
    },
})