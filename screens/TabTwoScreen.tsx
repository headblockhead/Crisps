import * as React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const Shop = (count: number, addOne: () => void, addOneBot: () => void, pointsPerClick: number, botCount: number, addOneBotLevel: () => void, botLevel: number, colorScheme: string) => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle1}>This is where you can buy equipment</Text>
      <Text style={styles.subtitle1}>Or make upgrades to existing </Text>
      <Text style={styles.subtitle1}>equipment</Text>
      <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title2}>Info:</Text>
      <Text style={styles.medium}>Cookies: {count}</Text>
      <Text style={styles.medium}>Points/click: {pointsPerClick}</Text>
      <Text style={styles.medium}>Bots: {botCount}</Text>
      <Text style={styles.medium}>Bot level: {botLevel}</Text>
      <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title3}>Buy:</Text>
      <Button color={colorScheme === "dark" ? count < 100 ? "red" : "green" : count < 1 ? "rgb(200,0,0)" : "rgb(0,100,0)"} title="Add one Point/Click (100 point cost)" onPress={addOne} />
      <Button color={colorScheme === "dark" ? count < 1000 ? "red" : "green" : count < 1 ? "rgb(200,0,0)" : "rgb(0,100,0)"} title="Add one Bot (1000 point cost)" onPress={addOneBot} />
      <Button color={colorScheme === "dark" ? count < 10000 ? "red" : "green" : count < 1 ? "rgb(200,0,0)" : "rgb(0,100,0)"} title="Upgrade all bots (past and future) by 1 level (10000 point cost)" onPress={addOneBotLevel} />

    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  scrollView: {
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle1: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  big: {
    fontSize: 25,
  },
  medium: {
    fontSize: 18,

  },
  title2: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  title3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separatorsmall: {
    marginVertical: 16.5,
    height: 1,
    width: '80%',
  },
});
