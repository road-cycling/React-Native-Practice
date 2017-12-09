import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import shuffle from 'shuffle-array';
import Square from './Square';
import Restart from './Restart';


const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};




class Game extends React.Component {
  constructor(props) {
    super(props);
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ];
    cards = shuffle(cards);
    this.state = {
      cards,
      noClick: false,
      winner: false
    };

    this.onPress = this.onPress.bind(this);
    this.restart = this.restart.bind(this);
  }

  restart() {
    let cards = this.state.cards.map(item => ({
      ...item,
      cardState: CardState.HIDING
    }));
    cards = shuffle(cards);
    this.setState({cards, winner: false});
  }

  onPress(id) { //udemy course Colt & Elie https://github.com/Colt
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }

    const foundCard = this.state.cards.find(c => c.id === id);

    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }

    let noClick = false;
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);
    const showingCards = cards.filter(c => c.cardState === CardState.SHOWING);

    const ids = showingCards.map(c => c.id);

    if (showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, CardState.MATCHING);
      var win = cards.filter(item => item.cardState === 2);
      this.setState({winner: win.length === 16});
    } else if (showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      noClick = true;

      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          this.setState({cards: hidingCards, noClick: false});
        }, 400);
      });
      return;
    }

    this.setState({cards, noClick});
  }

  render() {

    const result = this.state.cards.map(item => (
      <Square
        color={item.backgroundColor}
        key={item.id}
        showing={item.cardState !== CardState.HIDING}
        onPress={() => this.onPress(item.id)}
      />
    ));
    console.log(this.state.winner);
    return (
      <View style={styles.container}>
        {this.state.winner === true ? <Restart onPress={() => this.restart()}/> : result}
      </View>
    );
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

export default Game;
