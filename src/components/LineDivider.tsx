import React, {ReactElement} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {SCREEN_WIDTH} from '../constants/Constants';

interface Props {
  marginTop: number;
  height?: number;
  width?: number | string;
  color?: string;
  customStyle?: ViewStyle;
}

/**
 * A component to display a single line.
 * @param props marginTop required for the distance between it and the immediate component
 *              above it, other props optionally override defaults
 */
const LineDivider = ({
  height,
  width,
  marginTop,
  color,
  customStyle,
}: Props): ReactElement => {
  return (
    <View
      style={[
        styles.lineStyle,
        {
          marginTop,
          height: height || 1,
          width: width || SCREEN_WIDTH,
          backgroundColor: color || 'grey',
        },
        customStyle,
      ]}
    />
  );
};

export {LineDivider};

const styles = StyleSheet.create({
  lineStyle: {
    alignSelf: 'center',
  },
});
