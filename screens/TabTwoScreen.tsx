import * as React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const getButtonColors = (scheme: string): Array<string> => {
  if (scheme === "dark") {
    return ["red", "green"];
  }
  return ["rgb(200,0,0)", "rgb(0,100,0)"];
}

const getButtonColor = (colorScheme: string, price: number, count: number) => {
  const canAfford = price < count;
  const colors = getButtonColors(colorScheme);
  return canAfford ? colors[1] : colors[0];
}

export const Shop = (count: number, addOne: () => void, addOneBot: () => void, pointsPerClick: number, botCount: number, addOneBotLevel: () => void, botLevel: number, colorScheme: string) => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0)" />

      <Text style={styles.title2}>Info:</Text>
      <Text style={styles.medium}>Cookies: {count}</Text>
      <Text style={styles.medium}>Points/click: {pointsPerClick}</Text>
      <Text style={styles.medium}>Bots: {botCount}</Text>
      <Text style={styles.medium}>Bot level: {botLevel}</Text>
      <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title3}>Buy:</Text>
      <Button color={getButtonColor(colorScheme, 100, count)} title="Add one Point/Click (100 point cost)" onPress={addOne} />
      <Button color={getButtonColor(colorScheme, 1000, count)} title="Add one Bot (1000 point cost)" onPress={addOneBot} />
      <Button color={getButtonColor(colorScheme, 10000, count)} title="Upgrade all bots (past and future) by 1 level (10000 point cost)" onPress={addOneBotLevel} />

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
    marginVertical: 9,
    backgroundColor: 'rgba(0,0,0,0.45)'
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
