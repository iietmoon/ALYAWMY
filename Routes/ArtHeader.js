//Import the React native
import React, { Component, useState } from 'react';
import { StyleSheet, Share, TouchableOpacity, View, Alert, Image, Switch, CheckBox, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text } from 'native-base';
// import the images
import back from '../assets/icons/back.png';
import share from '../assets/icons/share.png'

//import from react-native-elements
import { Header, } from 'react-native-elements';



// StyleSheets

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0084ff',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title:{
        fontSize: 17,
        color: '#fff'
    }
});

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

 function ArtHeader({ navigation }) {

    const Title =  navigation.getParam('title');
    const UrlShare = navigation.getParam('Url');
    const message = "Lire l'article sur Alyawmy";
    const download= "Télécharger Alyawmy sur https://api.by-iemo.com/alyawmy"
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: message+"\n"+UrlShare + "\n" + download,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    // Return Method
    return (

        // Start " JSX of Component"
        <View>

            {/* Header View */}
            <Header

                backgroundColor={'#0084ff'}
                // Back Icon
                leftComponent={<TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={1}>
                 <Image source={back} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>}
                
                // Title
                centerComponent={<Text numberOfLines={1} style={styles.Title} > {Title} </Text>}


                rightComponent={ <TouchableOpacity onPress={onShare}> 
                <Image source={share} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
                 }

            />

            {/* Header End */}

            {/* Full Screen Menu View */}

            {/* Start of the Modal */}
        </View>
    );
}

export default withNavigation(ArtHeader);