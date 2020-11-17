import * as React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';


var h = Dimensions.get('screen').height;
var w = Dimensions.get('screen').width;

export const PressScr = (count: number, onClick: () => void, addAmount: number, colorScheme: string, Double: () => void, diamond: number) => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.container} >
      <Text style={styles.title}>Crisp Cruncher!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.big}>{count >= 1000 ? "" : "🥨    "}{count}{count >= 1000 ? "" : "    🥨"}</Text>
      <Text style={styles.big}>{diamond >= 1000 ? "" : "💎    "}{diamond}{diamond >= 1000 ? "" : "    💎"}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableWithoutFeedback style={styles.buttonsurround} onPress={onClick}>
        <Image
          style={styles.buttonsurround}
          source={colorScheme === "dark" ? require('../assets/images/button2.png') : require('../assets/images/button.png')}
        />
      </TouchableWithoutFeedback>
      <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableWithoutFeedback style={styles.buttonsurround} onPress={Double}>
        <Image
          style={styles.buttonsurround}
          source={colorScheme === "dark" ? require('../assets/images/buttonpaydouble2.png') : require('../assets/images/buttonpaydouble.png')}
        />
      </TouchableWithoutFeedback>
    </View>
  </ScrollView>
);



const styles = StyleSheet.create({
  tinyLogo: {
    width: 399,
    height: 100,
  },
  buttonsurround: {
    width: (w / 4 * 3.87),
    height: (w / 9 * 2.3),
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
    fontSize: w / 9,
    fontWeight: 'bold',
  },
  big: {
    fontSize: w / 7,
    fontWeight: 'bold',
  },
  subtitle1: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: h / 20,
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

