import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PressScr } from './screens/TabOneScreen';
import { Shop } from './screens/TabTwoScreen';
import { Info } from './screens/TabThreeScreen';

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
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Info" component={tabThree} />
        <Tab.Screen name="Cookies" component={tabOne} />
        <Tab.Screen name="Shop" component={tabTwo} />
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
