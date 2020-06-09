import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class WebweaScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://sdma.kerala.gov.in/fishermen-warning/'}}
        style={{marginTop: -110,backgroundColor:'#1287A5',marginBottom:-630}}
      />
    );
  }
}
export default  WebweaScreen;