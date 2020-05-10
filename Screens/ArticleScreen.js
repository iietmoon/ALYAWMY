
import React from 'react';
import { WebView } from 'react-native-webview';
import { withNavigation } from 'react-navigation';

// Main  view of the component of The Header and full screen Menu

class ArticleScreen extends React.Component {

  render() {
    const navigation = this.props.navigation;
    const WebVurl = navigation.getParam('Url');
    return (

      <WebView source={{ uri: WebVurl }} style={{ marginTop: 0 }} />


    );
  }
}






export default withNavigation(ArticleScreen);