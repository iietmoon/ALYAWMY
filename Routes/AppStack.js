import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AppScreen from '../Screens/AppScreen';
import ExtraScreen from '../Screens/ExtraScreen';
import ArticleScreen from '../Screens/ArticleScreen';
import BackHeader from '../Routes/BackHeader';
import ArtHeader from '../Routes/ArtHeader';



const screens = {
  AppScreen: {
    screen: AppScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  ExtraScreen: {
    screen: ExtraScreen,
    navigationOptions: {
      header: () => <BackHeader />,
    }

  },
  ArticleScreen: {
    screen: ArticleScreen,
    navigationOptions: {
      header: () => <ArtHeader/>,
    }

  },


}




const AppStack = createStackNavigator(screens);

export default AppStack;