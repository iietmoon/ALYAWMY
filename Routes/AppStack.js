import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import AppScreen from '../Screens/AppScreen';
import ExtraScreen from '../Screens/ExtraScreen';
import ArticleScreen from '../Screens/ArticleScreen';
import MainHeader from '../Routes/Header';
import BackHeader from '../Routes/BackHeader';
import ArtHeader from '../Routes/ArtHeader';
import SearchHead from '../Routes/Search'
import SearchScreen from '../Screens/SearchScreen';
import PrivacyPolicy from '../Screens/PrivacyPolicy';



const screens = {
  AppScreen: {
    screen: AppScreen,
    navigationOptions: {
      header: () => <MainHeader />,
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
      header: () => <ArtHeader />,
    }
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      header: () => <SearchHead />,
    }
  },
  PrivacyPolicy: {
    screen: PrivacyPolicy,
    navigationOptions: {
      header: () => <BackHeader />,
    }

  },


}

const AppStack = createStackNavigator(screens);

export default AppStack;