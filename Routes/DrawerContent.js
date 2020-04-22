
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

// import the images
import logo from '../assets/logo.png';
import streaming from '../assets/icons/streaming.png'

// StyleSheets

const styles = StyleSheet.create({
    TopContent: {
        backgroundColor: '#0084ff',
        paddingVertical: 10,
        height: 160,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    LinkView: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    LinkIcon: {
        width: 30,
        height: 30,
        paddingHorizontal: 10,
    },
    LinkTitle: {
        paddingHorizontal: 5,
        fontSize: 17
    }



});

// Drawer content

class DrawerContent extends React.Component {

    render() {
        //navigation prop
        const navigation = this.props.navigation;
        return (
            <View>
                <View style={styles.TopContent} >
                    <Image source={logo} style={{ width: 100, height: 100 }} />
                    <Text style={{ color: '#fff', fontSize: 13 }}>Version 1.0</Text>
                </View>
                <TouchableHighlight onPress={() => navigation.navigate('ExtraScreen')}>
                    <View style={styles.LinkView} >
                        <Image source={streaming} style={styles.LinkIcon} />
                        <Text style={styles.LinkTitle}>Chaînes en direct</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}


// Main  view of the component of The Header and full screen Menu



export default withNavigation(DrawerContent);