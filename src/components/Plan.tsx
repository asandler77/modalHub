import React, {ReactElement} from 'react';
import {View, StyleSheet, Button, Modal, SafeAreaView} from 'react-native';
import {changeToggleStatus} from '../state-management/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import CostDetails from './CostDetails';

export default (): ReactElement => {
  const {isModalVisible} = useSelector((state: any) => state.isModalVisible);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        presentationStyle={'fullScreen'}
        visible={isModalVisible}
        onRequestClose={() => {
          dispatch(changeToggleStatus(!isModalVisible));
        }}>
        <SafeAreaView style={{flex: 1}}>
          <CostDetails modalHeaderString={'Cost details'} />
        </SafeAreaView>
      </Modal>
      <Button
        title="Open"
        onPress={() => {
          dispatch(changeToggleStatus(true));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'red',
  },
});
