// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import theme from './src/styles/theme'

export default function App () {
  return (
    <Main />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  }
})
