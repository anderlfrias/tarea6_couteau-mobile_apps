import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'

const Gender = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const onPressSend = async() => {
        if (!name){
            Alert.alert('Por favor ingrese su nombre');
            setGender('');
            return;
        }

        fetch(`https://api.genderize.io/?name=${name}`)
            .then(response => response.json())
            .then(data => {
                if (!data?.gender){
                    Alert.alert('Genero no encontrado');
                    setGender('');
                    return;
                }
                setGender(data.gender);
            })
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
            accessible={false}
        >
        <SafeAreaView>
            <View style={gender === 'male' ? styles.containerMale : gender === 'female' ? styles.containerFemale : styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>
                        Predecir el género
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
                            accessibilityLabel="Learn more about this purple button"
                        />

                        {
                            gender === 'male' && (
                                <View style={{alignItems: 'center', marginTop: 20}}>
                                    <Text style={styles.title}>
                                        Su género es: Masculino
                                    </Text>
                                    <View style={styles.image}>
                                        <Text style={styles.title}>
                                            🤵
                                        </Text>
                                    </View>
                                </View>
                            )
                        }
                        {
                            gender === 'female' && (
                                <View style={{alignItems: 'center', marginTop: 20}}>
                                    <Text style={styles.title}>
                                        Su género es: Femenino
                                    </Text>
                                    <View style={styles.image}>
                                        <Text style={styles.title}>
                                            👩
                                        </Text>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Gender;

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    containerFemale: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#FF00FE'
    },
    containerMale: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#00A6CC'
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#fff',
    }

});
