
//Import the lebrarires
import React, { Component, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, Modal, View, Image, Switch, Linking, Alert, ScrollView, TouchableHighlight } from 'react-native';
import live from '../../../assets/icons/live.png';
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

});

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

export default function NotifyingMode() {


    return (

        //Main Content View

        <View style={styles.TextView}>
            <View style={styles.TextView}>
                <Text style={styles.TextLink}>تفعيل التنبيهات</Text>
                <Switch />
            </View>
        </View>

        // end of Main Content View
    );
}
