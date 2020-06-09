import React, { Component } from 'react';
import { Container, Header,Content, List, ListItem, Text, Left, Right,Body,Title } from 'native-base';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon1 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
export default class ListItemSelectedExample extends Component {
  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'#191970'}} >
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
  <Icon1 name ="home-circle" size={40} color="#fff8dc" style={{marginTop:'20%'}} />
    </TouchableOpacity>
    <Right style={{flex:1}}></Right> 
    <Body style={{flex:4,marginTop:'3%'}}>
    <Title style={{marginRight:'-30%'}}>KUTTANAD</Title>
    </Body>
  </Header> 
        <Content>
          <List>
            <ListItem >
              <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
                <Text>Champakulam</Text>
                </TouchableOpacity>
              </Left>
              <TouchableOpacity>
              <Right>
               <Icon name="arrow-forward"  size={20}/>
                
              </Right>
              </TouchableOpacity>
            </ListItem>
            
            <ListItem>
             <Left>
             <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
                <Text>Edathva</Text>
                </TouchableOpacity>
              </Left>
              <TouchableOpacity>
              <Right>
                <Icon name="arrow-forward" size={20} />
              </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
                <Text>Kainakari Vadakku</Text>
                </TouchableOpacity>
              </Left>
              <Right>
                <Icon name="arrow-forward" size={20} />
              </Right>
            </ListItem>
            <ListItem>
            <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
               <Text>Kainakari Thekku</Text>
               </TouchableOpacity>
             </Left>
             <Right>
               <Icon name="arrow-forward" size={20} />
             </Right>
           </ListItem>
           <ListItem>
           <Left>
           <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
              <Text>Kavalam</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Icon name="arrow-forward" size={20} />
            </Right>
          </ListItem>
          <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kunnumma</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Muttar</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Nedumudi</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Neelamperur</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Pulinkunnu</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Ramankari</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Thakazhi</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Thalavadi</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Veliyanadu</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}








       
          
          
          
       