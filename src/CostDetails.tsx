import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {changeToggleStatus} from './state-management/actions/actions';
import {useDispatch} from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(changeToggleStatus(false));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  closeButton: {
    marginTop: 100,
    marginRight: 60,
    borderWidth: 1,
  },
});
