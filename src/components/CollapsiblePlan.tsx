import React, {ReactElement, useState} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {AnimatedCollapsibleView} from './AnimatedCollapsibleView';

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
    <View style={{borderWidth: 1}}>
      <AnimatedCollapsibleView
        testID={'DONTFORGET'}
        show={isOpen}
        resetAnimationValue></AnimatedCollapsibleView>
      <TouchableOpacity
        testID={'DONTFORGET'}
        onPress={() => toggleOpen(!isOpen)}>
        {renderChevron()}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  chevronIconStyle: {
    height: 12,
    width: 9,
    marginTop: 4,
    marginLeft: 8,
  },
});
