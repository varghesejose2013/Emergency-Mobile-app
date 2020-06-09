import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Left,Title } from "native-base";
import { ScrollView,TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
      <Header style={styles.header} >
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
    <Icon name ="home-circle" size={40} color="#fff8dc" style={{marginTop:'20%'}} />
      </TouchableOpacity>
            <Left style={{flex:1}}></Left> 
            <Body style={{flex:2,marginTop:'3%'}}>
            <Title style={styles.headerText}>ABOUT</Title>
            </Body>
          </Header> 
        
       
              <Body>
              <ScrollView>
                
              <Text style={styles.koode}>   
  This is a android mobile application introduced by district administration Alappuzha.this is a userfriendly mobile application ,which is helpful in  condition such as flood,natural calamities.
                </Text> 

<Text></Text>

                <Text>     Special Control room had been functional in the District HQ 24×7.</Text>
               <Text> Control Room Nos. : 04772238630</Text>
                 <Text>                                   :  1077 </Text>
              
                </ScrollView>
              </Body>
            
      </Container>
    );
  }
}