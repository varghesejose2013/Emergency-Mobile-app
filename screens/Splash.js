import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Body, Icon, Left, Button,Item} from 'native-base';
import { Image,View, Text, ImageBackground, Dimensions, StatusBar} from 'react-native';
import { material,robotoWeights,human } from 'react-native-typography';
import styles1 from './styles1';
import { Col, Row, Grid } from 'react-native-easy-grid';
const logo = require("../assets/images/bg.jpg");
export default class HomeScreen extends React.Component {

    componentDidMount(){
        setTimeout(()=>{this.setTimePassed();},2000);}

        setTimePassed(){
                this.props.navigation.navigate('Main');
        }

    

  render() {

    
    return (
        <ImageBackground source={require('../assets/images/bg.jpg')} style={styles1.imageContainer}>
        <View style={{marginTop:"145%",alignItems:'center'}}>
        
        <Text style={material.caption}>Developed By IT Department Alappuzha</Text>
        <StatusBar
          backgroundColor="#192A56"
          barStyle="light-content"
        />
      </View>
      
      </ImageBackground>
    );
  }
}