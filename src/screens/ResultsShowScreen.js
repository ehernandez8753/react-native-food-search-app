import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

import { StyleConstants } from '../constants/StyleConstants'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')
  const resultCategoryNames = result ? result.categories.map((category) => category.title + ' ') : null
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if(!result){
    return null
  }

  return <View style={styles.container}>
    <FlatList 
      data={result.photos}
      horizontal={true}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => {
        return <Image source={{ uri: item }} style={styles.image}/>
      }}
      showsHorizontalScrollIndicator={false}
    />
    <Text style={styles.resultNameText}>{result.name}</Text>
    <Text style={styles.resultSubText}>{result.rating} Stars, {result.review_count} Reviews</Text>
    <Text style={styles.resultBasicInfoText}>{resultCategoryNames}</Text>
    <Text style={styles.resultBasicInfoText}>{result.location.display_address[0] + '\n' + result.location.display_address[1]}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: StyleConstants.Spacing.Large,
  },
  image: {
    height: 200,
    width: 250,
    borderRadius: 2,
    marginRight: StyleConstants.Spacing.Small,
    marginBottom: StyleConstants.Spacing.XSmall,
  },
  resultNameText: {
    fontWeight: 'bold',
    fontSize: StyleConstants.FontSize.Medium,
  },
  resultSubText: {
    color: 'grey',
  },
  resultBasicInfoText: {
    fontSize: StyleConstants.FontSize.Small,
  }
})

export default ResultsShowScreen