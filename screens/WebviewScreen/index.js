import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class WebViewScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://sametham.kite.kerala.gov.in/search/districtWiseSchools/4'}}
        style={{marginTop: -77,backgroundColor:'#dc143c',marginHorizontal:-9,marginVertical:-70}}
      />
    );
  }
}
export default  WebViewScreen;