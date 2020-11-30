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

var started = false

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

interface State {
  count: number
  addAmount: number
  botAmount: number
  botLevel: number
  diamonds: number
}

const StateContainer = (props: StateContainerProps) => {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [addAmount, setAddAmount] = useState(1);
  const [botAmount, setBotAmount] = useState(0);
  const [botLevel, setBotLevel] = useState(1);
  const [diamonds, setDiamonds] = useState(0);

  function isMultipleOf(a: number, multiple: number) {
    return (a % multiple) == 0;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    var lastDigit = seconds % 10;
    const isBotActive = botLevel >= (lastDigit + 1) && botAmount != 0;
    if (isBotActive) {
      setCount(count => count + botAmount);
      const oldDiamonds = diamonds;
      const newDiamonds = Math.floor((count + botAmount) / 1000);
      const diamondsToAdd = newDiamonds - oldDiamonds;
      setDiamonds(diamonds => diamonds + diamondsToAdd);
    }
  }, [seconds]);
  useEffect(() => {
    if (!started) {
      setTimeout(() => { started = true; }, 2000);
    }
  }, [seconds]);
  useEffect(() => {
    if (!started) { return }
    const munch = new Audio.Sound();
    const munchSound = munchsounds[Math.floor(Math.random() * (16 - 0) + 0)]
    munch.loadAsync(munchSound, { shouldPlay: true } as AVPlaybackStatusToSet);
    setTimeout(() => munch.unloadAsync(), 750);
  }, [count]);
  useEffect(() => {
    if (!started) { return }
    const cha = new Audio.Sound();
    const chaSound = registerSounds[Math.floor(Math.random() * (2 - 0) + 0)]
    cha.loadAsync(chaSound, { shouldPlay: true } as AVPlaybackStatusToSet);
    setTimeout(() => cha.unloadAsync(), 2000);
  }, [botAmount, addAmount, botLevel]);

  const addOne = () => {
    if (count >= 100) {
      setCount(count => count - 100);
      setAddAmount(addAmount => addAmount + 1);
    } else {
      Alert.alert("Too Expensive!")
    }
  };
  const addOneBot = () => {
    if (count >= 1000) {
      setCount(count => count - 1000);
      setBotAmount(botAmount => botAmount + 1);
    } else {
      Alert.alert("Too Expensive!")
    }
  }
  const addOneBotLevel = () => {
    if (count >= 10000) {
      if (botLevel < 10) {
        setCount(count => count - 10000)
        setBotLevel(botLevel => botLevel + 1)
      } else {
        Alert.alert("Bots are already at the highest level!")
      }
    } else {
      Alert.alert("Too Expensive!")
    }
  };
  const tabOne = () => PressScr(count, () => {
    setCount(count => count + addAmount);
  }, addAmount, props.colorScheme, () => {
    if (diamonds >= 50) {
      setDiamonds(diamonds => diamonds - 50);
      setCount(count => count * 2);
      const cha = new Audio.Sound();
      const chaSound = registerSounds[Math.floor(Math.random() * (2 - 0) + 0)];
      cha.loadAsync(chaSound, { shouldPlay: true } as AVPlaybackStatusToSet);
      setTimeout(() => cha.unloadAsync(), 2000);
    } else {
      Alert.alert("Too Expensive!")
    }
  }, diamonds);
  const tabTwo = () => Shop(count, addOne, addOneBot, addAmount, botAmount, addOneBotLevel, botLevel, props.colorScheme, diamonds);
  const tabThree = () => Info()
  const tabFour = () => Credits(() => {Alert.alert('Delete','Are you SURE you want to DELETE EVERYTHING? This includes the number of crisps made, the number of diamonds you have and everything you bought from the shop!',[{text: 'Yes',onPress: () => {setAddAmount(1);setBotAmount(0);setBotLevel(1);setCount(0);setDiamonds(0)}},{text: 'No',onPress: () => console.log('Canceled'),style: 'cancel'}],{ cancelable: false });})

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
  };
  async function setState() {
    const state: State = {
      count,
      addAmount,
      botAmount,
      botLevel,
      diamonds,
    };
    await setItem(JSON.stringify(state));
  }
  useEffect(() => {
    if (started) {
      setState();
    }
  }, [count, addAmount, botAmount, botLevel, diamonds])
  useEffect(() => {
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
  },
})
