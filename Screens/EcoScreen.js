// import the  libraries 
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
//import Admob 
import {AdMobBanner, AdMobInterstitial,  PublisherBanner,  AdMobRewarded} from 'expo-ads-admob';
// import the Components
import ArticlesView from '../Components/Economy/ArticlesView';
import TopHeadlines from '../Components/Economy/TopHeadlines';
import Extra from '../Components/extra/Extra';
import { withNavigation } from 'react-navigation';

//Stylesheet
const styles = StyleSheet.create({
  AdsView:{
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});

// The main screen
function EcoScreen({ navigation }) {
  return (

    <ScrollView>
      {/* Top headlines component */}
      <TopHeadlines />
      {/* Extra component */}
      <Extra />
      {/* Ads */}
      <View style={styles.AdsView}>
         <AdMobBanner
           bannerSize="largeBanner"
           adUnitID="ca-app-pub-3940256099942544/6300978111"
           testDeviceID="EMULATOR"
           servePersonalizedAds/>
      </View>
      {/* Articles component */}
      <ArticlesView />
      {/* Ads */}
      <View style={{height:70}}>
      </View>
    </ScrollView>

  );
}
export default withNavigation(EcoScreen);