import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../components/ListItem';

const LibraryList = ({data}) => {
  return (
    <View
      style={{
        padding: 2,
        marginTop: 7,
      }}>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => {
          return <ListItem {...item} />;
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  console.log('state :: ', state);
  //   techStack: state.techStack;
  return {
    data: state.techStack,
    id: state.selectedLibraryId,
  };
};

// const mapStateToProps = state => {
//   data: state.techStack,
// };

export default connect(mapStateToProps)(LibraryList);
