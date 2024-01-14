import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather} from '@expo/vector-icons';

const SearchBar = ( { term,onTermChange,onTermSubmit }) => {
    return(
        <View style={styles.bg}>
            <Feather name='search' style={styles.icon}/>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.text}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            /> 
        </View>
  
    );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor: '#ddd',
        height: 40,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        alignItems:'stretch',
    },
    icon:{
        fontSize: 28,
        alignSelf: 'center',
        marginLeft: 8,
    },
    text: {
        marginHorizontal: 6,
        fontSize: 20,
        alignSelf: 'center',
        flex: 1,
    }

});

export default SearchBar;