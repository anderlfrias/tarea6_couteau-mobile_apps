import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView, Button, StyleSheet, VirtualizedList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import useUtils from '../hook/useUtils';

const University = () => {
    const { countries } = useUtils();
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
                <Text style={styles.universityDomain}>
                    Dominio:
                    <Text style={{fontWeight: 'bold'}}> {item.domain}</Text>
                </Text>
                <Text style={styles.universityWebPage}>
                    Pagina Web:
                    <Text style={{fontWeight: 'bold'}}> {item.web_pages}</Text>
                </Text>
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

                    <View style={{marginTop: 20}}>
                        <Text style={styles.subtitle}>
                            Resultados
                        </Text>
                        {
                            universities.length > 0 ?
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
                            :
                                <Text style={styles.noResults}>
                                    No hay resultados
                                </Text>
                        }
                    </View>
                </View>

                {/* <View style={styles.card}>
                </View> */}
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
    subtitle: {
        fontSize: 20,
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
    },
    universityDomain: {
        fontSize: 15,
    },
    universityWebPage: {
        fontSize: 15,
    },
    noResults: {
        fontSize: 15,
        textAlign: 'center',
        color: '#ccc',
    }
})