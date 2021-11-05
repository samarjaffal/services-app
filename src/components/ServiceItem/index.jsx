import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import theme from '../../styles/theme'
import { Button } from '../common/Button'

export const ServiceItem = ({ id, name, avatar, owner, description, category }) => {
  return (
    <View key={id} style={styles.card}>
      <View style={{ position: 'absolute', right: 10, bottom: 10 }}>
        <Text style={{ color: category.colorHex, fontWeight: '500' }}>{category.name}</Text>
      </View>
      <View style={{ ...styles.flexRow, alignItems: 'center' }}>
        <View>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </View>
        <View style={{ marginLeft: 10, paddingRight: 10 }}>
          <Text style={styles.service} numberOfLines={1}>{name}</Text>
          <Text>{owner}</Text>
        </View>
      </View>
      {/* <Text style={styles.description}>{description}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 10,
    ...theme.common.shadowProp
  },
  flexRow: {
    flexDirection: 'row',
    maxWidth: '80%'
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
