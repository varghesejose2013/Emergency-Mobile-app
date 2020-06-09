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
    <Title style={{marginRight:'-30%'}}>KARTHIKAPALLY</Title>
    </Body>
  </Header> 
        <Content>
          <List>
            <ListItem >
              <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
                <Text>Arattupuzha</Text>
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
                <Text>Cheppad</Text>
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
                <Text>Cheruthana</Text>
                </TouchableOpacity>
              </Left>
              <Right>
                <Icon name="arrow-forward" size={20} />
              </Right>
            </ListItem>
            <ListItem>
            <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
               <Text>Chingoli</Text>
               </TouchableOpacity>
             </Left>
             <Right>
               <Icon name="arrow-forward" size={20} />
             </Right>
           </ListItem>
           <ListItem>
           <Left>
           <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
              <Text>Harippad</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Icon name="arrow-forward" size={20} />
            </Right>
          </ListItem>
          <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kandallur</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Karthikappally</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Karuvatta</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kayamkulam</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Keerikkad</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Krishnapuram</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kumarapuram</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Muthukulam</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Pallippad</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
         <Left>
         <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
            <Text>Pathiyur</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon name="arrow-forward" size={20}/>
          </Right>
        </ListItem>
        <ListItem>
        <Left>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
           <Text>Puthuppally</Text>
           </TouchableOpacity>
         </Left>
         <Right>
           <Icon name="arrow-forward" size={20}/>
         </Right>
       </ListItem>
       <ListItem>
       <Left>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
              <Text>Thrikkunnapuzha</Text>
          </TouchableOpacity>
        </Left>
        <Right>
          <Icon name="arrow-forward" size={20}/>
        </Right>
      </ListItem>
      <ListItem>
      <Left>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
         <Text>Veeyapuram</Text>
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








       
          
          
          
       