// import from React Native
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import from Expo
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

//import from Components
import RootNavigator from './Routes/Drawer';




// Fonts functions from local folder
const getFonts = () =>  Font.loadAsync({
  'Tajawal-Black' : require('./assets/fonts/Tajawal-Black.ttf'),
  'Tajawal-Bold' : require('./assets/fonts/Tajawal-Bold.ttf'),
  'Tajawal-ExtraBold' : require('./assets/fonts/Tajawal-ExtraBold.ttf'),
  'Tajawal-ExtraLight' : require('./assets/fonts/Tajawal-ExtraLight.ttf'),
  'Tajawal-Light' : require('./assets/fonts/Tajawal-Light.ttf'),
  'Tajawal-Medium' : require('./assets/fonts/Tajawal-Medium.ttf'),
  'Tajawal-Regular' : require('./assets/fonts/Tajawal-Regular.ttf'),

});

// The Main View
export default function App({Navigation}) {
 const[fontsLoaded, setFontsLoaded]  = useState(false);

 if(fontsLoaded){
  return (
    
        <RootNavigator/>
     
  );
 }
 else{
  return (
    <AppLoading
    startAsync={getFonts}
    onFinish={() => setFontsLoaded(true)}
    />
  );
 }



}

