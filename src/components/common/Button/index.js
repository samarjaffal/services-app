import React from 'react'
import { StyleSheet, Text, Pressable, Alert } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5271FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  buttonText: {
    color: '#fff'
  }
})

export const Button = ({ color, text, textColor, onClick = null }) => {
  const buttonStyles = {
    ...styles.button,
    backgroundColor: color || styles.button.backgroundColor
  }

  const buttonText = {
    ...styles.buttonText,
    color: textColor || styles.buttonText.color
  }

  return (
    <Pressable style={({ pressed }) => [{ ...buttonStyles, opacity: pressed ? 0.6 : 1 }]} onPress={() => onClick ? onClick() : Alert.alert('Pressed')}>
      <Text style={buttonText}>{text || ''}</Text>
    </Pressable>
  )
}
