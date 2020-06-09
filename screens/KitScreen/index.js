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
            <Body style={{flex:4,marginTop:'3%'}}>
            <Title style={styles.headerText}>EMERGENCY KIT</Title>
            </Body>
          </Header> 
          </Container>
          );
        }
      }