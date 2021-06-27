import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {changeToggleStatus} from '../state-management/actions/actions';
import {useDispatch} from 'react-redux';
import GroupPlan from './GroupPlan';
import DevicePlan from './DevicePlan';

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
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{modalHeaderString}</Text>
      <Text style={{marginBottom: 52}}>Mobile share plus(SM) 9GB</Text>
      <GroupPlan />
      <DevicePlan />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'green',
    borderWidth: 3,
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  closeButton: {
    marginRight: 22,
    marginTop: 14,
    alignItems: 'flex-end',
    marginBottom: 47,
  },
  text: {
    color: 'black',
    lineHeight: 20,
    marginBottom: 8,
  },
  closeText: {
    fontSize: 14,
    color: '#0057B8',
  },
});
