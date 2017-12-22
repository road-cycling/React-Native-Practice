import React from 'react';
import { View } from 'react-native';


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

/*
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd'
  }
}
*/
const CardSection = props => {
  //console.log(props.children);
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

/*
<View style={[styles.containerStyle, props.style || null ]}>
  {props.children}
</View>
*/


export { CardSection };
