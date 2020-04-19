import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NewsScreen from '../Screens/NewsScreen';
import ExtraScreen from '../Screens/AboutScreen';



const screens = {
    
  NewsScreen: {
       screen: NewsScreen,
       navigationOptions: {
        headerShown: false,
      }
    },
    ExtraScreen:{
        screen: ExtraScreen,
    },

}




const NewsStack = createStackNavigator(screens);

export default createAppContainer(NewsStack);