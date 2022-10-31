import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button, Alert, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'

const Age = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const onPressSend = async() => {
        if (!name){
            Alert.alert('Por favor ingrese su nombre');
            setAge(0);
            return;
        }

        fetch(`https://api.agify.io/?name=${name}`)
            .then(response => response.json())
            .then(data => {
                if (!data?.age){
                    Alert.alert('Edad no encontrada');
                    setAge(0);
                    return;
                }
                setAge(data.age);
            })
    }

    const getResponse = (age) => {
        if (age > 0 && age <= 26){
            return 'es joven';
        }

        if (age > 26 && age <= 59){
            return 'es adulto';
        }

        return 'es anciano';
    }

    const getImage = (age) => {
        if (age > 0 && age <= 26){
            return '../assets/age-images/joven.png';
        }

        if (age > 26 && age <= 59){
            return '../assets/age-images/adulto.png';
        }

        return '../assets/age-images/anciano.png';
    }

    const renderImage = (age) => {
        if (age > 0 && age <= 26){
            return <Image source={require('../assets/age-images/joven.png')} style={{width: '100%', height: '100%'}} />
        }

        if (age > 26 && age <= 59){
            return <Image source={require('../assets/age-images/adulto.png')} style={{width: '100%', height: '100%'}} />
        }

        return <Image source={require('../assets/age-images/anciano.png')} style={{width: '100%', height: '100%'}} />
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
            accessible={false}
        >
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>
                        Predecir la edad
                    </Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder="Ingrese su nombre"
                        />

                        <Button
                            style={styles.button}
                            onPress={onPressSend}
                            title="Enviar"
                            color="#841584"
                        />
                    </View>

                    {age > 0 && (
                        <View style={{alignItems: 'center', marginTop: 20}}>
                            <Text style={styles.title}>
                                Su edad es: {age}
                            </Text>
                            <Text style={styles.title}>
                                Usted {getResponse(age)}
                            </Text>
                            <View style={styles.image}>
                                {renderImage(age)}
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Age


const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    card: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
    }
});