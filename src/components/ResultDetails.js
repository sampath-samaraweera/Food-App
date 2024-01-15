import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultDetails = ( { result }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.details}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        alignItems: 'flex-start',
    },
    image:{
        width: 230,
        height: 120,
        borderRadius: 5,
        marginBottom: 3,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    details:{
        color: '#555',
    },

});

export default ResultDetails;