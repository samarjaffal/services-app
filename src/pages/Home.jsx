import React from 'react'
import { View, ScrollView } from 'react-native'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfServices } from '../components/ListOfServices'
import { AppLayout } from '../components/Layout/AppLayout'

export const Home = ({ navigation }) => {
  return (
    <AppLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListOfCategories navigation={navigation} />
        <ListOfServices navigation={navigation} title='Servicios recientes' />
      </ScrollView>
    </AppLayout>

  )
}
