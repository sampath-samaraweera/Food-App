import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';

const ResultList = ( { title, results, navigation }) => {
    
    if (!results.length) {
        return null;
    };

    return(
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={ ({ item }) =>{
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id }) }>
                            <ResultDetails result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
  
    );
}

const styles = StyleSheet.create({
    titleStyle: {        
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 22,
        fontWeight: 'bold',
    }

});

export default ResultList;