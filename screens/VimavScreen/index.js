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
    <Body style={{flex:5,marginTop:'3%'}}>
    <Title style={{marginRight:'-30%'}}>MAVELIKKARA</Title>
    </Body>
  </Header> 
        <Content>
          <List>
            <ListItem >
              <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
                <Text>Bharanikkavu</Text>
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
                <Text>Chennithala</Text>
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
                <Text>Chunakkara</Text>
                </TouchableOpacity>
              </Left>
              <Right>
                <Icon name="arrow-forward" size={20} />
              </Right>
            </ListItem>
            <ListItem>
            <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
               <Text>Kannamangalam</Text>
               </TouchableOpacity>
             </Left>
             <Right>
               <Icon name="arrow-forward" size={20} />
             </Right>
           </ListItem>
           <ListItem>
           <Left>
           <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
              <Text>Kattanam</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Icon name="arrow-forward" size={20} />
            </Right>
          </ListItem>
          <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Mavelikkara</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Nooranad</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Palamel</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Peringala</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Thamarakkulam</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Thazhakkara</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Thekkekkara</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Thripperunthura	</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Vallikunnam</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Vettiyar</Text>
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








       
          
          
          
       