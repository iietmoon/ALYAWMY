
import React, { Component, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import { withNavigation } from 'react-navigation';
import { Text, Thumbnail } from 'native-base';
import moment from 'moment/min/moment-with-locales'
import Thumb from '../../assets/Default_Image_Thumbnail.png'
// StyleSheets

const styles = StyleSheet.create({
  DfView: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 100,
    backgroundColor: '#eee',
    justifyContent: 'flex-end'
  },
  DfTitle: {
    backgroundColor: '#dfdfdf',
    borderRadius: 2
  },
  DfLink: {
    backgroundColor: '#dfdfdf',
    borderRadius: 2,
    marginTop: 3,
    width: 100

  },
  View: {
    marginVertical: 7,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    height: 110,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  ArtView: {
    borderRadius: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'

  },
  LeftView: {
    width: 100,
  },
  RightView: {
    paddingHorizontal: 15,
    width: 215,
    alignContent: "center"
  },
  ArtImg: {
    width: 100,
    height: 90,
    borderRadius: 5,
  },
  ArtThumb: {
    width: 90,
    height: 80,
    borderRadius: 5,
  },

  ArtTitle: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 16,
    color: '#000'
  },
  ArtSrc: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 14,
    color: '#aeaeae'
  },
});

// javascript fuctions



// Main  view of the component of The Header and full screen Menu

class ArticlesView extends Component {

  //start of the fetch of data from News API
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      loadingImage: false
    }
  }

  componentDidMount() {
    return fetch('http://newsapi.org/v2/top-headlines?country=ma&category=technology&apiKey=20ae5207876d4e41a85823e9d12ca0dc')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          loadingImage: true,
          data: responseJson.articles,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {

    const navigation = this.props.navigation;

    if (this.state.isLoading) {
      return (
        <View>
          <View style={styles.DfView}>
            <View style={styles.DfTitle}>
              <Text></Text>
            </View>
            <View style={styles.DfLink}>
              <Text></Text>
            </View>
          </View>
        </View>
      )
    }
    else {
      let Articles = this.state.data.map((val, key) => {
        return <View key={key} >
          <TouchableOpacity onPress={() => navigation.navigate('ArticleScreen', { Url: val.url, title: val.title })} activeOpacity={1}>
            {/* The View of the Article */}
            <View style={styles.View} >

              {/* The Content of the Article */}
              <View>

                {/* The first scetion */}
                <View style={styles.ArtView}>
                  {/* The Image of the Article */}
                  <View style={styles.LeftView}>
                    <ImageBackground source={Thumb} style={styles.ArtThumb} >
                      <Image style={styles.ArtImg} source={this.state.loadingImage ? { uri: val.urlToImage } : source(Thumb)} />
                    </ImageBackground>
                  </View>

                  {/* The Title / Source / share of the Article */}
                  <View style={styles.RightView}>

                    {/* The Title of the Article */}
                    <Text style={styles.ArtTitle} numberOfLines={3}>{val.title}</Text>
                    <Text style={styles.ArtSrc} numberOfLines={1}>{val.source.name} • {moment.locale('fr'), moment(val.publishedAt, "YYYYMMDD").fromNow()} </Text>


                  </View>
                </View>

                {/* end first scetion */}
              </View>

            </View>
            {/* The End */}
          </TouchableOpacity>
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


export default withNavigation(ArticlesView);