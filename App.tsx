import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TouchableNativeFeedbackBase } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOne } from './screens/TabOneScreen';
import { TabTwo } from './screens/TabTwoScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

const Tab = createBottomTabNavigator();

let timerActive = true;

const StateContainer = () => {
  const [tick, setTick] = useState(0);
  const [count, setCount] = useState(0);
  const [addAmount, setAddAmount] = useState(1);
  const [botAmount, setBotAmount] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setTick(tick => tick + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    setCount(count => count + botAmount);
  }, [tick]);
  const tabOne = () => TabOne(count, () => {
    setCount(count + addAmount);
  });
  const addOne = () => {
    if (count >= 100) {
      setCount(count - 100)
      setAddAmount(addAmount + 1)
    }
  };
  const addOneBot = () => {
    if (count >= 1) {
      setCount(count - 1)
      setBotAmount(botAmount + 1)
    }
  };
  const tabTwo = () => TabTwo(count, addOne, addOneBot, addAmount, botAmount);
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
