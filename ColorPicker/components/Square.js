import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Square = ({ color }) => {
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: color,
        height: 50,
        width: 50,
        marginBottom: 4
      }}>
    </View>
  );
}

export default Square;
