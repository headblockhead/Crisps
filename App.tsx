import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Audio, AVPlaybackStatusToSet } from 'expo-av';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PressScr } from './screens/TabOneScreen';
import { Shop } from './screens/TabTwoScreen';
import { Info } from './screens/TabThreeScreen';
import { Credits } from './screens/TabFourScreen';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

const Tab = createBottomTabNavigator();

interface StateContainerProps {
  colorScheme: string,
}

const munchsounds = new Array(17);
munchsounds[0] = require(`./assets/audio/munch/munch1.wav`);
munchsounds[1] = require(`./assets/audio/munch/munch2.wav`);
munchsounds[2] = require(`./assets/audio/munch/munch3.wav`);
munchsounds[3] = require(`./assets/audio/munch/munch4.wav`);
munchsounds[4] = require(`./assets/audio/munch/munch5.wav`);
munchsounds[5] = require(`./assets/audio/munch/munch6.wav`);
munchsounds[6] = require(`./assets/audio/munch/munch7.wav`);
munchsounds[7] = require(`./assets/audio/munch/munch8.wav`);
munchsounds[8] = require(`./assets/audio/munch/munch9.wav`);
munchsounds[9] = require(`./assets/audio/munch/munch10.wav`);
munchsounds[10] = require(`./assets/audio/munch/munch11.wav`);
munchsounds[11] = require(`./assets/audio/munch/munch12.wav`);
munchsounds[12] = require(`./assets/audio/munch/munch13.wav`);
munchsounds[13] = require(`./assets/audio/munch/munch14.wav`);
munchsounds[14] = require(`./assets/audio/munch/munch15.wav`);
munchsounds[15] = require(`./assets/audio/munch/munch16.wav`);
munchsounds[16] = require(`./assets/audio/munch/munch17.wav`);

const registerSounds = new Array(2);
registerSounds[0] = require(`./assets/audio/cha/cha.wav`);
registerSounds[1] = require(`./assets/audio/cha/cha2.wav`);
registerSounds[2] = require(`./assets/audio/cha/cha3.wav`);


// sounds[Math.floor(Math.random() * (18 - 1) + 1)]

interface State {
  count: number
  addAmount: number
  botAmount: number
  botLevel: number
  diamonds: number
}

const StateContainer = (props: StateContainerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [addAmount, setAddAmount] = useState(1);
  const [botAmount, setBotAmount] = useState(0);
  const [botLevel, setBotLevel] = useState(1);
  const [diamonds, setDiamonds] = useState(0);

const isDivisible = (x: number, by: number) => (x % by) === 0;

  function isMultipleOf(a: number, multiple: number) {
    var divRemainder = a % multiple
    if (divRemainder != 0) {
      return false
    }
    return true
  }

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
    const isBotActive = botLevel >= (lastDigit + 1) && botAmount != 0;
    if (isBotActive) {
      var beforeAdd = count
      setCount(count => count + botAmount);
      var num;
      for (num = count - botAmount; num <= count;num++) {
        if (isMultipleOf(num,1000)) {
          setDiamonds(diamonds + 1)
        }
      }
    }
  }, [seconds]);
  useEffect(() => {
    const munch = new Audio.Sound();
    const munchSound = munchsounds[Math.floor(Math.random() * (16 - 0) + 0)]
    munch.loadAsync(munchSound, { shouldPlay: true } as AVPlaybackStatusToSet);
  }, [count]);
  useEffect(() => {
    const cha = new Audio.Sound();
    const chaSound = registerSounds[Math.floor(Math.random() * (2 - 0) + 0)]
    cha.loadAsync(chaSound, { shouldPlay: true } as AVPlaybackStatusToSet);
    setTimeout(() => cha.unloadAsync(), 5000);
  }, [botAmount, addAmount, botLevel]);

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
      setBotAmount(botAmount + 1)
    } else {
      Alert.alert("Too Expensive!")
    }
  }
  const addOneBotLevel = () => {
    if (count >= 10000) {
      if (botLevel < 10) {
        setCount(count - 10000)
        setBotLevel(botLevel + 1)
      } else {
        Alert.alert("Bots are already at the highest level!")
      }
    } else {
      Alert.alert("Too Expensive!")
    }
  };
  const tabOne = () => PressScr(count, () => {
    setCount(count + addAmount);
  }, addAmount, props.colorScheme, () => {
    if (diamonds >= 50) {
      setDiamonds(diamonds - 1)
      setCount(count * 2)
    }
  }, diamonds);
  const tabTwo = () => Shop(count, addOne, addOneBot, addAmount, botAmount, addOneBotLevel, botLevel, props.colorScheme, diamonds);
  const tabThree = () => Info()
  const tabFour = () => Credits(props.colorScheme)

  // Store the state.
  const { getItem, setItem } = useAsyncStorage('@clicker_state');
  const loadStateFromStorage = async () => {
    const s = await getItem();
    if (!s) {
      return;
    }
    const item = JSON.parse(s);
    setCount(item.count);
    setAddAmount(item.addAmount);
    setBotAmount(item.botAmount);
    setBotLevel(item.botLevel);
    setDiamonds(item.diamonds);
    setIsLoaded(true);
  };
  useEffect(() => {
    async function setState() {
      if (isLoaded) {
        console.log("Setting state.")
        const state: State = {
          count,
          addAmount,
          botAmount,
          botLevel,
          diamonds,
        };
        await setItem(JSON.stringify(state));
      }
    }
    setState();
  }, [count, addAmount, botAmount, botLevel, diamonds])
  useEffect(() => {
    console.log("Loading state.")
    loadStateFromStorage();
  }, []);

  function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }


  return (
    //https://ionicframework.com/docs/v3/ionicons/
    <>
      <Tab.Navigator>
        <Tab.Screen name="Info" component={tabThree} options={{ tabBarIcon: ({ color }) => <TabBarIcon name="ios-information-circle-outline" color={color} />, }} />
        <Tab.Screen name="Crisps" component={tabOne} options={{ tabBarIcon: ({ color }) => <TabBarIcon name="ios-cash" color={color} />, }} />
        <Tab.Screen name="Shop" component={tabTwo} options={{ tabBarIcon: ({ color }) => <TabBarIcon name="ios-basket" color={color} />, }} />
        <Tab.Screen name="Credits" component={tabFour} options={{ tabBarIcon: ({ color }) => <TabBarIcon name="ios-man" color={color} />, }} />
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
