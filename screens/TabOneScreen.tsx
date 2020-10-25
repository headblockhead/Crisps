import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export const PressScr = (count: number, onClick: () => void, addAmount: number, colorScheme: string) => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.container} >
      <Text style={styles.title}>Cookie Collector</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle1}>This game is all about collecting,</Text>
      <Text style={styles.subtitle1}>and trading, cookies!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.para}>Press the Button at the bottom of the screen</Text>
      <Text style={styles.para}>to get cookies!</Text>
      <Text></Text>
      <Text style={styles.para}>The faster you press, the faster you get cookies!</Text>
      <Text></Text>
      <Text style={styles.para}>Trade your cookies to buy upgrades to your button</Text>
      <Text style={styles.para}> and even make the process automatic!</Text>
      <Text></Text>
      <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.big}>{count}</Text>
      
      <TouchableHighlight style={styles.buttonsurround} onPress={onClick}>
        <Image
          style={styles.buttonsurround}
          source={colorScheme === "dark" ? require('../assets/images/button2.png') : require('../assets/images/button.png')}
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
});

