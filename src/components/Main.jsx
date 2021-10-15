// import { AppLayout } from './Layout/AppLayout'
// import { Home } from '../pages/Home'
// import { Route, Switch } from 'react-router-native'
// import { Service } from '../pages/Service'
// import { Categories } from '../pages/Categories'
// import { Category } from '../pages/Category'
// import { Search } from '../pages/Search'
// import { View } from 'react-native'
// import Constants from 'expo-constants'
import React from 'react'
import Navigator from '../routes/index'

const Main = () => {
  return (
  // <View style={{ marginTop: Constants.statusBarHeight }}>
  //   <AppLayout>
  //     <Switch>
  //       <Route path='/' exact>
  //         <Home />
  //       </Route>
  //       <Route path='/categories' exact>
  //         <Categories />
  //       </Route>
  //       <Route path='/service/:id' component={Service} />
  //       <Route path='/category/:id' component={Category} />
  //       <Route path='/search/:key' component={Search} />
  //     </Switch>
  //   </AppLayout>
  // </View>

    <Navigator />
  )
}

export default Main
