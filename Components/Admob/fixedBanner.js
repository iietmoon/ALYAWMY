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
        backgroundColor: '#dee2e6',
        position: "absolute",
        bottom: 0,
        height: 63,
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
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-2406276559366897/2211929594"
          // Test ID, Replace with your-admob-unit-id
          testDeviceID="EMULATOR"
        />
      </View>
  )
}
export default withNavigation(FixedBanner)
