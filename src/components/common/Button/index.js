import React from 'react'
import { StyleSheet, Text, Pressable, Alert } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5271FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export const Button = ({ color, text, textColor, onClick = null, disabled = false }) => {
  const buttonStyles = {
    ...styles.button,
    backgroundColor: color || styles.button.backgroundColor,
    opacity: disabled ? 0.5 : 1
  }

  const buttonText = {
    ...styles.buttonText,
    color: textColor || styles.buttonText.color
  }

  return (
    <Pressable style={({ pressed }) => [{ ...buttonStyles }]} onPress={() => onClick && !disabled ? onClick() : null}>
      <Text style={buttonText}>{text || ''}</Text>
    </Pressable>
  )
}
