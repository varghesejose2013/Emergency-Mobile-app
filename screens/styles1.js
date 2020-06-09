const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 25,
    width: null,
    height: null
  },
  logoContainer: {
    marginTop: '80%',
    justifyContent:'center'
  },
  logo: {
    width: 530,
    height: 350,
  },
  container: {
    justifyContent: 'center',
},
itemStyleLogin: {
  borderBottomWidth: 0, 
  justifyContent:'center',
  marginTop:'10%'
},
itemStyleLogo: {
  borderBottomWidth: 0, 
  justifyContent:'center'
}
}