import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SquareContainer from './components/SquareContainer';


export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SquareContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1
  }
});
