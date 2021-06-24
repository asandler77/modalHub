import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {changeToggleStatus} from './state-management/actions/actions';
import {useDispatch} from 'react-redux';

interface Props {
  modalHeaderString?: string;
  actualPlan?: string;
  groupPlan?: {
    groupPlanHeaderString?: string;
    charges?: Record<string, string>;
    planCharges?: Record<string, string>;
    paperLessDiscount?: Record<string, string>;
    signatureDiscount?: Record<string, string>;
  };
  planByDevice?: {
    planByDeviceHeaderString?: string;
    planCharges?: Record<string, string>;
    lineCharge?: Record<string, string>;
  };
  totalMonthlyCharges?: Record<string, string>;
}

export default (props: Props) => {
  const {modalHeaderString} = props;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(changeToggleStatus(false));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{modalHeaderString}</Text>
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
    marginTop: 20,
    marginRight: 30,
    borderWidth: 1,
  },
  text: {

  }
});
