import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const TabOne = (count: number, onClick: () => void) => (
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

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="llllllllllllllllllllllllllllll" onPress={onClick} />

    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {


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

