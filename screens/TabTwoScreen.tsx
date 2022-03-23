import * as React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';


const getButtonColors = (scheme: string): Array<string> => {
  if (scheme === "dark") {
    return ["red", "green"];
  }
  return ["rgb(200,0,0)", "rgb(0,100,0)"];
}

var h = Dimensions.get('screen').height;
var w = Dimensions.get('screen').width;

const getButtonColor = (colorScheme: string, price: number, count: number) => {
  const canAfford = price <= count;
  const colors = getButtonColors(colorScheme);
  return canAfford ? colors[1] : colors[0];
}

const getButtonColorbots = (colorScheme: string, price: number, count: number, botlevl:number) => {
  const canAfford = price <= count;
  const notismax = botlevl < 10
  const both = canAfford == true && notismax == true
  const colors = getButtonColors(colorScheme);
  return both ? colors[1] : colors[0];
}

export const Shop = (count: number, addOne: () => void, addOneBot: () => void, pointsPerClick: number, botCount: number, addOneBotLevel: () => void, botLevel: number, colorScheme: string, diamonds: number) => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
      <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
      <Text style={styles.title}>Shop</Text>
      <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0)" />

      <Text style={styles.title2}>Info:</Text>
      <Text></Text>
      <Text style={styles.medium}>Criisps: {count}</Text>
      <Text style={styles.medium}>Diamonds: {diamonds} </Text>
      <Text style={styles.medium}>Points/click: {pointsPerClick}</Text>
      <Text style={styles.medium}>Bots: {botCount}</Text>
      <Text style={styles.medium}>Bot level: {botLevel}</Text>
      <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title3}>Buy:</Text>
      <Button  color={getButtonColor(colorScheme, 100, count)} title="Add one Point/Click (100 point cost)" onPress={addOne} />
      <Button  color={getButtonColor(colorScheme, 1000, count)} title="Add a Machine (1000 point cost)" onPress={addOneBot} />
      <Button  color={getButtonColor(colorScheme, 10000, count)} title="Upgrade all Machines (past and future) by 1 level (10000 point cost)" onPress={addOneBotLevel} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  invisisep: {
      marginVertical: w / 34,
      height: 1,
      width: '80%',
  },
  smallinvisisep: {
      marginVertical: 1,
      height: 1,
      width: '80%',
  },
  parabig: {
      fontSize: w / 24,

  },
  parasmall: {
      fontSize: w / 24.9,

  },
  title2: {
    fontSize:  12,
    fontWeight: 'bold',
},
title3: {
  fontSize:  13,
  fontWeight: 'bold',
},
  medium: {
    fontSize:  13,
    fontWeight: 'bold',
},
  minititle: {
      fontSize: 21,
      fontWeight: 'bold',
  },
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
    fontSize: 50,
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
