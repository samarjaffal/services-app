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

      <View style={{
        width: 'auto',
        height: 67,
        backgroundColor: service?.category?.colorRGBA,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        flex: 1
      }}
      />
      <Text style={{ color: theme.colors.white, textAlign: 'right' }}>
        {service?.category?.name}
      </Text>
      <Image
        style={styles.avatar}
        source={{ uri: service?.user?.avatar }}
      />

      <Text style={styles.owner}>{owner}</Text>
      <Text style={styles.service}>{service?.name}</Text>
      <Text style={styles.location}>Margarita, Pampatar.</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.information}>Información</Text>
          <Text style={styles.description}>
            {service?.description}
          </Text>
        </View>

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
                      // justifyContent: 'space-between',
                      flexWrap: 'wrap'
                    }}
                  >
                    {socialMedia.map(
                      (s, index) =>
                        service?.user[s.keyName] && (
                          <TouchableOpacity
                            style={{
                              // flexBasis: '48%',
                              marginLeft: index > 0 ? 10 : 0,
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
                              {/* <Text
                                style={{
                                  color: theme.colors.white,
                                  fontWeight: theme.fontWeights.bold,
                                  marginLeft: 10,
                                  textAlign: 'center'
                                }}
                              >
                                {s.name}
                              </Text> */}
                            </View>
                          </TouchableOpacity>
                        )
                    )}
                  </View>
                </>
        )}

        <View style={{ marginTop: 20 }}>
          <Button
            text='Contáctame'
            color={service?.category?.colorHex}
            textColor={theme.colors.white}
            onClick={() =>
              navigation.navigate('ServiceOptions', { service })}
          />
        </View>

        <View style={styles.hr} />

        <View style={{ paddingBottom: 10 }}>
          <ListOfServices
            navigation={navigation}
            title={`Más servicios de ${service?.user.name}`}
            categoryId={service?.category?.id}
            selectedService={service?.id}
            slice={3}
          />
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
    borderRadius: 10,
    top: -15
  },
  service: {
    color: theme.colors.white,
    marginBottom: 15,
    fontSize: theme.fontSizes.title,
    fontWeight: '500'
  },
  location: {
    color: theme.colors.white,
    opacity: 0.8,
    fontWeight: 'bold',
    marginTop: -10,
    paddingBottom: 20
  },
  description: {
    color: theme.colors.white,
    fontWeight: '500',
    fontSize: theme.fontSizes.subtitle
  },
  owner: {
    fontSize: theme.fontSizes.bigTitle,
    fontWeight: 'bold',
    color: theme.colors.white
  },
  information: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.title,
    color: theme.colors.white,
    marginBottom: 10
  },
  textMessage: {
    fontSize: theme.fontSizes.small,
    color: '#C2C2C2'
  },
  hr: {
    borderBottomColor: theme.colors.white,
    borderBottomWidth: 1,
    marginTop: 30,
    marginBottom: 20,
    opacity: 0.5
  }
})
