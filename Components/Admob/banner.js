// import the  libraries 
import React from 'react'
import {View, StyleSheet, } from 'react-native'
// import Admob 
import { AdMobBanner } from 'expo-ads-admob'
// import the Components
import { withNavigation } from 'react-navigation'

// Stylesheet
const styles = StyleSheet.create({
  AdsView: {
    margin: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})



// The main screen

export default class Banner extends React.Component {
  bannerError() {
      console.log("An error");
      return;
    } 
    render() {
      return (
        <View style={styles.AdsView}>
        <AdMobBanner
          bannerSize='largeBanner'
          adUnitID='ca-app-pub-2406276559366897/2211929594'
          servePersonalizedAds/>
      </View>
      );
    }
  }
