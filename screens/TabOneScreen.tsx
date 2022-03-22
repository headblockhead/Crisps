import * as React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, Button, Alert } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

const getStyle = (count: number) => {
  if (count < 1000) {
    return styles.big
  }
  if (count > 999 && count < 100000) {
    return styles.big1
  }
  if (count > 99999) {
    return styles.big2
  }
  return styles.big3
}

var h = Dimensions.get('screen').height;
var w = Dimensions.get('screen').width;

export const PressScr = (count: number, onClick: () => void, addAmount: number, colorScheme: string, Double: () => void, diamond: number) => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.container} >
      <Text style={styles.title}>Crisp Cruncher!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={getStyle(count)}>{count >= 1000 ? "" : "🥨    "}{count}{count >= 1000 ? "" : "    🥨"}</Text>
      <Text style={getStyle(diamond)}>{diamond >= 1000 ? "" : "💎    "}{diamond}{diamond >= 1000 ? "" : "    💎"}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity activeOpacity= {0.5} style={styles.buttonsurround} onPress={onClick}>
        <Image
          style={styles.buttonsurround}
          source={colorScheme === "dark" ? require('../assets/images/button2.png') : require('../assets/images/button.png')}
        />
      </TouchableOpacity>
      <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity activeOpacity= {0.5} style={styles.buttonsurround} onPress={Double}>
        <Image
          style={styles.buttonsurround}
          source={colorScheme === "dark" ? require('../assets/images/buttonpaydouble2.png') : require('../assets/images/buttonpaydouble.png')}
        />
      </TouchableOpacity>
    </View>
  </ScrollView>
);



const styles = StyleSheet.create({
  tinyLogo: {
    width: 399,
    height: 100,
  },
  buttonsurround: {
    width: (w / 12 * 3.87),
    height: (w / 27 * 2.3),
    resizeMode: 'stretch',
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  scrollView: {
    marginVertical: 10.5,
    backgroundColor: 'transparent',
  },
  para: {
    fontSize: 13.5,

  },
  title: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  big: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  big1: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  big2: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  big3: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  subtitle1: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  separatorsmall: {
    marginVertical: 18,
    height: 1,
    width: '80%',
  },
  separatorsmallerr: {
    marginVertical: 8,
    height: 1,
    width: '80%',
  },
});

