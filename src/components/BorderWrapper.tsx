import React from 'react';
import {View, ViewStyle} from 'react-native';
// import {Colors} from '@theme/Colors';

export interface BorderWrapperProps {
  hideTop?: boolean;
  hideBottom?: boolean;
  borderColor?: string;
  borderWidth?: number;
  paddingVertical?: number;
  horizontalInsets?: number;
  customStyle?: ViewStyle;
  children?: any;
}

const BorderWrapper = ({
  children,
  hideBottom,
  hideTop,
  borderColor,
  borderWidth = 1,
  paddingVertical = 0,
  horizontalInsets = 0,
  customStyle,
}: BorderWrapperProps) => {
  const renderBorderLine = (marginTop: number, marginBottom: number) => {
    // noinspection JSSuspiciousNameCombination
    return (
      <View
        style={{
          alignSelf: 'stretch',
          marginTop,
          marginBottom,
          height: borderWidth,
          marginHorizontal: horizontalInsets,
          backgroundColor: borderColor || 'grey',
        }}
      />
    );
  };

  return (
    <View style={customStyle}>
      {!hideTop && renderBorderLine(0, paddingVertical)}
      {children}
      {!hideBottom && renderBorderLine(paddingVertical, 0)}
    </View>
  );
};

export {BorderWrapper};
