import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right,Body,Title } from 'native-base';
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
    <Title style={{marginRight:'-30%'}}>CHERTHALA</Title>
    </Body>
  </Header> 
        
        <Content>
          <List>
            <ListItem >
              <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
                <Text>Arookkutti</Text>
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
                <Text>Aroor</Text>
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
                <Text>Arthunkal</Text>
                </TouchableOpacity>
              </Left>
              <Right>
                <Icon name="arrow-forward" size={20} />
              </Right>
            </ListItem>
            <ListItem>
            <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
               <Text>Cherthala Vadakku</Text>
               </TouchableOpacity>
             </Left>
             <Right>
               <Icon name="arrow-forward" size={20} />
             </Right>
           </ListItem>
           <ListItem>
           <Left>
           <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
              <Text>Cherthala Thekku</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Icon name="arrow-forward" size={20} />
            </Right>
          </ListItem>
          <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Ezhupunna</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kadakkarappally</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kanjikuzhi</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kodamthuruthu</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kokkothamangalam</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Kuthiyathode</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"  size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Mararikkulam Vadakku</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Pallippuram</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward"size={20} />
           </Right>
         </ListItem>
         <ListItem>
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
             <Text>Panavally</Text>
             </TouchableOpacity>
           </Left>
           <Right>
             <Icon name="arrow-forward" size={20}/>
           </Right>
         </ListItem>
         <ListItem>
         <Left>
         <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
            <Text>Pattanakkad</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon name="arrow-forward" size={20}/>
          </Right>
        </ListItem>
        <ListItem>
        <Left>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
           <Text>Perumbalam</Text>
           </TouchableOpacity>
         </Left>
         <Right>
           <Icon name="arrow-forward" size={20}/>
         </Right>
       </ListItem>
       <ListItem>
       <Left>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
              <Text>Thanneermukkam  Vadakku</Text>
          </TouchableOpacity>
        </Left>
        <Right>
          <Icon name="arrow-forward" size={20}/>
        </Right>
      </ListItem>
      <ListItem>
      <Left>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
         <Text>Thanneermukkam Thekku</Text>
         </TouchableOpacity>
       </Left>
       <Right>
         <Icon name="arrow-forward" size={20}/>
       </Right>
     </ListItem>
     <ListItem>
     <Left>
     <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
        <Text>Thuravur Thekku</Text>
        </TouchableOpacity>
      </Left>
      <Right>
        <Icon name="arrow-forward" size={20}/>
      </Right>
    </ListItem>
    <ListItem>
    <Left>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
       <Text>Thaikkattusseri</Text>
       </TouchableOpacity>
     </Left>
     <Right>
       <Icon name="arrow-forward" size={20}/>
     </Right>
   </ListItem>
   <ListItem>
   <Left>
   <TouchableOpacity onPress={() => this.props.navigation.navigate("Ta")}>
      <Text>Vayalar East</Text>
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








       
          
          
          
       