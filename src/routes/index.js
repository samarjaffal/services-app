import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Home } from '../pages/Home'
import { Service } from '../pages/Service'
import { Categories } from './../pages/Categories'
import { Category } from './../pages/Category'
import { Search } from './../pages/Search'

const screens = {
  Inicio: {
    screen: Home
  },
  Service: {
    screen: Service
  },
  Categories: {
    screen: Categories
  },
  Category: {
    screen: Category
  },
  Search: {
    screen: Search
  }
}

const navigationOptions = {
  title: 'App Services',
  defaultNavigationOptions: {
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
