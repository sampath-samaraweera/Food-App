import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(searchTerm)}
            />
            { errorMessage ? <Text style={styles.errorMsg}>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>
        </View>  
    );
}

const styles = StyleSheet.create({
    errorMsg:{
        color: 'red',
    }

});

export default SearchScreen;