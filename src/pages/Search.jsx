import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { ListOfServices } from '../components/ListOfServices/index'

export const Search = ({ match }) => {
  const searchkey = match.params.key

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ListOfServices title='Resultados de busqueda' filterByName={searchkey} />
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})
