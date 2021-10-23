import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { ServiceItem } from '../ServiceItem'
import { Link } from 'react-router-native'
import theme from './../../styles/theme'
import { useServices } from '../../hooks/useServices'

export const ListOfServices = ({ title = 'Servicios', categoryId, filterByName, selectedService, navigation }) => {
  const { loading, services } = useServices({ categoryId, filterByName, selectedService })

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
      {
          services.map((service, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Service', { service })}>
              <View style={{ marginTop: 20 }}>
                <ServiceItem
                  id={service.id}
                  avatar={service.user.avatar}
                  name={service.name}
                  owner={`${service.user.name} ${service.user.lastName}`}
                  category={service.category}
                  description={service.description}
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
