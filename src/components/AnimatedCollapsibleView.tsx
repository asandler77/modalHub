import React, {ReactElement, useEffect, useRef} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';

interface Props {
  show?: boolean;
  children?: any;
  testID?: string;
  staticHeight?: number;
  customStyle?: ViewStyle;
  /* Since we are using <AnimatedCollapsibleView /> in many places and
  in most of the cases the Animated value is 1 by default (opened)
  The boolean prop - resetAnimationValue - is needed to defined does the animation
  default value is 0 or 1.
  */
  resetAnimationValue?: boolean;
  animationDuration?: number;
}

const AnimatedCollapsibleView = (props: Props): ReactElement => {
  const ANIMATION_DURATION = 350;

  const {
    show = true,
    testID = 'AnimatedCollapsableViewTestID',
    staticHeight,
    children,
    customStyle,
    resetAnimationValue,
    animationDuration,
  } = props;

  const [height, setHeight] = React.useState(-1);

  const anim = useRef<Animated.Value<number>>(
    new Animated.Value(resetAnimationValue ? 0 : 1),
  ).current;

  const expandAnimation = Animated.interpolate(anim, {
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  const opacityAnimation = Animated.interpolate(anim, {
    inputRange: [0, 0.3, 1],
    outputRange: [0, 0, 1],
  });

  useEffect(() => {
    staticHeight && setHeight(staticHeight);
  }, []);

  useEffect(() => {
    const animation = Animated.timing(anim, {
      toValue: show ? 1 : 0,
      duration: animationDuration ?? ANIMATION_DURATION,
      easing: Easing.cubic,
    });
    animation && animation.start();
  }, [show]);

  return (
    <Animated.View
      testID={testID}
      style={[
        styles.container,
        {height: expandAnimation, opacity: opacityAnimation},
        customStyle,
      ]}>
      <View
        onLayout={event => {
          if (!staticHeight && height < 0) {
            setHeight(event.nativeEvent.layout.height);
          }
        }}
        style={{flex: 1}}>
        {children}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
});

export {AnimatedCollapsibleView};
