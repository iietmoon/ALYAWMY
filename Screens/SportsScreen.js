// import the  libraries 
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// import the Components
import ArticlesView from '../Components/Sports/ArticlesView';
import TopHeadlines from '../Components/Sports/TopHeadlines';
import Extra from '../Components/extra/Extra';
import { withNavigation } from 'react-navigation';
import { View } from 'native-base';


// The main screen
function SportsScreen({ navigation }) {
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
export default withNavigation(SportsScreen);