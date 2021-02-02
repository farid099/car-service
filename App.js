import React,{useEffect,useContext} from 'react';
import { StyleSheet,LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';

import {Provider as PaperProvider } from 'react-native-paper';
import {StoreProvider} from './src/store/Context'

import AppLoading from './src/screens/AppLoading'
import {NavigationContainer} from '@react-navigation/native'

import MainScreen from './MainScreen'

export default function App() {

  LogBox.ignoreLogs(['Setting a timer']);

  //Loading opensans-regular font
  const [loaded, error ]= useFonts({
    "OpenSans-Regular" : require('./assets/fonts/OpenSans-Regular.ttf'),
  })

  //wait until font is loaded
  if (!loaded) {
    return <AppLoading />;
  }


  return (
    <PaperProvider>
      <StoreProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <MainScreen />
          </NavigationContainer>
        </SafeAreaProvider>
      </StoreProvider>
    </PaperProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
