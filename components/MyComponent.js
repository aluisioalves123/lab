import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MyComponent = () => {
  return(
    <View style={styles.component}>
      <View>
        <Text>a</Text>
      </View>
      <View>
        <Text>b</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row'
  }
}) 

export default MyComponent