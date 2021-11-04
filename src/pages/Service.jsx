import { AppLayout } from '../components/Layout/AppLayout'
import { Button } from '../components/common/Button'
import { ListOfServices } from './../components/ListOfServices/index'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native'
import React from 'react'
import theme from './../styles/theme'
import { InstagramSVG } from '../components/Icons/InstagramSVG'
import { FacebookSVG } from '../components/Icons/FacebookSVG'
import { WebSVG } from '../components/Icons/WebSVG'

const socialMedia = [
  {
    keyName: 'instagram',
    name: 'Instagram',
    color: '#D8336D',
    icon: <InstagramSVG fill={theme.colors.white} />
  },
  {
    keyName: 'facebook',
    name: 'Facebook',
    color: '#5744FF',
    icon: <FacebookSVG fill={theme.colors.white} />
  },
  {
    keyName: 'web',
    name: 'Web',
    color: '#2BDC94',
    icon: <WebSVG fill={theme.colors.white} />
  }
]

export const Service = ({ navigation }) => {
  const service = navigation.getParam('service')
  const owner = `${service?.user?.name} ${service?.user?.lastName}`
  return (
    <AppLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={{ color: service?.category?.colorHex }}>
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

            {/* Social medial */}
            {(service.user.instagram ||
              service.user.facebook ||
              service.user.web) && (
                <>
                  <Text style={{ ...styles.information, marginTop: 10 }}>
                    Visita mis redes sociales:
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap'
                    }}
                  >
                    {socialMedia.map(
                      (s, index) =>
                        service?.user[s.keyName] && (
                          <TouchableOpacity
                            style={{
                              flexBasis: '48%',
                              marginTop: 10,
                              padding: 10,
                              backgroundColor: s.color,
                              borderRadius: theme.borderRadius.secondary,
                              alignSelf: 'flex-start'
                            }}
                            key={index}
                            onPress={() =>
                              Linking.openURL(service?.user[s.keyName])}
                          >
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                              }}
                            >
                              {s.icon}
                              <Text
                                style={{
                                  color: theme.colors.white,
                                  fontWeight: theme.fontWeights.bold,
                                  marginLeft: 10,
                                  textAlign: 'center'
                                }}
                              >
                                {s.name}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        )
                    )}
                  </View>
                </>
            )}

            <View style={{ marginTop: 20 }}>
              {/* <Text style={styles.textMessage}>
                Al solicitar el servicio, recibirás un correo electrónico con los
                datos de contacto.
              </Text> */}
              <View style={{ marginTop: 10 }}>
                <Button
                  text='Solicitar Servicio'
                  color={service?.category?.colorHex}
                  onClick={() =>
                    navigation.navigate('ServiceOptions', { service })}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <ListOfServices
              navigation={navigation}
              title='Otros servicios similares'
              categoryId={service?.category?.id}
              selectedService={service?.id}
              slice={3}
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
    width: 120,
    height: 120,
    borderRadius: 10
  },
  service: {
    color: theme.colors.background,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
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
