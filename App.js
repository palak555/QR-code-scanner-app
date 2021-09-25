import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'


export default class App extends React.Component{
  render(){
   return(
    <View>
       <AppContainer/>
    </View>
  );
 }
}

const AppNavigator = createSwitchNavigator({
  HomeScreen : HomeScreen,
  ScanScreen: ScanScreen
});

const AppContainer = createAppContainer(AppNavigator);

