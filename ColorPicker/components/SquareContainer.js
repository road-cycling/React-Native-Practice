import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square';

const squareCount = 100;
const colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine',
'beige', 'bisque', 'black', 'blue', 'cadetblue', 'skyblue', 'slategray',
'snow', 'steelblue', 'springgreen', 'teal', 'tomato', 'turquoise', 'violet'];

class SquareContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      box: [],
      interval: 0
    }

    this.newColor = this.newColor.bind(this);
  }

  componentWillMount() {
    var box = [];
    for(let i = 0; i < squareCount; i++) {
      box.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    this.setState({box});
  }

  componentDidMount() {
    this.interval = setInterval(this.newColor, 5);
  }

  newColor() {
    let changingInt = Math.floor(Math.random() * squareCount);

    const box = this.state.box.map((item, index) => (
      index == changingInt ?
        colors[Math.floor(Math.random() * colors.length)]
       : item
    ));
    this.setState({box});

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const result = this.state.box.map((item, index) => (
      <Square color={item} key={index}/>
    ))


    return (
      <View style={styles.container}>
        {result}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default SquareContainer;
