import {StyleSheet, Text, View} from 'react-native';
import {AnimatedCollapsibleView} from './AnimatedCollapsibleView';
import React, {ReactElement} from 'react';

interface Props {
  isOpen: boolean;
}
export default (props: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <AnimatedCollapsibleView show={props.isOpen} customStyle={{flex: 1}}>
        <Text>Charge</Text>
        <Text>Charge 2</Text>
      </AnimatedCollapsibleView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
