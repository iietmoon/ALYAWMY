//Import the React native
import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

// import the images
import logo from '../assets/logo.png';
import menu from '../assets/icons/menu.png';
import search from '../assets/icons/search.png';

//import from react-native-elements
import { Header, } from 'react-native-elements';;

// StyleSheets

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0084ff',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#0084ff',
    height: 800
  },
  shape: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 0,
    backgroundColor: '#fff',
  },
});

// Main  view of the component of The Header and full screen Menu

class MainHeader extends Component {

  render() {
    //navigation prop
    const navigation = this.props.navigation;
    return (
      // Start " JSX of Component"
      <View>

        {/* Header View */}
        <Header

          backgroundColor={'#0084ff'}
          // Search Icon
          leftComponent={<TouchableHighlight activeOpacity={1} onPress={() => navigation.navigate('SearchScreen',{ title: 'search' })}>
                            <Image source={search} style={{ width: 27, height: 27 }} />
                         </TouchableHighlight>}
          // Logo Icon
          centerComponent={<Image source={logo} style={{ width: 80, height: 80 }} />}
          // Menu Icon
          rightComponent={<TouchableHighlight activeOpacity={1} onPress={() => navigation.openDrawer()}>
            <Image source={menu} style={{ width: 35, height: 35 }} />
          </TouchableHighlight>}
        />
      </View>
    )
  }
}
export default withNavigation(MainHeader);
