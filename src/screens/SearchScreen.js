import React,{ useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ( {navigation} ) => {
    const [term,setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }
    return(
        <View style={{ flex:1}}>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text style={styles.errorMsg}>{errorMessage}</Text> : null}
            <Text style={styles.result}>We have found {results.length} results.</Text>
            <ScrollView>
                <ResultList title='Cost Effective' results={filterResultByPrice('$')} navigation={navigation}/>
                <ResultList title='Bit Pricier' results={filterResultByPrice('$$')} navigation={navigation}/>
                <ResultList title='Big Spender' results={filterResultByPrice('$$$')} navigation={navigation}/>
            </ScrollView>

        </View>  
    );
}

const styles = StyleSheet.create({
    result:{
        marginLeft: 15,
    },
    errorMsg:{
        marginLeft: 15,
        color: 'red',
    }

});

export default SearchScreen;