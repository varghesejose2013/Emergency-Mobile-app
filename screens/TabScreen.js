import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs ,Left, Body, Right, Title,ScrollableTab} from 'native-base';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
import Tab4 from './Tabs/tab4';
import Tab5 from './Tabs/tab5'; 
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {TouchableOpacity} from 'react-native';
export default class TabsScrollableExample extends Component {
    render() {
      return (
        <Container>
        <Header style={{backgroundColor:'#191970'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Vam")}>
    <Icon name ="md-arrow-back" size={30} color="#fff8dc" style={{marginTop:'55%'}} />
      </TouchableOpacity>
        <Left style={{flex:1}}></Left> 
        <Body style={{flex:4,marginTop:'3%'}}>
        <Title>ALAPPUZHA WEST</Title>
        </Body>
      </Header> 
          
          <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab activeTabStyle={{backgroundColor:'#ff6347'}} heading="Medical Team">
              <Tab1 />
            </Tab>
            <Tab activeTabStyle={{backgroundColor:'#663399'}} heading="Task Force">
              <Tab2 />
            </Tab>
            <Tab activeTabStyle={{backgroundColor:'#ff1493'}} heading="Equipment">
              <Tab3 />
            </Tab>
            <Tab activeTabStyle={{backgroundColor:'#008080'}} heading="Man Power">
              <Tab4 />
            </Tab>
            <Tab activeTabStyle={{backgroundColor:'#dc143c'}} heading="Blood Donation">
              <Tab5 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }
  