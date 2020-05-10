// import the  libraries 
import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
// import Admob 
import Banner from '../Components/Admob/banner';
// import the Components
import ArticlesView from '../Components/ArticlesView'
import TopHeadlines from '../Components/TopHeadlines'
import Extra from '../Components/extra/Extra'
import { withNavigation } from 'react-navigation'

// The main screen
function NewsScreen ({ navigation }) {
  return (

    <ScrollView>
      {/* Top headlines component */}
      <TopHeadlines />
      {/* Extra component */}
      <Extra />
      {/* Ads */}
      <Banner />
      {/* Articles component */}
      <ArticlesView/>
      <View style={{height: 70}}>
      </View>
      {/* Ads */}
    </ScrollView>

  )
}
export default withNavigation(NewsScreen)
