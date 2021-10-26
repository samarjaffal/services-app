import React from 'react'
import { View, Text, StyleSheet, Linking, TouchableWithoutFeedback } from 'react-native'
import { AppLayout } from '../components/Layout/AppLayout'
import { CallSVG } from '../components/Icons/CallSVG'
import { EmailSVG } from '../components/Icons/EmailSVG'
import { ArrowRightSVG } from '../components/Icons/ArrowRightSVG'
import { EmailGuySVG } from '../components/Icons/EmailGuySVG'
import { WhatsappSVG } from '../components/Icons/WhatsappSVG'
import { callNumber } from '../components/utils/callNumber'
import theme from '../styles/theme'

const defaultWhatsappMessage = '👋 Hola, te he encontrado desde la app de Wunderhod y me gustaría contratar tus servicios. '

export const ServiceOptions = ({ navigation }) => {
  const service = navigation.getParam('service')
  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.title}>¿Dónde desea recibir la información?</Text>
        <View style={{ marginTop: 15 }}>
          <View style={styles.card}>
            <TouchableWithoutFeedback onPress={() => callNumber(service?.user?.phone)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={theme.common.flexRow}>
                  <View style={styles.iconBackground}>
                    <CallSVG fill={theme.colors.white} />
                  </View>
                  <Text style={{ marginLeft: 12 }}>Llamada directa</Text>
                </View>
                <ArrowRightSVG fill={theme.colors.primary} />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.hr} />
            <TouchableWithoutFeedback onPress={() => Linking.openURL(`whatsapp://send?text=${defaultWhatsappMessage}&phone=${service?.user?.phone}`)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={theme.common.flexRow}>
                  <View style={styles.iconBackground}>
                    <WhatsappSVG fill={theme.colors.white} />
                  </View>
                  <Text style={{ marginLeft: 12 }}>Enviar mensaje por Whatsapp</Text>
                </View>
                <ArrowRightSVG fill={theme.colors.primary} />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.hr} />
            <TouchableWithoutFeedback onPress={() => navigation.navigate('FillEmail', { service })}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={theme.common.flexRow}>
                  <View style={styles.iconBackground}>
                    <EmailSVG fill={theme.colors.white} />
                  </View>
                  <Text style={{ marginLeft: 12 }}>Recibir información por correo</Text>
                </View>
                <ArrowRightSVG fill={theme.colors.primary} />
              </View>
            </TouchableWithoutFeedback>
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
