import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen  = ( { route }) => {
    const [result,setResult] = useState(null);
    // const id = navigation.getParam('id');
    const { id } = route.params;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photos) => photos}
                renderItem={({item}) => {
                    return (
                        <Image 
                            style={styles.image}
                            source={{ uri: item}}
                        />
                    )
                }}
            />
        </View>
  
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        alignItems: 'flex-start',
    },
    title: {
        marginVertical: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    image:{
        width: 300,
        height: 150,
        borderRadius: 5,
        marginBottom: 3,
    },

});

export default DetailsScreen;