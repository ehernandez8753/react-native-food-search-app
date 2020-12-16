import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { StyleConstants } from '../constants/StyleConstants'

const ResultsDetail = ({ result }) => {
  return <View style={styles.container}>
    <Image source={{ uri: result.image_url }} style={styles.image}/>
    <Text style={styles.resultNameText}>{result.name}</Text>
    <Text style={styles.resultSubText}>{result.rating} Stars, {result.review_count} Reviews</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginRight: StyleConstants.Spacing.Small,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 2,
    marginBottom: StyleConstants.Spacing.XSmall,
  },
  resultNameText: {
    fontWeight: 'bold',
    fontSize: StyleConstants.FontSize.Small,
  },
  resultSubText: {
    color: 'grey',
  },
})

export default ResultsDetail