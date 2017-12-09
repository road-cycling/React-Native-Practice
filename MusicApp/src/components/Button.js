import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, content }) => {

  const { buttonStyles, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyle}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}



export default Button;
