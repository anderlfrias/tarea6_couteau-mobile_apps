import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native'

const Gender = () => {
    const [name, setName] = useState(''); // This is the name of the user
    const [gender, setGender] = useState(''); // This

    const onPressSend = async() => {
        if (!name){
            Alert.alert('Please enter your name');
            setGender('');
            return;
        }

        fetch(`https://api.genderize.io/?name=${name}`)
            .then(response => response.json())
            .then(data => {
                setGender(data.gender);
            })
    }

    return (
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
                    </View>
                </View>
            </View>
        </SafeAreaView>
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
        backgroundColor: '#FFC0FF'
    },
    containerMale: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#00e5e5'
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
