import { CategoryItem } from '../CategoryItem'
import { ActivityIndicator, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from '../common/Button'
import { categoryIcons } from '../../data/categories'
import React from 'react'
import theme from './../../styles/theme'
import { useCategories } from './../../hooks/useCategories'

export const ListOfCategories = ({ navigation }) => {
  const { loading, categories } = useCategories()

  if (loading) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
      }}
      ><ActivityIndicator size='small' color='#0000ff' />
      </View>
    )
  }

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Categorias</Text>
        <Button text='Ver más...' color={theme.colors.primary} textColor={theme.colors.white} onClick={() => navigation.navigate('Categories')} />
      </View>

      <View style={styles.listContainer}>
        {categories.slice(0, 4).map((category) => {
          return (
            <TouchableOpacity key={category.id} onPress={() => navigation.navigate('Category', { category })}>
              <CategoryItem
                name={category.name}
                color={category.colorRGBA}
                id={category.id}
                icon={categoryIcons[category.icon]}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    ...theme.common.title,
    fontSize: theme.fontSizes.bigTitle,
    color: theme.colors.white,
    marginBottom: 10
  }
})
