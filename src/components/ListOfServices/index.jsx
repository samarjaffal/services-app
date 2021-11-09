import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { ServiceItem } from '../ServiceItem'
import { Link } from 'react-router-native'
import theme from './../../styles/theme'
import { useServices } from '../../hooks/useServices'

export const ListOfServices = ({ title = 'Servicios', services, categoryId, filterByName, selectedService, navigation, slice = undefined }) => {
  let filteredServices = services

  if (categoryId) {
    filteredServices = services.filter((service) => service.category.id === categoryId && service.id !== selectedService)
  }

  if (filterByName) {
    filteredServices = services.filter((service) => service.name.toLowerCase().includes(filterByName.toLowerCase()))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {
          filteredServices.slice(0, slice).map((service, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.push('Service', { service, services })}>
              <View style={{ marginTop: 20 }}>
                <ServiceItem
                  id={service.id}
                  avatar={service.user.avatar}
                  name={service.name}
                  owner={`${service.user.name} ${service.user.lastName}`}
                  category={service.category}
                  description={service.description}
                  size='auto'
                />
              </View>
            </TouchableOpacity>
          ))
      }
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
    fontSize: theme.fontSizes.bigTitle,
    color: theme.colors.white,
    marginTop: 10
    /* marginBottom: -20 */
  }
})
