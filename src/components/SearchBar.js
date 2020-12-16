import React from 'react'
import {View, TextInput, StyleSheet } from 'react-native'

import { StyleConstants } from '../constants/StyleConstants'
import { FontAwesome } from '@expo/vector-icons'

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
  return <View style={styles.component}>
    <FontAwesome name="search" size={30} />
    <TextInput 
      autoCapitalize='none'
      autoCorrect={false}
      placeholder="Search"
      style={styles.inputStyle}
      value={searchTerm}
      onChangeText={(newSearchTerm) => onSearchTermChange(newSearchTerm)}
      onEndEditing={() => onSearchTermSubmit()}
    />
  </View>
}

const styles = StyleSheet.create({
  component: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    padding: StyleConstants.Spacing.XSmall,
    borderRadius: 4,
  },
  iconStyle: {
    fontSize: StyleConstants.FontSize.Huge,
  },
  inputStyle: {
    fontSize: StyleConstants.Spacing.Medium,
    // flex: 1 tells component to fill available area
    flex: 1,
    marginLeft: StyleConstants.Spacing.XSmall,
  }
})

export default SearchBar