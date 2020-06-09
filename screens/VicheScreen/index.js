import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right,Body,Title } from 'native-base';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon1 from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default class ListItemSelectedExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#191970'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
    <Icon1 name ="home-circle" size={40} color="#fff8dc" style={{marginTop:'20%'}} />
      </TouchableOpacity>
      <Right style={{flex:1}}></Right> 
      <Body style={{flex:5,marginTop:'3%'}}>
      <Title style={{marginRight:'-30%'}}>CHENGANNUR</Title>
      </Body>
    </Header> 
        <Content>
          <List>
            <ListItem >
              <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
                <Text>Ala</Text>
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
                <Text>Chengannur</Text>
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
                <Text>Cheriyanadu</Text>
                </TouchableOpacity>
              </Left>
              <Right>
                <Icon name="arrow-forward" size={20} />
              </Right>
            </ListItem>
            <ListItem>
            <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
               <Text>Ennakkad</Text>
               </TouchableOpacity>
             </Left>
             <Right>
               <Icon name="arrow-forward" size={20} />
             </Right>
           </ListItem>
           <ListItem>
           <Left>
           <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
              <Text>Kurattissery</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Icon name="arrow-forward" size={20} />
            </Right>
          </ListItem>
          <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Mannar</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Mulakkuzha</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Pandanadu</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Puliyur</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Thiruvanvandur</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Venmani</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}








       
          
          
          
       