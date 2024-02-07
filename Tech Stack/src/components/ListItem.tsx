import React, {useEffect} from 'react';
import {
  Button,
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  UIManager,
  View,
} from 'react-native';
import {selectLibrary} from '../actions/techStackActions';
import {connect, useDispatch} from 'react-redux';

const ListItem = ({
  title,
  id,
  expanded,
  description,
}: {
  title: string;
  id: number;
  expanded: boolean;
  description: string;
}) => {
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    UIManager.setLayoutAnimationEnabledExperimental(true);
    return () => {};
  }, []);

  const dispatch = useDispatch();
  return (
    <View style={{margin: 3}}>
      <TouchableWithoutFeedback
        onPress={() => {
          dispatch(selectLibrary(id));
        }}>
        <Text>{title}</Text>
      </TouchableWithoutFeedback>
      {expanded ? <Text>{description}</Text> : null}
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log('selectedLibraryId :: ', state.selectedLibraryId);
  //   techStack: state.techStack;
  const expanded = state.selectedLibraryId === ownProps.id;
  return {
    expanded,
  };
};

export default connect(mapStateToProps)(ListItem);
