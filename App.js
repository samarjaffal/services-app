// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { LogBox, Platform } from 'react-native'
import Main from './src/components/Main'

if (Platform.OS !== 'web') {
  LogBox.ignoreLogs(['Setting a timer'])
}

export default function App () {
  return (
    <Main />
  )
}
