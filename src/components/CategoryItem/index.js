import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../../styles/theme'

export const CategoryItem = ({ id, name, color, icon, showNameAsTitle, size = 65 }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.category, width: size, height: size, backgroundColor: color, borderRadius: 10 }}>
        {icon || <Text> </Text>}
      </View>
      <Text numberOfLines={1} style={showNameAsTitle ? styles.title : styles.categoryName}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65,
    borderRadius: 20
  },
  categoryName: {
    marginTop: 5,
    fontSize: theme.fontSizes.small,
    maxWidth: 90,
    width: '100%',
    textAlign: 'center',
    color: theme.colors.white
  },
  title: {
    ...theme.common.title,
    fontSize: theme.fontSizes.bigTitle,
    color: theme.colors.white,
    marginBottom: 10,
    marginTop: 10
  }
})
