import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items : []
    }
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(items => {
      this.setState({items: items.data});
    })
    .catch(err => console.log(err));
  };

  renderAlbums() {
    return this.state.items.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;
