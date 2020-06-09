import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import { material,robotoWeights } from 'react-native-typography';
import{Card,CardItem,Header, Left, Body, Right, Title,Container} from 'native-base';
import{TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Communications from 'react-native-communications';
import Icon1 from 'react-native-vector-icons/dist/MaterialIcons';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      isLoading:true,
      dataSource:[]
    };
    
  }
  getUserFromApi= ()  => {
     return(fetch("http://koode.ml/contacts/AMBALAPPUZHA/PAZHAVEEDU/MEDICAL")
     
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
          
          <Card>
  
          <CardItem>
  
          <View style={styles.container}>
          <Image 
          style={styles.profilepic}
          source={{
            uri:item.photo
          }}
          />
          </View>
          <View style={styles.userinfo}>
         <Text style={[robotoWeights.condensedBold, styles.para]}>
         Name:{item.name}
          </Text>
          <Text>specialization:{item.specialization}</Text>
          <Text style={material.body2}>{"\t"}{"\t"}<Icon1 name='location-on' size={20} ></Icon1>   {item.location}</Text>
              
          <Text style={material.body2}>
          phone number:{item.phone_no} </Text>
          <Text note>
          status:{item.status} </Text>
          <Left>
              <TouchableOpacity onPress={() => Communications.phonecall(item.phone_no, true)}>
              <Icon style={{marginRight:'15%'}} name ="phone-call" size={35} color="#32cd32"  />
                 
                 </TouchableOpacity> 
                 <TouchableOpacity onPress={() => Communications.text(item.phone_no, 'Test Text Here')}>
               <Icon1  name ="message" size={35} color="#ba55d3"/>
             
             </TouchableOpacity>
             </Left>
          </View>
          </CardItem>
          </Card>
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
    flex:2,
    height:100,
    width:100,
    marginEnd:10
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

  }

});