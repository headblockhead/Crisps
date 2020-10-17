import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TouchableNativeFeedbackBase } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Press } from './screens/TabOneScreen';
import { Shop } from './screens/TabTwoScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

const Tab = createBottomTabNavigator();

let timerActive = false;

const StateContainer = () => {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [addAmount, setAddAmount] = useState(1);
  const [botAmount, setBotAmount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSeconds(tick => tick + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timerActive == true) {
      setCount(count => count + botAmount);
    }
  }, [seconds]);
  const tabOne = () => Press(count, () => {

    setCount(count + addAmount);
  }, addAmount);
  const addOne = () => {
    if (count >= 100) {
      setCount(count - 100)
      setAddAmount(addAmount + 1)
    }
  };
  const addOneBot = () => {
    if (count >= 1) {
      setCount(count - 1)
      if (timerActive) {
        setBotAmount(botAmount + 1)
      }else {
        timerActive = true
        setBotAmount(botAmount + 1)
      }
    }
  };
  const tabTwo = () => Shop(count, addOne, addOneBot, addAmount, botAmount);
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Tab One" component={tabOne} />
        <Tab.Screen name="Tab Two" component={tabTwo} />
      </Tab.Navigator>
    </>
  )
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <StateContainer />
          <StatusBar />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}
