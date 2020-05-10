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
    backgroundColor: '#fff',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
})

// The main screen
function Banner() {
  return (
      <View style={styles.AdsView}>
        <AdMobBanner
          bannerSize='largeBanner'
          adUnitID='ca-app-pub-2406276559366897/2211929594'
          testDeviceID='EMULATOR'
          servePersonalizedAds/>
      </View>
  )
}
export default withNavigation(Banner)
