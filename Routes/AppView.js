//Import the React native
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Import the native-base
import { Container, Header, Content, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';

//  import the Screens
import HomeScreen from '../Screens/AppScreen';
import AboutScreen from '../Screens/AboutScreen';

//  import the components
import MainHeader from './Header'

// Stylesheets
const styles = StyleSheet.create({
  TabContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,

  },
  TabHeading: {
    backgroundColor: '#fff',
  },
  TabText: {
    color: '#1d1927',
    fontFamily: 'Tajawal-Bold',
    fontSize: 13
  },
  tabBarUnder: {
    backgroundColor: '#0084ff'
  }
});

//Main view
export default class AppView extends React.Component {
   render(){
    return (
      <Container style={styles.TabContainer}>
        <Tabs renderTabBar={() => <ScrollableTab />} tabBarUnderlineStyle={styles.tabBarUnder} initialPage={6}>
  
          {/* Tab */}
          <Tab heading={<TabHeading style={styles.TabHeading}>
            <Text style={styles.TabText}>فديوهات</Text>
          </TabHeading>}>
            <HomeScreen />
          </Tab>
  
          {/* Tab */}
          <Tab heading={<TabHeading style={styles.TabHeading}>
            <Text style={styles.TabText}>مقالات</Text>
          </TabHeading>}>
            <HomeScreen />
          </Tab>
  
          {/* Tab */}
          <Tab heading={<TabHeading style={styles.TabHeading}>
            <Text style={styles.TabText}>أخبار عالمية</Text>
          </TabHeading>}>
            <HomeScreen />
          </Tab>
  
          {/* Tab */}
          <Tab heading={<TabHeading style={styles.TabHeading}>
            <Text style={styles.TabText}>إقتصاد</Text>
          </TabHeading>}>
            <HomeScreen />
          </Tab>
  
          {/* Tab */}
          <Tab heading={<TabHeading style={styles.TabHeading}>
            <Text style={styles.TabText}>مجتمع</Text>
          </TabHeading>}>
            <HomeScreen />
          </Tab>
  
          {/* Tab */}
          <Tab heading={<TabHeading style={styles.TabHeading}>
            <Text style={styles.TabText}>رياضة</Text>
          </TabHeading>}>
            <HomeScreen />
          </Tab>
  
          {/* Tab */}
          <Tab heading={<TabHeading style={styles.TabHeading}>
            <Text style={styles.TabText}>أخر الأخبار</Text>
          </TabHeading>}>
            <HomeScreen />
          </Tab>
        </Tabs>
      </Container>
    );
   }
  
}