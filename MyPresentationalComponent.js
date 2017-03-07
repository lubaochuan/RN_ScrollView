import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default MyPresentationalComponent = (props) => {
  const createItem = (item) => (
    <Text key={item.id} style={styles.item}>
      {item.name}
    </Text>
  )

  return (
    <View style={styles.container}>
      <ScrollView>
        {props.listItems.map(createItem)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'silver'
  },
  item: {
    margin: 15,
    padding: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
   }
})
