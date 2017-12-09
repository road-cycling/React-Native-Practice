import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Square = ({ color, showing, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        backgroundColor: showing ? color : 'gray',
        height: 80,
        width: 80,
        marginBottom: 10
      }}
      onPress={onPress}
      >
    </TouchableOpacity>
  );
}

export default Square;
