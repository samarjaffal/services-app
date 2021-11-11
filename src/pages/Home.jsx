import React from 'react'
import { ActivityIndicator, ScrollView, View, StyleSheet } from 'react-native'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListServicesByCategory } from '../components/ListServicesByCategory'
import { AppLayout } from '../components/Layout/AppLayout'
import { useServices } from '../hooks/useServices'
import { useCategories } from '../hooks/useCategories'
import theme from '../styles/theme'

export const Home = ({ navigation }) => {
  const { loading, services } = useServices({})
  const { loading: loadingCategories, categories } = useCategories()

  if (loading || loadingCategories) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#172A3A'
      }}
      >
        <ActivityIndicator size='small' color='#0000ff' />
      </View>
    )
  }

  const lifeStyleCategory = categories.find(category => category.name === 'Estilo de vida')?.id
  const healthCategory = categories.find(category => category.name === 'Salud')?.id
  const beautyCategory = categories.find(category => category.name === 'Belleza')?.id
  const techCategory = categories.find(category => category.name === 'Tecnología')?.id

  return (
    <AppLayout paddingHorizontal={0}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20 }}>
          <ListOfCategories navigation={navigation} categories={categories} services={services} />
        </View>
        {/* <ListOfServices navigation={navigation} title='Servicios recientes' slice={6} /> */}

        <View style={{ paddingLeft: 20 }}>
          <ListServicesByCategory title='Para tu día a día' navigation={navigation} services={services} slice={5} categoryId={lifeStyleCategory} />

          <ListServicesByCategory title='Porque nos interesa tu salud' navigation={navigation} services={services} slice={5} categoryId={healthCategory} />

          <ListServicesByCategory title='¡Dedica tiempo para ti!' navigation={navigation} services={services} slice={5} categoryId={beautyCategory} />

          <ListServicesByCategory title='¿Buscas ayuda con tu proyecto de tecnología?' navigation={navigation} services={services} slice={5} categoryId={techCategory} />
        </View>

      </ScrollView>
    </AppLayout>

  )
}

const styles = StyleSheet.create({
  title: {
    ...theme.common.title,
    fontSize: theme.fontSizes.bigTitle,
    color: theme.colors.white,
    marginHorizontal: 10
  }
})
