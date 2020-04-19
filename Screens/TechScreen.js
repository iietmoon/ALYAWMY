// import the  libraries 
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// import the Components
import ArticlesView from '../Components/Tech/ArticlesView';
import TopHeadlines from '../Components/Tech/TopHeadlines';
import Extra from '../Components/extra/Extra';
import { TouchableHighlight, } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { View } from 'native-base';


// The main screen
function TechScreen({ navigation }) {
  return (

    <ScrollView>
      {/* Top headlines component */}
      <TopHeadlines />

      {/* Extra component */}
      <Extra />
      {/* Articles component */}
      <ArticlesView />
    </ScrollView>

  );
}
export default withNavigation(TechScreen);