
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Alert, Modal, TouchableHighlight, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
import Thumb from '../../assets/Default_Image_Thumbnail.png'


// StyleSheets

const styles = StyleSheet.create({
    DfView: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 200,
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
    BannerView: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        height: 200,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 3.80,
        elevation: 5,
    },
    BgView: {
        height: 200,
    },
    OverlyView: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderRadius: 5,
    },
    insideView: {
        borderRadius: 5,

    },
    TitleView: {
        fontFamily: 'Tajawal-Bold',
        color: '#fff',
        fontSize: 20
    },
    SiteView: {
        fontFamily: 'Tajawal-Medium',
        color: '#bdbdbd',
        fontSize: 15
    }

});


// javascript fuctions



// Main  view of the component of The Header and full screen Menu

class TopHeadlines extends Component {

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
        return fetch('http://newsapi.org/v2/top-headlines?language=fr&apiKey=20ae5207876d4e41a85823e9d12ca0dc')
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
            let TopHeadlines = this.state.data.map((val, key) => {
                return <View key={key[3]}>
                    <View style={styles.BannerView}>
                        <ImageBackground style={styles.BgView}
                            source={{ uri: val.urlToImage }}
                            imageStyle={{ borderRadius: 5 }}>
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,1)']}
                                style={styles.OverlyView}>
                                <View style={styles.insideView}>
                                    <Text style={styles.TitleView}>
                                        {val.title}
                                    </Text>
                                    <Text style={styles.SiteView}>
                                        {val.source.name}
                                    </Text>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </View>

                </View>
            });


            return (
                <View style={{ flexDirection: 'row' }}>
                    {TopHeadlines}
                </View>
            )
        }

    }
}


export default withNavigation(TopHeadlines);