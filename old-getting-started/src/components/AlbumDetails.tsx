import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList, View} from 'react-native';
import axios from 'axios';
import {AlbumList} from '.';

class AlbumDetails extends Component {
  state = {
    albums: [],
  };
  componentDidMount(): void {
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
        this.setState({albums: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.albumDetailsView}>
        <FlatList
          data={this.state.albums?.products}
          keyExtractor={item => item?.id}
          renderItem={({item}) => {
            return <AlbumList {...item} />;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  albumDetailsView: {
    padding: 7,
  },
});

export default AlbumDetails;
