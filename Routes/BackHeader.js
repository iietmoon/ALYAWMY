//Import the React native
import React, { Component, useState } from 'react';
import { StyleSheet, Share, Text, TouchableOpacity, View, Alert, Image, Switch, CheckBox, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
// import the images
import back from '../assets/icons/back.png';

//import from react-native-elements
import { Header, } from 'react-native-elements';

//  import the components
import HeaderContent from './content/HeaderContent';

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
        fontSize: 18,
        color: '#fff'
    }
});

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

 function BackHeader({ navigation }) {

    const Title =  navigation.getParam('title');
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
                centerComponent={ <Text style={styles.Title}>{Title}</Text> }

            />

            {/* Header End */}

            {/* Full Screen Menu View */}

            {/* Start of the Modal */}
        </View>
    );
}

export default withNavigation(BackHeader);