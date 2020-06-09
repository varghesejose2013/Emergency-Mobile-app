import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class WebfaceScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.facebook.com/KeralaStateDisasterManagementAuthorityksdma/'}}
        style={{marginTop: 10,backgroundColor:'#3b5998'}}
      />
    );
  }
}
export default  WebfaceScreen;