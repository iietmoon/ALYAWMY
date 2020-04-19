
//Import the lebrarires
import React, { Component, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, Modal, View, Image, Switch, Linking, Alert, ScrollView, TouchableHighlight } from 'react-native';
import iemoLogo from '../../assets/icons/iemo-logo-white.png';

// import the Compnents 
import NewsSource from './Component/Source';
import Advertise from './Component/Advertise';
import Channels from './Component/Channels';
import Contact from './Component/Contact';
import Newslatter from './Component/Newslatter';
import PrivacyPolicy from './Component/PrivacyPolicy';
import Share from './Component/Advertise';
import DarkMode from './Component/DarkMode';
import NotifyingMode from './Component/NotifyingMode';

// StyleSheets

const styles = StyleSheet.create({

     contentView: {
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
     },
     TextView: {
          flexDirection: 'row',
          paddingVertical: 10,
          alignItems: 'center',
     },
     TextTitle: {
          fontSize: 14,
          fontWeight: '500',
          color: '#bdbdbd',
          fontFamily: 'Tajawal-Bold',
     },

});

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

export default function HeaderContent() {

     // Fanction of display and close the full Screen Menu
     const [modalVisible, setModalVisible] = useState(false);


     return (


          //Main Content View
          <View style={{ paddingTop: 40 }}>
               <View style={styles.contentView}>
                    <Text style={styles.TextTitle}>إعدادات سريعة</Text>
                    {/* the view */}
                    <DarkMode />
                    <NotifyingMode />
               </View>
               <View style={styles.contentView}>
                    <Text style={styles.TextTitle}>إعدادات سريعة</Text>
                    {/* the view */}
                    <Newslatter />
                    <NewsSource />
                    <Channels />
               </View>
               <View style={styles.contentView}>
                    <Text style={styles.TextTitle}>إعدادات سريعة</Text>
                    {/* the view */}
                    <Advertise />
                    <PrivacyPolicy />
                    <Contact />
                    <Share />

               </View>



               {/* Copyright */}
               <View style={{ paddingVertical: 13, alignItems: 'center', opacity: 0.3 }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Tajawal-Bold', color: '#fff', }} onPress={() => Linking.openURL("https://by-iemo.com")}>
                         Developed by <Image source={iemoLogo} style={{ width: 40, height: 40, paddingLeft: 15 }} />
                    </Text>
               </View>



          </View>
          // end of Main Content View
     );
}
