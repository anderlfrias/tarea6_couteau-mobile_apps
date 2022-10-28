import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView, Button, StyleSheet, VirtualizedList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import useUtils from '../hook/useUtils';

const University = () => {
    const { countries } = useUtils();
    const [university, setUniversity] = useState('');
    const [universities, setUniversities] = useState([]);
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState(null);


    const onPressSearch = () => {
        fetch(`http://universities.hipolabs.com/search?country=${country}`)
            .then(response => response.json())
            .then(data => {
                setUniversities(data);
            })
    }

    const renderUniversity = ({item, index}) => {
        return (
            <View key={index} style={styles.university}>
                <Text style={styles.universityName}>{item.title}</Text>
                <Text style={styles.universityDomain}>{item.domain}</Text>
                <Text style={styles.universityWebPage}>{item.web_pages}</Text>
            </View>
        )
    }

    const getItem = (data, index) => {
        return {
            id: Math.random().toString(12).substring(0),
            title: data[index].title,
            domain: data[index].domain,
            web_pages: data[index].web_pages,
        };
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Universidades
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text>
                        Seleccione un país
                    </Text>
                    <DropDownPicker
                        style={styles.dropdown}
                        open={open}
                        value={country}
                        items={countries}
                        setOpen={setOpen}
                        setValue={setCountry}
                        searchable={true}
                    />

                    <Button
                        title="Buscar"
                        color="#841584"
                        onPress={onPressSearch}
                    />
                </View>

                <View style={styles.card}>
                <VirtualizedList
                    data={
                        universities.map((university, index) => {
                            return {
                                id: Math.random().toString(12).substring(0),
                                title: university.name,
                                domain: university.domains[0],
                                web_pages: university.web_pages[0],
                            };
                        })
                    }
                    renderItem={renderUniversity}
                    keyExtractor={item => item.name}
                    getItemCount={universities => universities.length}
                    getItem={getItem}
                />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default University;

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    card: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '90%',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    dropdown: {
        marginBottom: 20,
        marginTop: 10,
    },
    university: {
        padding: 10,
        width: '100%',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    universityName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    universityDomain: {
        fontSize: 15,
        textAlign: 'center',
    },
    universityWebPage: {
        fontSize: 15,
        textAlign: 'center',
    },
})