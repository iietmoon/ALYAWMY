// import the  libraries 
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
//import Admob 
import Banner from '../Components/Admob/banner';
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
      <Banner />
      {/* Articles component */}
      <ArticlesView />
      {/* Ads */}
      <View style={{height:70}}>
      </View>
    </ScrollView>

  );
}
export default withNavigation(EcoScreen);