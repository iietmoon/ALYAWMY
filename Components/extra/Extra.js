
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Alert, Modal, TouchableHighlight, ImageBackground } from "react-native";
import covideBg from '../../assets/Content/CovideBg.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
// StyleSheets

const styles = StyleSheet.create({
  View: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    height: 70,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 3.80,
    elevation: 5,
  },
  BgView: {
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
  },
  ViewImg: {
    width: 80,
    height: 130,
  },
});

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

class Extra extends Component {

  //start of the fetch of data from News API
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    }
  }

  componentDidMount() {
    return fetch('https://apps.by-iemo.com/alyawmy-extra-component-data.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.Extra,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }
  

  render() {
    const navigation= this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View>

        </View>
      )
    }
    else {
      let Articles = this.state.data.map((val, key) => {
        return <View key={key}>

          {/* The View of the Article */}
          <View style={styles.View} >
            <TouchableOpacity onPress={() => navigation.navigate('ExtraScreen',{url: val.Url , title: val.Title })} activeOpacity={1}>
              <ImageBackground style={styles.BgView} source={{ uri: val.Bg }} imageStyle={{ borderRadius: 5 }} >
                <View>
                  <Text style={styles.ViewText}></Text>
                  <Text style={styles.ViewText}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          {/* The End */}
        </View>
      });


      return (
        <View >
          {Articles}
        </View>

      )
    }

  }
}


export default withNavigation(Extra);
