import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PressScr } from './screens/TabOneScreen';
import { Shop } from './screens/TabTwoScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

const Tab = createBottomTabNavigator();

let timerActive = false;

interface StateContainerProps {
  colorScheme: string,
}

const StateContainer = (props: StateContainerProps) => {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [addAmount, setAddAmount] = useState(1);
  const [botAmount, setBotAmount] = useState(0);
  const [botLevel, setBotLevel] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSeconds(tick => tick + 1);
    }, 10000);
  }, []);
  useEffect(() => {
    if (timerActive == true) {
      setCount(count => count + botAmount);
    }
  }, [seconds]);

  const tabOne = () => PressScr(count, () => {
    setCount(count + addAmount);
  }, addAmount, props.colorScheme);

  const addOne = () => {
    if (count >= 100) {
      setCount(count - 100)
      setAddAmount(addAmount + 1)
    }
  };
  const addOneBot = () => {
    if (count >= 1000) {
      setCount(count - 1000)
      if (timerActive) {
        setBotAmount(botAmount + 1)
      } else {
        timerActive = true
        setBotAmount(botAmount + 1)
      }
    }
  }
  const addOneBotLevel = () => {
    if (count >= 10000) {
      setCount(count - 10000)
      if (timerActive) {
        setBotLevel(botLevel + 1)
      }
    }
  };
  const tabTwo = () => Shop(count, addOne, addOneBot, addAmount, botAmount, addOneBotLevel, botLevel);
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Gathering Zone" component={tabOne} />
        <Tab.Screen name="Trading Zone" component={tabTwo} />
      </Tab.Navigator>
    </>
  )
};
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  theme.colors.background = "transparent";

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ImageBackground source={colorScheme === "dark" ? require('./assets/images/bg.png') : require('./assets/images/bg2.png')} style={styles.bg}>
        <NavigationContainer theme={theme}>
          <SafeAreaProvider>
            <StateContainer colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </NavigationContainer>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
  }
})
