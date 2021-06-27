import React, {ReactElement, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {LineDivider} from './LineDivider';
import {AnimatedCollapsibleView} from './AnimatedCollapsibleView';
import CollapsiblePlan from './CollapsiblePlan';

const chevron = require('../assets/images/right_arrow.png');

export default (): ReactElement => {
  const [isOpen, toggleOpen] = useState<boolean>(false);

  const renderChevron = () => {
    return (
      <View>
        <Image
          resizeMode={'contain'}
          style={[
            {transform: [{rotate: isOpen ? '-90deg' : '90deg'}]},
            styles.chevronIconStyle,
          ]}
          source={chevron}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 12, height: 16}}>Group Plan</Text>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={{fontSize: 16, height: 22}}>Charges</Text>
          <Text style={{fontSize: 16, height: 22}}>$20</Text>
        </View>
        <TouchableOpacity onPress={() => toggleOpen(!isOpen)}>
          {renderChevron()}
        </TouchableOpacity>
      </View>
      <CollapsiblePlan isOpen={isOpen} />
      <LineDivider width={'100%'} color={'grey'} marginTop={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chevronIconStyle: {
    height: 12,
    width: 9,
    marginTop: 4,
    marginLeft: 8,
  },
});
