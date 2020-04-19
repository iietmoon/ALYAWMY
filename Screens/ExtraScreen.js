
import React,{useState} from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View, Alert, Image, } from 'react-native';
//Import the native-base
import { Container, Content, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import { WebView } from 'react-native-webview';
import { withNavigation } from 'react-navigation';
// import the images
import back from '../assets/icons/back.png';
// import from Expo
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

//import from Components
//import from react-native-elements
import { Header, } from 'react-native-elements';

// StyleSheets

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0084ff',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Txt: {
    color: '#fff',
    fontSize: 15,
  },
  TabHeading: {
    backgroundColor: '#fff',


  },
  TabText: {
    color: '#1d1927',
    fontFamily: 'Tajawal-Bold',
    fontSize: 13
  },
  tabBarUnder: {
    backgroundColor: '#0084ff'


  },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
  
    },
    video: {
      marginTop: 20,
      maxHeight: 200,
      width: 320,
      flex: 1
    }
  });





 class ExtraScreen extends React.Component {

  render() {
    const navigation= this.props.navigation;
    const WebVurl =  navigation.getParam('url');
    return (
        
        <WebView source={{ uri: WebVurl }} style={{ marginTop: 0 }} />

      
    );
  }
}


// Main  view of the component of The Header and full screen Menu



export default withNavigation(ExtraScreen);