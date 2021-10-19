import { AppLayout } from '../components/Layout/AppLayout'
import { Button } from '../components/common/Button'
import { ListOfServices } from './../components/ListOfServices/index'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import theme from './../styles/theme'

export const Service = ({ navigation }) => {
  const service = navigation.getParam('service')
  const owner = `${service?.user?.name} ${service?.user?.lastName}`
  return (
    <AppLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={{ color: service?.category?.hexColor }}>
              {service?.category?.name}
            </Text>
            <View style={{ ...styles.flexCenter, marginTop: 20 }}>
              <Image
                style={styles.avatar}
                source={{ uri: service?.user?.avatar }}
              />
              <Text style={{ ...styles.owner, marginTop: 8 }}>{owner}</Text>
              <Text style={styles.service}>{service?.name}</Text>
            </View>
            <View>
              <Text style={styles.information}>Información</Text>
              <Text style={styles.description}>{service?.description}</Text>
            </View>

            <View>
              <Text style={styles.information}>Ubicación</Text>
              <Text style={styles.description}>Margarita, Pampatar.</Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.textMessage}>
                Al solicitar el servicio, recibirás un correo electrónico con los
                datos de contacto.
              </Text>
              <View style={{ marginTop: 10 }}>
                <Button
                  text='Solicitar Servicio'
                  color={service?.category?.hexColor}
                  onClick={() => navigation.navigate('ServiceOptions', { service })}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <ListOfServices
              navigation={navigation}
              title='Otros servicios similares'
              categoryId={service?.category?.id}
            />
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  card: {
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 20
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexCenter: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  service: {
    fontWeight: '500',
    color: theme.colors.background
  },
  description: {
    paddingVertical: 8,
    color: theme.colors.background
  },
  owner: {
    fontSize: theme.fontSizes.title,
    fontWeight: 'bold',
    color: theme.colors.background
  },
  information: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.body,
    color: theme.colors.background
  },
  textMessage: {
    fontSize: theme.fontSizes.small,
    color: '#C2C2C2'
  }
})
