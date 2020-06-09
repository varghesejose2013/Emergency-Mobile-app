import React, { Component } from 'react';
import { Container, Header, Content, Button, Text,Left,Body,Title} from 'native-base';
import {Image, View, TouchableOpacity, Alert, AsyncStorage, StyleShee,ImageBackground} from 'react-native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Helper from '../../assets/images/helper.png';
export default class ButtonFullExample extends Component {
  render() {
    return (
      <Container>
      <Header style={styles.header} >
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
    <Icon name ="home-circle" size={40} color="#fff8dc" style={{marginTop:'20%'}} />
      </TouchableOpacity>
      <Left style={{flex:1}}></Left> 
      <Body style={{flex:5,marginTop:'3%'}}>
      <Title style={styles.headerText}>TALUKS</Title>
      </Body>
        </Header>  
        <TouchableOpacity >
        <Button full light style={{ backgroundColor:'#fffafa'}} onPress={() => this.props.navigation.navigate("Vam")}>
        <Text>Ambalappuzha</Text>
         </Button>
         </TouchableOpacity>
         <TouchableOpacity>
         <Button full light style={{ backgroundColor:'#fffafa'}} onPress={() => this.props.navigation.navigate("Vch")}>
        <Text>chengannur</Text>
         </Button>
         </TouchableOpacity>
         <TouchableOpacity>
         <Button full light style={{ backgroundColor:'#fffafa'}} onPress={() => this.props.navigation.navigate("Vcr")}>
        <Text>cherthala</Text>
         </Button>
         </TouchableOpacity>
         <TouchableOpacity>
         <Button full light style={{backgroundColor:'#fffafa'}} onPress={() => this.props.navigation.navigate("Vka")}>
        <Text>karthikapally</Text>
         </Button>
         </TouchableOpacity>
         <TouchableOpacity>
         <Button full light style={{ backgroundColor:'#fffafa'}} onPress={() => this.props.navigation.navigate("Vku")}>
        <Text>kuttanad</Text>
         </Button>
         </TouchableOpacity>
         <TouchableOpacity>
         <Button full light style={{backgroundColor:'#fffafa'}} onPress={() => this.props.navigation.navigate("Vma")}>
        <Text>mavelikkara</Text>
         </Button>
         </TouchableOpacity>
 <ImageBackground source={Helper} style={{width: '90%', height: '60%',marginLeft:'10%',marginBottom:'10%',marginTop:'5%'}}>
            
 </ImageBackground>
          
        
      </Container>
    );
  }
}