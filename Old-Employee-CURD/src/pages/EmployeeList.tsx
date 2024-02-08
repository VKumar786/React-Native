import _ from 'lodash';
import React, {useContext, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {FirebaseContext} from '../context/Firebase';
import ListItem from '../components/ListItem';

const EmployeeList = ({data}: {data: any}) => {
  const {employeeFetch} = useContext(FirebaseContext);
  useEffect(() => {
    employeeFetch();
    return () => {};
  }, []);

  return (
    <View
      style={{
        margin: 7,
      }}>
      <FlatList
        data={data}
        keyExtractor={item => item.uid}
        renderItem={({item}) => {
          return <ListItem {...item} />;
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const data = _.map(state.emp, (val, uid) => {
    return {
      ...val,
      uid,
    };
  });
  return {
    data,
  };
};

export default connect(mapStateToProps)(EmployeeList);
