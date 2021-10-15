import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import theme from '../../styles/theme'
import { Button } from '../common/Button'

export const ServiceItem = ({ id, name, avatar, owner, description, category }) => {
  return (
    <View key={id} style={styles.card}>
      <View style={styles.flexRow}>
        <View>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.service}>{name}</Text>
          <Text>{owner}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.cardBottom}>
        <Text style={{ color: category.colorHex, fontWeight: '500' }}>{category.name}</Text>
        <Button text='Contactar' color={category.colorHex} />
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
  flexRow: {
    flexDirection: 'row'
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    color: theme.colors.background
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  service: {
    color: theme.colors.background,
    fontWeight: 'bold'
  },
  description: {
    color: theme.colors.background,
    paddingVertical: 10
  }
})
