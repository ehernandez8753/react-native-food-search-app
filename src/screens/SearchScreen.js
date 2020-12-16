import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import useYelpResults from '../hooks/useYelpResults.js'

import { StyleConstants } from '../constants/StyleConstants'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchApi, results, errorMessage] = useYelpResults()

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$' || '$$$$'
    return results.filter(result => {
      return result.price === price
    })
  }

  return <View style={styles.container}>
    <SearchBar 
      searchTerm={searchTerm}
      onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)} 
      onSearchTermSubmit={() => searchApi(searchTerm)}
    />
    <Text style={styles.searchSubText}>Found {results.length} results</Text>
    {errorMessage ? <Text style={styles.searchSubText}>{errorMessage}</Text> : null}
    <ScrollView showsVerticalScrollIndicator={false}>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Feeling Picky' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Getting Pricey' />
      <ResultsList results={filterResultsByPrice('$$$$')} title='Big Spender' />
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: StyleConstants.Spacing.Large,
    flex: 1,
  },
  searchSubText: {
    marginVertical: StyleConstants.Spacing.XSmall,
    color: 'grey'
  },
})

export default SearchScreen