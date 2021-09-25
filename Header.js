import * as React from 'react';
import {Text, View,StyleSheet} from 'react-native';

export default class Header extends React.Component{

  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.displayText}>Bar/QR Code Scanner App </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  displayText:{
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'grey'
  }
})