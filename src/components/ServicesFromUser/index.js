import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ServiceItem } from '../ServiceItem'
import theme from './../../styles/theme'
import { ListOfServices } from '../ListOfServices/index'

export const ServicesFromUser = ({ title = 'Servicios', services = [], userId, service, navigation, slice = undefined }) => {
  const serviceId = service.id
  const filteredServices = services.filter((service) => (service.user.id === userId) && service.id !== serviceId)

  if (filteredServices.length === 0) {
    return (
      <ListOfServices
        services={services}
        navigation={navigation}
        title='Servicios similares'
        categoryId={service?.category?.id}
        selectedService={serviceId}
        slice={3}
      />
    )
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
    marginTop: 5
  },
  title: {
    ...theme.common.title,
    fontSize: theme.fontSizes.bigTitle,
    color: theme.colors.white,
    marginTop: 10
  }
})
