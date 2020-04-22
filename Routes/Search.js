//Import the React native
import React from 'react';
import { StyleSheet, Share, Text, TouchableOpacity, View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
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

 function SearchHead({ navigation }) {

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
                 <Image source={back} style={{ width: 23, height: 23 }} />
                </TouchableOpacity>}
                centerComponent={<Text style={styles.Title}>Rechercher une source...</Text>}
                
            />
        </View>
    );
}

export default withNavigation(SearchHead);