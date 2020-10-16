import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableNativeFeedbackBase } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOne } from './screens/TabOneScreen';
import { TabTwo } from './screens/TabTwoScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

const Tab = createBottomTabNavigator();

let timerStarted = false;

const timerFunction = (count: number, setCount: (x: number) => void) => {
  //TODO: FIx counter!!!!
//  setCount(count + 10);
  setTimeout(() => timerFunction(count, setCount), 1000);
}

const StateContainer = () => {
  const [count, setCount] = useState(0);
  const [addAmount, setAddAmount] = useState(1);
  const [botAmount, setBotAmount] = useState(0);
  const tabOne = () => TabOne(count, () => {
    setCount(count + addAmount);
    if(!timerStarted) {
      timerStarted = true;
      setTimeout(() => timerFunction(count, setCount), 1000);
    }
  } );
  const tabTwo = () => TabTwo(count, () => {
    if (count >= 100) {
      setCount(count - 100)
      setAddAmount(addAmount + 1)
    }
  }, () => {
    if (count >= 1) {
      setCount(count - 1)
      setBotAmount(botAmount + 1)
    }
  },
  addAmount,
  botAmount,
  );
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
