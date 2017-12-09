import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Restart = ({ onPress }) => {
  return (
  <Button
  large
  onPress={onPress}
  title="Play Again"
  color="#841584"
  accessibilityLabel="Learn more about this purple button">
  </Button>


  );
}

export default Restart;
