// //import libraries for component
// import React from 'react';
// import {Text,AppRegistry} from 'react-native';
//
// //create component
//
// const App = () => (
//   <Text>Some Text</Text>
// );
// //Render it to device
// AppRegistry.registerComponent('albums',() => App);
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends Component {
  render() {
    return (
      //<View style={styles.container}>
        <View style={{flex:1}}>
        <Header headerText={'ALBUMS'}/>
          <AlbumList />
      </View>
    );
  }
}
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });