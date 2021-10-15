import React from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import { CategoryItem } from './../components/CategoryItem/index'
import { categoryIcons } from '../data/categories'
import theme from './../styles/theme'
import { useCategories } from '../hooks/useCategories'
import { AppLayout } from './../components/Layout/AppLayout/index'

export const Categories = ({ navigation }) => {
  const { loading, categories } = useCategories()

  if (loading) return <Text>'Cargando...'</Text>

  return (
    <AppLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>Todas las categorias</Text>
          <View style={styles.listContainer}>
            {categories.map((category) => {
              return (
                <TouchableOpacity key={category.id} onPress={() => navigation.navigate('Category', { category })}>
                  <CategoryItem
                    name={category.name}
                    color={category.colorRGBA}
                    id={category.id}
                    icon={categoryIcons[category.icon]}
                    key={category.id}
                  />
                </TouchableOpacity>
              )
            })}
          </View>
          <View style={{ marginTop: 40 }}>
            <View style={styles.card}>
              <Text style={{ ...styles.title, color: theme.colors.background }}>¿Te gusta nuestra app?</Text>
              <Text style={{ ...styles.title, color: theme.colors.background }}>¿Tienes alguna sugerencia?</Text>
              <Text>Envíanos un correo a <Text style={{ color: theme.colors.primary }}>appservicios@gmail.com</Text></Text>
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
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexCenter: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...theme.common.title,
    fontSize: theme.fontSizes.bigTitle,
    color: theme.colors.white,
    marginBottom: 10
  },
  card: {
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    ...theme.common.shadowProp
  }
})
