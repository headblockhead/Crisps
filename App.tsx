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

const StateContainer = () => {
  const [count, setCount] = useState(0);
  const tabOne = () => TabOne(count, () => setCount(count + 1));
  const tabTwo = () => TabTwo(count);
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
