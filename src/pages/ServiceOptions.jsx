import React from 'react'
import { View, Text, StyleSheet, Linking, Platform, Alert, TouchableNativeFeedback } from 'react-native'
import { AppLayout } from '../components/Layout/AppLayout'
import { CallSVG } from '../components/Icons/CallSVG'
import { EmailSVG } from '../components/Icons/EmailSVG'
import { ArrowRightSVG } from '../components/Icons/ArrowRightSVG'
import { EmailGuySVG } from '../components/Icons/EmailGuySVG'
import theme from '../styles/theme'

const callNumber = phone => {
  // console.log('callNumber ----> ', phone)
  let phoneNumber = phone
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`
  } else {
    phoneNumber = `tel:${phone}`
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available')
      } else {
        return Linking.openURL(phoneNumber)
      }
    })
    .catch(err => console.log(err))
}

export const ServiceOptions = ({ navigation }) => {
  const service = navigation.getParam('service')
  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.title}>¿Dónde desea recibir la información?</Text>
        <View style={{ marginTop: 15 }}>
          <View style={styles.card}>
            <TouchableNativeFeedback onPress={() => callNumber(service?.user?.phone)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={theme.common.flexRow}>
                  <View style={styles.iconBackground}>
                    <CallSVG fill={theme.colors.white} />
                  </View>
                  <Text style={{ marginLeft: 12 }}>Llamada directa</Text>
                </View>
                <ArrowRightSVG fill={theme.colors.primary} />
              </View>
            </TouchableNativeFeedback>
            <View style={styles.hr} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={theme.common.flexRow}>
                <View style={styles.iconBackground}>
                  <EmailSVG fill={theme.colors.white} />
                </View>
                <Text style={{ marginLeft: 12 }}>Email</Text>
              </View>
              <ArrowRightSVG fill={theme.colors.primary} />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40, alignItems: 'center' }}>
          <EmailGuySVG />
          <View>
            <Text style={styles.paragraph}>Reciba los datos del servicio por cualqueira de nuestros canales.
            </Text>
          </View>
        </View>
      </View>
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  title: {
    ...theme.common.title,
    fontSize: theme.fontSizes.title,
    color: theme.colors.white,
    marginTop: 10
  },

  paragraph: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.white,
    textAlign: 'center',
    marginTop: 10
  },

  card: {
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 10,
    ...theme.common.shadowProp
  },
  hr: {
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 1,
    marginVertical: 10
  },
  iconBackground: {
    backgroundColor: theme.colors.secondary,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
