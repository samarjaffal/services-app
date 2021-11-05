import React from 'react'
import { createStackNavigator, HeaderBackButton, TransitionPresets } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Home } from '../pages/Home'
import { Service } from '../pages/Service'
import { Categories } from './../pages/Categories'
import { Category } from './../pages/Category'
import { Search } from './../pages/Search'
import { ServiceOptions } from '../pages/ServiceOptions.jsx'
import { FillEmail } from './../pages/FillEmail'
import { SuccessEmailSent } from '../pages/SuccessEmailSent'

const screens = {
  Inicio: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Wunderhod'
    })
  },
  Service: {
    screen: Service,
    navigationOptions: ({ navigation }) => ({
      title: 'Servicios'
    })
  },
  Categories: {
    screen: Categories,
    navigationOptions: ({ navigation }) => ({
      title: 'Categorías'
    })
  },
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => ({
      title: 'Categoría'
    })
  },
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: 'Busqueda'
    })
  },
  ServiceOptions: {
    screen: ServiceOptions,
    navigationOptions: ({ navigation }) => ({
      title: 'Envío de información'
    })
  },
  FillEmail: {
    screen: FillEmail,
    navigationOptions: ({ navigation }) => ({
      title: 'Llena los datos'
    })
  },
  SuccessEmailSent: {
    screen: SuccessEmailSent,
    navigationOptions: ({ navigation }) => ({
      title: 'Regresa al inicio',
      headerLeft: (<HeaderBackButton onPress={_ => navigation.navigate('Inicio')} tintColor='white' />)
    })
  }
}

const navigationOptions = {
  title: 'App Services',
  // initialRouteName: 'FillEmail',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
    headerStyle: {
      backgroundColor: '#172A3A'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

}

const HomeStack = createStackNavigator(screens, navigationOptions)

export default createAppContainer(HomeStack)
