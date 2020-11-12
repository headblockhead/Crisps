import * as React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export const PressScr = (count: number, onClick: () => void, addAmount: number, colorScheme: string, Double: () => void, diamond: number) => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.container} >
      <Text style={styles.title}>Crisp Cruncher!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.big}>{count >= 10000 ? "" : "🍪    "}{count}{count >= 10000 ? "" : "    🍪"}</Text>
      <Text style={styles.big}>{diamond >= 10000 ? "" : "💎    "}{diamond}{diamond >= 10000 ? "" : "    💎"}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableHighlight style={styles.buttonsurround} onPress={onClick}>
        <Image
          style={styles.buttonsurround}
          source={colorScheme === "dark" ? require('../assets/images/button2.png') : require('../assets/images/button.png')}
        />
      </TouchableHighlight>
      <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableHighlight style={styles.buttonsurround} onPress={Double}>
        <Image
          style={styles.buttonsurround}
          source={colorScheme === "dark" ? require('../assets/images/buttonpaydouble2.png') : require('../assets/images/buttonpaydouble.png')}
        />
      </TouchableHighlight>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  tinyLogo: {
    width: 399,
    height: 100,
  },
  buttonsurround: {
    width: 310,
    height: 80,
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  big: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitle1: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
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

