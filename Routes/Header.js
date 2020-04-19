//Import the React native
import React, { Component, useState } from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View, Alert, Image, Switch, CheckBox, ScrollView } from 'react-native';

// import the images
import logo from '../assets/logo.png';
import logo_blue from '../assets/logo_blue.png';
import menu from '../assets/icons/menu.png';
import search from '../assets/icons/search.png';
import close_blue from '../assets/icons/close_blue.png';

//import from react-native-elements
import { Header, } from 'react-native-elements';

//  import the components
import HeaderContent from '../Routes/content/HeaderContent';

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

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

export default function MainHeader() {

  // Fanction of display and close the full Screen Menu
  const [modalVisible, setModalVisible] = useState(false);

  // Return Method
  return (

    // Start " JSX of Component"
    <View>

      {/* Header View */}
      <Header

        backgroundColor={'#0084ff'}
        // Search Icon
        leftComponent={<Image source={search} style={{ width: 27, height: 27 }} />}
        // Logo Icon
        centerComponent={<Image source={logo} style={{ width: 80, height: 80 }} />}
        // Menu Icon
        rightComponent={<TouchableHighlight onPress={() => { setModalVisible(true); }}>
          <Image source={menu} style={{ width: 35, height: 35 }} />
        </TouchableHighlight>}
      />

      {/* Header End */}

      {/* Full Screen Menu View */}

      {/* Start of the Modal */}
      <Modal

        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>

        {/* Menu Content */}
        <View style={styles.modalContent}>

          {/* Shape header : the white view */}
          <View style={styles.shape} >

            {/* empty view to adjust the header */}
            <View style={{ width: 23, height: 23, }}  >
            </View>

            {/* the logo */}
            <View >
              <Image source={logo_blue} style={{ width: 80, height: 80, }} />
            </View>

            {/* close icon */}
            <View >
              <TouchableHighlight onPress={() => { setModalVisible(!modalVisible); }}>
                <Image source={close_blue} style={{ width: 23, height: 23, }} />
              </TouchableHighlight>
            </View>


          </View>

          {/* HeaderContent  */}
          <ScrollView>
            <HeaderContent />
          </ScrollView>

        </View>
      </Modal>
    </View>
  );
}

