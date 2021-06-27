import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AnimatedCollapsibleView} from './AnimatedCollapsibleView';
import React, {ReactElement, useState} from 'react';

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
    <>
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
      <View style={styles.animatedContainer}>
        <AnimatedCollapsibleView show={isOpen} customStyle={{flex: 1}}>
          <Text>Charge 1</Text>
          <Text>Charge 2</Text>
        </AnimatedCollapsibleView>
      </View>
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
