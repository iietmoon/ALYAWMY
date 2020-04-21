// import the  libraries 
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// import the Components
import ArticlesView from '../Components/Economy/ArticlesView';
import TopHeadlines from '../Components/Economy/TopHeadlines';
import Extra from '../Components/extra/Extra';
import { withNavigation } from 'react-navigation';



// The main screen
function EcoScreen({ navigation }) {
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
export default withNavigation(EcoScreen);