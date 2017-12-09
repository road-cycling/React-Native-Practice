import React from 'react';
import { Text, View } from 'react-native';


const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.head}</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
}

export default Header;
