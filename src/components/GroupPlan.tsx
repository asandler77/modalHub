import React, {ReactElement} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CollapsiblePlan from './CollapsiblePlan';

export default (): ReactElement => {
  return (
    <View>
      <Text style={{fontSize: 12, height: 16}}>Group Plan</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: 'green',
            flex: 1,
          }}>
          <Text style={{fontSize: 16, height: 22}}>Charges</Text>
          <Text style={{fontSize: 16, height: 22}}>$20</Text>
        </View>
        <View>
          <CollapsiblePlan />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    // justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
});
