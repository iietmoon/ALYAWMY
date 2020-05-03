// import the  libraries 
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//import Admob 
import {AdMobBanner, AdMobInterstitial,  PublisherBanner,  AdMobRewarded} from 'expo-ads-admob';
// import the Components
import ArticlesView from '../Components/Tech/ArticlesView';
import TopHeadlines from '../Components/Tech/TopHeadlines';
import Extra from '../Components/extra/Extra';
import { TouchableHighlight, } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { View } from 'native-base';
//Stylesheet
const styles = StyleSheet.create({
  AdsView:{
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});

// The main screen
function TechScreen({ navigation }) {
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
           adUnitID="ca-app-pub-2406276559366897/2211929594"
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
export default withNavigation(TechScreen);