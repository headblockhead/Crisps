import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Audio, AVPlaybackStatusToSet, Video } from 'expo-av';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PressScr } from './screens/TabOneScreen';
import { Shop } from './screens/TabTwoScreen';
import { Info } from './screens/TabThreeScreen'; 
import { Credits } from './screens/TabFourScreen'; 

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

const Tab = createBottomTabNavigator();

interface StateContainerProps {
  colorScheme: string,
}

const sounds = new Array(17);
sounds[0] = require(`./assets/audio/munch/munch1.wav`);
sounds[1] = require(`./assets/audio/munch/munch2.wav`);
sounds[2] = require(`./assets/audio/munch/munch3.wav`);
sounds[3] = require(`./assets/audio/munch/munch4.wav`);
sounds[4] = require(`./assets/audio/munch/munch5.wav`);
sounds[5] = require(`./assets/audio/munch/munch6.wav`);
sounds[6] = require(`./assets/audio/munch/munch7.wav`);
sounds[7] = require(`./assets/audio/munch/munch8.wav`);
sounds[8] = require(`./assets/audio/munch/munch9.wav`);
sounds[9] = require(`./assets/audio/munch/munch10.wav`);
sounds[10] = require(`./assets/audio/munch/munch11.wav`);
sounds[11] = require(`./assets/audio/munch/munch12.wav`);
sounds[12] = require(`./assets/audio/munch/munch13.wav`);
sounds[13] = require(`./assets/audio/munch/munch14.wav`);
sounds[14] = require(`./assets/audio/munch/munch15.wav`);
sounds[15] = require(`./assets/audio/munch/munch16.wav`);
sounds[16] = require(`./assets/audio/munch/munch17.wav`);


// sounds[Math.floor(Math.random() * (18 - 1) + 1)]

const StateContainer = (props: StateContainerProps) => {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [addAmount, setAddAmount] = useState(1);
  const [botAmount, setBotAmount] = useState(0);
  const [botLevel, setBotLevel] = useState(1);
  const [diamonds, setDiamonds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    var beforeadd = count
    var toText = seconds.toString(); //convert to string
    var lastChar = toText.slice(-1); //gets last character
    var lastDigit = +(lastChar); //convert last character to number
    // console.log(lastDigit);
    const isBotActive = botLevel >= (lastDigit + 1);
    if (isBotActive) {
      setCount(count => count + botAmount);
      const multipleOf1000 = (x: number): boolean => x % 1000 == 0;
      for (let i = botAmount; i >= -1; i--) {
        if (multipleOf1000(beforeadd + i)) {
          setDiamonds(diamonds + 1)
        }
      }
    }
  }, [seconds]);
  useEffect(() => {
    const munch = new Audio.Sound();
    const munchSound = sounds[Math.floor(Math.random() * (16 - 0) + 0)]
    munch.loadAsync(munchSound, { shouldPlay: true } as AVPlaybackStatusToSet);
    setTimeout(() => munch.unloadAsync(), 5000);
  }, [count])

  const tabOne = () => PressScr(count, () => {
    setCount(count + addAmount);
  }, addAmount, props.colorScheme, () => {
    if (diamonds > 50) {
      setDiamonds(diamonds - 50)
      setCount(count * 2)
    }
  }
  )

  const addOne = () => {
    if (count >= 100) {
      setCount(count - 100)
      setAddAmount(addAmount + 1)
    } else {
      Alert.alert("Too Expensive!")
    }
  };
  const addOneBot = () => {
    if (count >= 1000) {
      setCount(count - 1000)
      setBotAmount(botAmount + 1000)
    } else {
      Alert.alert("Too Expensive!")
    }
  }
  const addOneBotLevel = () => {
    if (count >= 10000) {
      if (botLevel < 10) {
        setCount(count - 10000)
        setBotLevel(botLevel + 10000)
      } else {
        Alert.alert("Bots are already at the highest level!")
      }
    } else {
      Alert.alert("Too Expensive!")
    }
  };
  const tabTwo = () => Shop(count, addOne, addOneBot, addAmount, botAmount, addOneBotLevel, botLevel, props.colorScheme);
  const tabThree = () => Info()
  const tabFour = () => Credits(props.colorScheme)
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Info" component={tabThree} />
        <Tab.Screen name="Cookies" component={tabOne} />
        <Tab.Screen name="Shop" component={tabTwo} />
        <Tab.Screen name="Credits" component={tabFour} />
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
