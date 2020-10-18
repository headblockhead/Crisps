import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export const PressScr = (count: number, onClick: () => void, addAmount: number, colorScheme: string) => (
  <ScrollView style={styles.scrollView}>
      <View style={styles.container} >
        <Text style={styles.subtitle1}>Welcome to my game!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>Click the button!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text>This is a cookie-clicker style game </Text>
        <Text>where the objective is to collect as many cookies</Text>
        <Text> as possible</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.big}>{count}</Text>
        <TouchableHighlight style={styles.buttonsurround} onPress={onClick}>
          <Image
            style={styles.buttonsurround}
            source={colorScheme === "dark" ? require('../assets/images/button2.png') : require('../assets/images/button.png')}
          />
        </TouchableHighlight>
        <Button title={addAmount == 1 ? "Add Cookie" : "Add Cookies"} onPress={onClick} />
      </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  tinyLogo: {
    width: 399,
    height: 100,
  },
  buttonsurround: {
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
    marginVertical: 40,
backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
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
});

