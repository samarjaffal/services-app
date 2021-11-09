import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { useCategoryId } from '../hooks/useCategoryId'
import { ListOfServices } from './../components/ListOfServices/index'
import { CategoryItem } from '../components/CategoryItem'
import { categoryIcons } from '../data/categories'
import { AppLayout } from '../components/Layout/AppLayout'

export const Category = ({ navigation }) => {
  const category = navigation.getParam('category')
  const services = navigation.getParam('services')
  return (
    <AppLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{ marginTop: 5 }}>
            <CategoryItem
              showNameAsTitle
              name={category?.name}
              color={category?.colorRGBA}
              id={category?.id}
              icon={categoryIcons[category?.icon]}
              key={category?.id}
            />
            <View style={{ marginVertical: -30, marginBottom: 0 }}>
              <ListOfServices navigation={navigation} title='' categoryId={category.id} services={services} />
            </View>

          </View>
        </View>
      </ScrollView>
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})
