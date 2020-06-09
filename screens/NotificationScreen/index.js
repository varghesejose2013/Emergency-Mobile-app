import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import{Card,CardItem,Header, Left, Body, Right, Title,Container,Button,Content} from 'native-base';
import { material,robotoWeights,human } from 'react-native-typography';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon1 from 'react-native-vector-icons/dist/Octicons';
export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state= {
      isLoading:true,
      dataSource:[]
    };
    
  }
  getUserFromApi= ()  => {
     return(fetch("http://koode.ml/Notifications/nott")
     
       .then(response =>response.json())
       .then(responseJson =>{
         this.setState({
           isLoading:false,
           dataSource:this.state.dataSource.concat(responseJson)
         });
       })
       .catch(error => console.log(error))
     )
  };
  _keyExtractor=(datasource,index) => datasource.email;
  componentDidMount(){
    this.getUserFromApi();
  }

  render() {
    
    if(this.state.isLoading){
    
      return(
        
        <View style={styles.progress}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
      return(
          
      
        <FlatList
        data={this.state.dataSource}
        keyExtractor={this._keyExtractor}
        renderItem ={({item})=>(
        
          
          <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
               
                <Body>
                  <Text style={[robotoWeights.condensedBold, styles.para]}>{item.newshead}</Text>
                  <Text style={material.caption}>{"\n"}<Icon name='calendar' size={20} ></Icon>{"\t"}   {item.date} {"\t"}<Icon1 name='watch' size={20}></Icon1>  {item.time} </Text>
                </Body>
              </Left>
            </CardItem>                                   
            <CardItem>
              <Body>
              <Image 
              style={styles.profilepic}
              source={{
                uri:item.picture
              }}
              />
                <Text>
                  {item.title}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                </Button>
              </Left>
            </CardItem>
          </Card>
          </Content>
     
        )}
         />
      );
      
    }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profilepic:{
    flex:1,
    height:200,
    width:300,
   alignItems:'center'
  },
  userinfo:{
    flex:5,
    flexDirection:"column",
    marginStart:25
  },
  progress:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },
  para:{
    color:'#191970'

  },
});