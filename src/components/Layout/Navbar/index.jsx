import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import { useHistory, Link } from 'react-router-native'
import { HomeSVG } from '../../Icons/HomeSVG'
import { TagSVG } from '../../Icons/TagSVG'
import theme from './../../../styles/theme'

const handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
  console.log(keyValue)
  if (keyValue === 'Enter') {
    console.log('enter')
  }
}

export const Navbar = () => {
  const [text, setText] = useState('')
  const inputRef = useRef()
  const history = useHistory()
  return (
    <View sytle={styles.containerShadow}>
      <View style={styles.nav}>
        <View style={{ ...theme.common.flexRow, ...styles.headerContainer }}>
          <View style={theme.common.flexRow}>
            <View style={styles.icon} />
            <Text style={{ ...theme.common.title, color: theme.colors.white }}>App de Servicios</Text>
          </View>
          <View style={theme.common.flexRow}>
            <Link to='/' component={TouchableWithoutFeedback}>
              <HomeSVG fill={theme.colors.secondary} />
            </Link>
            <Link to='/categories' component={TouchableWithoutFeedback}>
              <TagSVG fill={theme.colors.secondary} style={{ ...styles.tagIcon, marginLeft: 20 }} />
            </Link>
          </View>
        </View>
        <View>
          <TextInput
            ref={inputRef}
            style={styles.search}
            placeholder='Buscar'
            returnKeyType='search'
            onChangeText={text => setText(text)}
            defaultValue={text}
            onSubmitEditing={(e) => {
              setText('')
              history.push(`/search/${text}`)
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between'
  },
  tagIcon: {
    marginHorizontal: 10,
    marginTop: 5
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.secondary,
    marginRight: 10
  },
  nav: {
    backgroundColor: theme.colors.background,
    padding: 20,
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    top: 0,
    zIndex: 99,
    width: '100%',
    height: 120,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5
  },
  search: {
    backgroundColor: theme.colors.white,
    padding: 8,
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 20
  },
  containerShadow: {
    overflow: 'hidden',
    paddingBottom: 5
  }
})
