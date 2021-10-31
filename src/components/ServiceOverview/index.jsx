import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import theme from '../../styles/theme'

export const ServiceOverview = ({ id, name, avatar, owner, category }) => {
  return (
    <View key={id} style={styles.card}>
      <Text style={{ color: category?.colorHex }}>
        {category?.name}
      </Text>
      <View style={{ ...styles.flexCenter, marginTop: 10 }}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
        <Text style={{ ...styles.owner, marginTop: 8 }}>{owner}</Text>
        <Text style={styles.service}>{name}</Text>
      </View>

      <View style={{ ...styles.flexCenter, marginTop: 20 }}>
        <Text style={styles.information}>Ubicación</Text>
        <Text style={styles.description}>Margarita</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 20,
    ...theme.common.shadowProp
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  service: {
    color: theme.colors.background,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  flexCenter: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
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
  description: {
    paddingVertical: 8,
    color: theme.colors.background
  }
})
