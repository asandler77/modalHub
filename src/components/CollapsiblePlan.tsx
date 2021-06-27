import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AnimatedCollapsibleView} from './AnimatedCollapsibleView';
import React, {ReactElement, useState} from 'react';
import {LineDivider} from './LineDivider';

const chevron = require('../assets/images/right_arrow.png');

interface Props {
  chargeType?: string;
}
export default (props: Props): ReactElement => {
  const {chargeType} = props;
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
    <>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={{fontSize: 16, height: 32, fontWeight: 'bold'}}>
            Charges
          </Text>
          <Text style={{fontSize: 16, height: 32}}>$20</Text>
        </View>
        <TouchableOpacity onPress={() => toggleOpen(!isOpen)}>
          {renderChevron()}
        </TouchableOpacity>
      </View>
      <View style={styles.animatedContainer}>
        <AnimatedCollapsibleView
          show={isOpen}
          customStyle={{flex: 1, borderWidth: 1}}>
          <Text>{chargeType} Charge 1</Text>
          <Text>{chargeType} Charge 2</Text>
        </AnimatedCollapsibleView>
      </View>
      <LineDivider width={'100%'} color={'grey'} marginTop={16} />
    </>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    marginTop: 8,
    flex: 1,
  },
  chevronIconStyle: {
    height: 12,
    width: 9,
    marginTop: 4,
    marginLeft: 8,
  },
});
