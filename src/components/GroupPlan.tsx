import React, {ReactElement} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Group Plan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      borderWidth: 3,
  },
});
