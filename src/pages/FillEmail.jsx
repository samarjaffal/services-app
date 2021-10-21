import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { AppLayout } from '../components/Layout/AppLayout'
import { EmailSVG } from '../components/Icons/EmailSVG'
import { Button } from '../components/common/Button'
import { ServiceOverview } from './../components/ServiceOverview/index'
import { useSendEmail } from '../hooks/useSendEmail'
import { newServiceClient } from './../emails/DataTemplates/newServiceClient'
import { newServiceProvider } from '../emails/DataTemplates/newServiceProvider'
import theme from '../styles/theme'

export const FillEmail = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const service = navigation.getParam('service')
  const emailProvider = service.user.email
  const emailData = newServiceClient({ service, emailTo: email })

  const emailDataProvider = newServiceProvider({ service, emailTo: emailProvider })
  const sendEmailClient = useSendEmail({ emailData })
  const sendEmailProvider = useSendEmail({ emailData: emailDataProvider })

  const sendEmails = async () => {
    await sendEmailClient.sendEmail()
    await sendEmailProvider.sendEmail()
    navigation.navigate('SuccessEmailSent')
  }

  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Por favor, ingresa tu correo</Text>
        <View style={{ marginTop: 15 }}>
          <View style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={theme.common.flexRow}>
                <View style={styles.iconBackground}>
                  <EmailSVG fill={theme.colors.white} />
                </View>
                <Text style={{ marginLeft: 12 }}>Email</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder='Correo electrónico'
              onChangeText={text => setEmail(text)}
              defaultValue={email}
            />
            <View style={{ marginTop: 30 }}>
              <Button text={!sendEmailClient.loading ? 'Solicitar Servicio' : 'Cargando...'} color={theme.colors.primary} onClick={sendEmails} />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.title}>Servicio seleccionado:</Text>
          <View style={{ marginTop: 15 }}>
            <ServiceOverview
              id={service.id}
              name={service.name}
              avatar={service.user.avatar}
              category={service.category}
              owner={`${service?.user?.name} ${service?.user?.lastName}`}
            />
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
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 20
  }
})
