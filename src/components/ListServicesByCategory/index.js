import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { ServiceItem } from '../ServiceItem'
import theme from './../../styles/theme'

export const ListServicesByCategory = ({ title = 'Servicios', services, categoryId, navigation, slice = undefined }) => {
  if (services.length === 0) {
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.subheading, marginTop: 10 }}> 🔍 No se encontraron servicios</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={services.filter(service => service.category.id === categoryId).slice(0, slice)}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.push('Service', { service: item, services })}>
            <View style={{ marginTop: 10, marginLeft: index > 0 ? 15 : 0 }}>
              <ServiceItem
                id={item.id}
                avatar={item.user.avatar}
                name={item.name}
                owner={`${item.user.name} ${item.user.lastName}`}
                category={item.category}
                description={item.description}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    /* paddingVertical: 10 */
    marginTop: 5
  },
  title: {
    ...theme.common.title,
    fontSize: theme.fontSizes.title,
    color: theme.colors.white,
    marginTop: 10
    /* marginBottom: -20 */
  }
})
