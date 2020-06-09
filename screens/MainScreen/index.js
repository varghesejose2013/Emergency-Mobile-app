import React, {Component} from 'react';
import {Image,Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content,  Right, Title,  Body, } from 'native-base';
import Dance from '../../assets/images/dance.png';
import Rain from '../../assets/images/rain.png';
import styles from "./styles";
import Headset from '../../assets/images/headset.png';
import Icon from 'react-native-vector-icons/dist/Foundation';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/dist/MaterialIcons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import flood5 from '../../assets/images/flood5.jpg';
import flood3 from '../../assets/images/flood3.jpg';
import bgt from '../../assets/images/bgt.jpg';
import flood1 from "../../assets/images/flood1.jpg";
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
 
//import Carousel from 'react-native-smart-carousel';

const datacarousel = [
  {
      "id": 339964,
      "imagePath": bgt,
      
  },


  {
      "id": 339403,
      "imagePath": flood1
    
  },
  
{
  "id": 339457,
  "imagePath": flood3
},
  {
    "id": 339777,
    "imagePath": flood5
  },
];



export default class LoginScreen extends Component {
  
  render() {
    
    return (
      <Container>
        <Content>
          <Header style={styles.header} >
          <Title style={{flex:5,marginTop:'3%'}}/>
          <Title style={styles.headerText}>KOODE</Title>
          <Right style={{flex:8}}></Right>
          <Body style={{flex:3,marginTop:'3%'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("noti")}>
          <Icon5 name ="notifications-active" size={30} color="#fff8dc" style={{}} />
        </TouchableOpacity> 
            </Body>
            
            
           
          </Header> 
          <Grid>
          <Row style={{ height: '40%' }}>
                      <SwipeableParallaxCarousel data={datacarousel} autoPlay={true} playTime={3000} navigationType={'bars'} navigationColor='#FF3031' navigation='true'/>
          </Row>

</Grid>
         
          <View style={{flex: 1, flexDirection: 'row', marginTop: '8%'}}>
          <View style={{width: '33.3%', height: 100, alignItems:'center'}} >
         <TouchableOpacity onPress={() => this.props.navigation.navigate("About")}>
         <Icon4 name ="account-group" size={60} color="#000000" style={{marginTop:'4%'}} />
            <Text style={styles.about}>ABOUT US</Text>
            </TouchableOpacity> 
            </View>
          <View style={{width: '33.3%', height: 100,alignItems:'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Emergency")}>
          <Image source={Headset} style={{ width:70, height: 70,marginLeft:'15%'}}/>
            <Text style={styles.visit1}>EMERGENCY</Text>
            </TouchableOpacity> 
            
          </View>   
            
          <View style={{width: '44.3%', height: 100, alignItems:'center'}} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ekit")}>
          <Icon3 name ="first-aid-alt" size={50} color="#ff4500" style={{marginTop:'4%',marginRight:'10%',marginLeft:'4%'}} />
             <Text style={styles.eme}>EME KIT</Text>
             </TouchableOpacity> 
             </View>
            
          
          
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: '8%'}}>
          <View style={{width: '33.3%', height: 100, alignItems:'center'}} >
         <TouchableOpacity onPress={() => this.props.navigation.navigate("webface")}>
            <Image source={Dance} style={{ width:70, height: 70}}/>
            <Text style={styles.social}>SOCIAL MEDIA</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '33.3%', height: 100,alignItems:'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("webview")}>
        <Icon1 name ="institution" size={50} color="#0ABDE3" style={{marginTop:'10%'}} />
            <Text style={styles.visit}>SCHOOLS</Text>
            </TouchableOpacity>
           
            </View>
            <View style={{width: '33.3%', height: 100,alignItems:'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("webwea")}>
            <Image source={Rain} style={{ width:70, height: 70,marginLeft:'5%'}}/>
            <Text style={styles.weather}>WEATHER</Text>
            </TouchableOpacity> 
            
          </View> 
          
        </View>
       </Content>
       </Container>

       
         
    );
  }
}

