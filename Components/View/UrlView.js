
import React, { useState, Component } from 'react';
import { View, Image, StyleSheet, Text, Alert, Modal, TouchableHighlight, ImageBackground } from "react-native";
import covideBg from '../../assets/Content/CovideBg.png';
import back from '../../assets/icons/back.png';
import { WebView } from 'react-native-webview';

// StyleSheets

const styles = StyleSheet.create({
  ModalClose: {
    width: 20,
    height: 20,

  },
  ModalTop: {
    backgroundColor: '#0084ff',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  ModalTopText: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 17,
    color: '#fff'
  }
});

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

export default class UrlView extends Component {
    constructor(props) {
        super(props);
      }
      
    
  

  render()  {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={{ backgroundColor: '#fff' }}
      >

        {/* View of Content */}
        <View style={styles.ModalTop}>

          <TouchableHighlight onPress={() => { setModalVisible(!modalVisible); }}>
            <Image source={back} style={styles.ModalClose} />
          </TouchableHighlight>

          <Text style={styles.ModalTopText}>{this.props.val.url}</Text>

        </View>
        <WebView source={{ uri: 'https://www.google.com/covid19-map/' }}  />
      </Modal>

    </View>


  );

}
}
