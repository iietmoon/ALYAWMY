import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground, Share, Linking } from 'react-native'
import { withNavigation } from 'react-navigation'
import { LinearGradient } from 'expo-linear-gradient'

// import the images
import logo from '../assets/logo.png'
import streaming from '../assets/icons/streaming.png';
import mail from '../assets/icons/mail.png';
import internet from '../assets/icons/internet.png';
import megaphone from '../assets/icons/megaphone.png';
import shared from '../assets/icons/shared.png';
import shield from '../assets/icons/shield.png';
import developer from '../assets/icons/web-development.png';
import searchEngine from '../assets/icons/search_engine.png';

// StyleSheets

const styles = StyleSheet.create({
  BgView: {
    paddingVertical: 10,
    height: 160
  },
  Titles:{
    paddingTop: 25,
    paddingHorizontal: 20,
    color: '#adb5bd',
    fontFamily: 'Tajawal-Bold',
    fontSize: 15,
  },
  LinkView: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  LinkIcon: {
    width: 25,
    height: 25,
    paddingHorizontal: 10
  },
  LinkTitle: {
    paddingHorizontal: 5,
    fontSize: 17,
    color: '#1d1927',
    fontFamily: 'Tajawal-Bold',
  }

})

// Drawer content

class DrawerContent extends React.Component {

  render () {
    // navigation prop
    const urlValue ="https://alyawamy.by-iemo.com/privacy-policy.html"
    const navigation = this.props.navigation;
    const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'قم بتحميل أفضل تطبيق للأخبار المغربية و العالمية حصريا عند اليومي https://api.by-iemo.com/alyawmy',
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
    return (
      <View>
        <ImageBackground style={styles.BgView} source={{ uri: 'https://images.pexels.com/photos/3049885/pexels-photo-3049885.jpeg?cs=srgb&dl=people-at-the-plaza-3049885.jpg&fm=jpg' }}>
          <LinearGradient colors={['transparent', '#0084ff']} style={{justifyContent: 'center',alignItems: 'center', height: 160 }}>
            <Image source={logo} style={{ width: 70, height: 70 }} />
            <Text style={{ color: '#fff', fontSize: 13 }}>
              Version 1.0
            </Text>
          </LinearGradient>
        </ImageBackground>
        <View>
          <Text style={styles.Titles}>
            Plus de contenu
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://alyawamy.by-iemo.com')} activeOpacity={0.9}>
            <View style={styles.LinkView}>
              <Image source={streaming} style={styles.LinkIcon} />
              <Text style={styles.LinkTitle}>
                Chaînes en direct
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://alyawamy.by-iemo.com')} activeOpacity={0.9}>
            <View style={styles.LinkView}>
              <Image source={mail} style={{width:20 , height: 20, paddingHorizontal: 10}} />
              <Text style={styles.LinkTitle}>
                Actualités par email
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.Titles}>
            À propos de nous
          </Text>
          <TouchableOpacity  onPress={() => Linking.openURL('https://alyawamy.by-iemo.com')} activeOpacity={0.9}>
            <View style={styles.LinkView}>
              <Image source={megaphone} style={styles.LinkIcon} />
              <Text style={styles.LinkTitle}>
                  Annoncez dans l'application
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy', {title: 'Politique de...' })}activeOpacity={0.9}>
            <View style={styles.LinkView}>
              <Image source={shield} style={{width:20 , height: 20, paddingHorizontal: 10}} />
              <Text style={styles.LinkTitle}>
                  Politique de confidentialité
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <View style={styles.LinkView}>
              <Image source={shared} style={{width:20 , height: 20, paddingHorizontal: 10}} />
              <Text style={styles.LinkTitle}>
                 Partager l'application
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/by_iemo/')} activeOpacity={0.9}>
            <View style={styles.LinkView}>
              <Image source={developer} style={{width:20 , height: 20, paddingHorizontal: 10}} />
              <Text style={styles.LinkTitle}>     
                Développé par IEMO
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft:5}} >
          <Image source={searchEngine} style={{width:213 , height: 160,}} />
        </View>
 
      </View>
    )
  }
}

// Main  view of the component of The Header and full screen Menu

export default withNavigation(DrawerContent)
