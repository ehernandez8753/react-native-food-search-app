import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import { StyleConstants } from '../constants/StyleConstants'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ navigation, results, title }) => {
  if(!results.length){
    return null
  }

  return <View style={styles.container}>
    <Text style={styles.titleText}>{title}</Text>
    <FlatList 
      data={results}
      horizontal={true}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )
      }}
      showsHorizontalScrollIndicator={false}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginVertical: StyleConstants.Spacing.XSmall,
  },
  titleText: {
    fontSize: StyleConstants.FontSize.Large,
    fontWeight: 'bold',
    marginBottom: StyleConstants.Spacing.XSmall,
  }
})

export default withNavigation(ResultsList)