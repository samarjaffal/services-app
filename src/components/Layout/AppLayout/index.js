import React from 'react'
import { Navbar } from '../Navbar/index.jsx'
import { View, StyleSheet } from 'react-native'

export const AppLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <View style={styles.container}>
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    paddingVertical: 10,
    backgroundColor: '#172A3A',
    flex: 1
  }
})
