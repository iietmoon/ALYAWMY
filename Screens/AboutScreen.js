
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Import the native-base
import { Container, Header, Content, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';

import { WebView } from 'react-native-webview';


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
    backgroundColor: '#fff',

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



export default function AboutScreen({Navigation}) {
  return (
    <Container style={styles.TabContainer}>
    <Tabs tabBarUnderlineStyle={styles.tabBarUnder} >
    <Tab heading={<TabHeading style={styles.TabHeading}>
        <Text style={styles.TabText}>أخر الأخبار</Text>
      </TabHeading>}>
      <WebView
       source={{ uri: 'https://logrocket.com/' }}
       style={{ marginTop: 20 }}
       />
      </Tab>
      {/* Tab */}
      <Tab heading={<TabHeading style={styles.TabHeading}>
        <Text style={styles.TabText}>أخر الأخبار</Text>
      </TabHeading>}>
      <WebView
       source={{ uri: 'https://logrocket.com/' }}
       style={{ marginTop: 20 }}
       />
      </Tab>
    </Tabs>
  </Container>

      
    
  );
}