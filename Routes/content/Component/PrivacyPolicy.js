
//Import the lebrarires
import React, { Component, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, Modal, View, Image, Switch, Linking, Alert, ScrollView, TouchableHighlight } from 'react-native';
import policy from '../../../assets/icons/policy.png';
import back from '../../../assets/icons/back.png';

// StyleSheets

const styles = StyleSheet.create({


     TextView: {
          flexDirection: 'row',
          paddingVertical: 3,
          alignItems: 'center',
     },
     TextTitle: {
          fontSize: 14,
          fontWeight: '500',
          color: '#bdbdbd',
          fontFamily: 'Tajawal-Bold',
     },
     TextLink: {
          fontFamily: 'Tajawal-ExtraBold',
          fontSize: 16,
          color: '#fff',
          paddingHorizontal: 15,
     },
     TextImg: {
          width: 20,
          height: 20,
          paddingLeft: 20
     },
     ModalClose: {
          width: 25,
          height: 25,

     },
     ModalTop: {
          backgroundColor: '#0084ff',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15
     },
     ModalTopText: {
          fontFamily: 'Tajawal-Bold',
          fontSize: 17,
          color: '#fff'
     }

});

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

export default function PrivacyPolicy() {

     // Fanction of display and close the full Screen Menu
     const [modalVisible, setModalVisible] = useState(false);


     return (

          //Main Content View

          <View style={styles.TextView}>
               <TouchableHighlight onPress={() => { setModalVisible(true); }}>
                    <View style={styles.TextView}>
                         <Text style={styles.TextLink}>سياسة الخصوصية</Text>
                         <Image source={policy} style={styles.TextImg} />
                    </View>
               </TouchableHighlight>
               <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                         Alert.alert("Modal has been closed.");
                    }}
                    style={{ backgroundColor: '#fff' }}
               >

                    {/* View of Content */}
                    <View style={styles.ModalTop}>

                         <TouchableHighlight onPress={() => { setModalVisible(!modalVisible); }}>
                              <Image source={back} style={styles.ModalClose} />
                         </TouchableHighlight>

                         <Text style={styles.ModalTopText}>سياسة الخصوصية</Text>

                    </View>

               </Modal>

          </View>

          // end of Main Content View
     );
}
