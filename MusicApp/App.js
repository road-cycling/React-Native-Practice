import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const name = "Thomas";
const App = () => (
  <View style={{flex: 1}}>
    <Header head={name}/>
    <AlbumList />
  </View>
);

export default App;
