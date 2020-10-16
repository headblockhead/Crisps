import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export const TabTwo = (count: number, addOne: () => void, addBotOne: () => void, clickpoi:number, bota:number) => (
  <View style={styles.container}>
    <Text style={styles.title}>Shop</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Text style={styles.title2}>Info:</Text>
    <Text style={styles.medium}>Balance: {count}</Text>
    <Text style={styles.medium}>Points/click: {clickpoi}</Text>
    <Text style={styles.medium}>Bots: {bota}</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Text style={styles.title3}>Buy:</Text>
    <Button title="Add one (100 point cost)" onPress={addOne} />
    <Button title="Add one Bot (1000 point cost)" onPress={addBotOne} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
