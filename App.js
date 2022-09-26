import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MyComponent from './components/MyComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={[styles.quarter, styles.lightPurple]}></View>
        <View style={[styles.quarter, styles.blue]}></View>
        <View style={[styles.half, styles.darkBlue]}></View>
      </View>
      <View style={styles.column}>
        <View style={[styles.quarter, styles.lightBlue]}></View>
        <View style={[styles.half, styles.content, styles.blue]}>
          <Text style={styles.text}>FLEXBOX</Text>
        </View>
        <View style={[styles.quarter, styles.darkPurple]}></View>
      </View>
    </View>
  );s
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    flexBasis: '50%'
  },
  quarter: {
    flexBasis: '25%',
    borderWidth: 3,
    padding: 12
  },
  half: {
    flexBasis: '50%',
    borderWidth: 3,
    padding: 12
  },
  text: {
    transform: [{ rotate: '-90deg'}],
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  content: {
    justifyContent: 'center',
  },
  lightPurple: {
    backgroundColor: '#8676DF'
  },
  lightBlue: {
    backgroundColor: "#7ACBFB"
  },
  blue: {
    backgroundColor: "#4FBCFA"
  },
  darkBlue: {
    backgroundColor: '#017EF6'
  },
  darkPurple: {
    backgroundColor: '#5E55BD'
  }

});
