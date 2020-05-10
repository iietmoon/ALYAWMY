// import the  libraries 
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//import Admob 
import Banner from '../Components/Admob/banner';
// import the Components
import ArticlesView from '../Components/Mondial/ArticlesView';
import TopHeadlines from '../Components/Mondial/TopHeadlines';
import Extra from '../Components/extra/Extra';
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
function MondialScreen({ navigation }) {
  return (

    <ScrollView>
      {/* Top headlines component */}
      <TopHeadlines />
      {/* Extra component */}
      <Extra />
      {/* Ads */}
      <Banner />
      {/* Articles component */}
      <ArticlesView />
      {/* Ads */}
      <View style={{height:70}}>
      </View>
    </ScrollView>

  );
}
export default withNavigation(MondialScreen);