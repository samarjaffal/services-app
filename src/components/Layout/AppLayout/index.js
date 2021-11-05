import React from 'react'
import { Navbar } from '../Navbar/index.jsx'
import { View, StyleSheet } from 'react-native'

export const AppLayout = ({ children, paddingHorizontal = 20 }) => {
  const container = {
    ...styles.container,
    paddingHorizontal: paddingHorizontal
  }

  return (
    <>
      {/* <Navbar /> */}
      <View style={container}>
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingVertical: 10,
    backgroundColor: '#172A3A',
    flex: 1
  }
})
