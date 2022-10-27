import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native'

const Gender = () => {
    const [name, setName] = useState(''); // This is the name of the user
    const [gender, setGender] = useState(''); // This

    const onPressSend = async() => {
        if (!name){
            Alert.alert('Please enter your name');
            return;
        }

        fetch(`https://api.genderize.io/?name=${name}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGender(data.gender);
                Alert.alert(data.gender);
            })
    }

    return (
        <SafeAreaView>
            <View>
                <Text>
                    Gender
                </Text>
            </View>

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
        </SafeAreaView>
    )
}

export default Gender;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

});
