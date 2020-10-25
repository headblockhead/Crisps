import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PressScr } from './screens/TabOneScreen';
import { Shop } from './screens/TabTwoScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

const Tab = createBottomTabNavigator();

interface StateContainerProps {
  colorScheme: string,
}

const StateContainer = (props: StateContainerProps) => {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [addAmount, setAddAmount] = useState(1);
  const [botAmount, setBotAmount] = useState(0);
  const [botLevel, setBotLevel] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    var toText = seconds.toString(); //convert to string
    var lastChar = toText.slice(-1); //gets last character
    var lastDigit = +(lastChar); //convert last character to number
   // console.log(lastDigit);
    const isBotActive = botLevel >= (lastDigit + 1);
    if(isBotActive) {
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
    } else {
      Alert.alert("Too Expensive!")
    }
  };
  const addOneBot = () => {
    if (count >= 1) {
      setCount(count - 1)
      setBotAmount(botAmount + 1)
    } else {
      Alert.alert("Too Expensive!")
    }
  }
  const addOneBotLevel = () => {
    if (count >= 1) {
      if (botLevel < 10) {
        setCount(count - 1)
        setBotLevel(botLevel + 1)
      } else {
        Alert.alert("Bots are already at the highest level!")
      }
    } else {
      Alert.alert("Too Expensive!")
    }
  };
  const tabTwo = () => Shop(count, addOne, addOneBot, addAmount, botAmount, addOneBotLevel, botLevel, props.colorScheme);
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
