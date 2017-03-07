import React, { Component } from 'react'
import { View, AppRegistry } from 'react-native'
import MyPresentationalComponent from './MyPresentationalComponent'

export default class MyApp extends Component {
  constructor() {
    super()
    this.state = {
     listItems: [
       {'name': 'Item1', 'id': 1},
       {'name': 'Item2', 'id': 2},
       {'name': 'Item3', 'id': 3},
       {'name': 'Item4', 'id': 4},
       {'name': 'Item5', 'id': 5},
       {'name': 'Item6', 'id': 6},
       {'name': 'Item7', 'id': 7},
       {'name': 'Item8', 'id': 8},
       {'name': 'Item9', 'id': 9},
       {'name': 'Item10', 'id': 10},
       {'name': 'Item11', 'id': 11},
       {'name': 'Item12', 'id': 12}]
     }
  }

  render(){
    return (
      <MyPresentationalComponent listItems = {this.state.listItems}/>
    )
  }
}

AppRegistry.registerComponent('RN_ScrollView', () => MyApp);
