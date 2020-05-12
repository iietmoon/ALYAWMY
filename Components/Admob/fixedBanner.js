// import the  libraries 
import React from 'react'
import { View, StyleSheet} from 'react-native'
// import Admob 
import { AdMobBanner, } from 'expo-ads-admob'
// import the Components
import { withNavigation } from 'react-navigation'

// Stylesheet
const styles = StyleSheet.create({
    bottomBanner: {
        paddingTop:3,
        paddingBottom: 3,
        backgroundColor: '#f8f9fa',
        position: "absolute",
        alignContent: 'center',
        bottom: 0,
        height: 56,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
         	height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      },
})

// The main screen
function FixedBanner() {
  return (
      <View style={styles.bottomBanner}>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-2406276559366897/2211929594"
          // Test ID, Replace with your-admob-unit-id
        />
      </View>
  )
}
export default withNavigation(FixedBanner)
