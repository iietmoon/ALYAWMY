// import the  libraries 
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// import the Components
import ArticlesView from '../Components/Mondial/ArticlesView';
import TopHeadlines from '../Components/Mondial/TopHeadlines';
import Extra from '../Components/extra/Extra';
import { TouchableHighlight, } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { View } from 'native-base';


// The main screen
function MondialScreen({ navigation }) {
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
export default withNavigation(MondialScreen);