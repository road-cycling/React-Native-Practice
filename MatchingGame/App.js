import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.game}>
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  game: {
    marginTop: 40,
    flex: 1
  }
});
