import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AppLayout } from '../components/Layout/AppLayout'
import { SuccessSVG } from './../components/Icons/SuccessSVG/index'
import theme from '../styles/theme'

export const SuccessEmailSent = ({ navigation }) => {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.title}>¡Hemos enviado la información con éxito!</Text>
        <View style={{ alignItems: 'center' }}>
          <SuccessSVG />
          <View>
            <Text style={styles.paragraph}>Debe esperar pacientemente la información
              que llegara por el método anteriormente seleccionado.
            </Text>
          </View>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: -10, left: 0, right: 0 }}>
        <View style={styles.card}>
          <Text style={styles.subtitle}>
            Ante cualquier inconveniente, puedes enviarnos un correo a:
          </Text>
          <Text style={styles.emailText}>appservicios@gmail.com</Text>
        </View>
      </View>
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  subtitle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.background,
    textAlign: 'center'
  },
  emailText: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 20
  }
})
