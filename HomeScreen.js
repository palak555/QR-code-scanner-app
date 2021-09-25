import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Header from '../components/Header'

export default class HomeScreen extends React.Component{

  nextScreen =()=>{
    this.props.navigation.navigate('ScanScreen');
  }
  
  render(){
    return(
      <View>
       <Header/>

        <Image style={{marginTop:50, alignSelf:'center',width:250,height:250}} source={require('../assets/QR CODE IMAGE.png')}/>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          this.nextScreen()
        }}>
        <Text style={styles.buttonText}>Scan your Bar/QR code</Text>
        </TouchableOpacity>

       
      </View>
    )
  }
}

const styles=StyleSheet.create({

buttonText:{
  color:"white",
  fontSize: 23,
  textAlign: 'center',
  marginTop:40,
  width:270,
  alignSelf:'center',
  backgroundColor:"black",
  borderRadius: 5,
  paddingBottom: 10,
  paddingTop: 5,



}
})
