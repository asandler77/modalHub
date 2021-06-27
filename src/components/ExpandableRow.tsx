import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import Animated, {concat, Easing} from 'react-native-reanimated';
import {BorderWrapper} from './BorderWrapper';

import {emitter} from '../utils/utils';

export const MINIMIZE_EVENT =
  'ATT_DEVICE_UPGRADE_EXPANDABLE_ROW_MINIMIZE_EVENT';
export const MAX_FONT_SIZE_MULTIPLIER = 2;

enum AleckFonts {
  SANS_BOLD = 'Bold',
  SANS_ITALIC = 'Italic',
  SANS_LIGHT_ITALIC = 'LightItalic',
  SANS_MEDIUM = 'Medium',
  SANS_MEDIUM_ITALIC = 'MediumItalic',
  SANS_REGULAR = 'Regular',
  SANS_THIN = 'Thin',
}

// export enum AleckFonts {
//   SANS_BOLD = 'ATTAleckSans-Bold',
//   SANS_ITALIC = 'ATTAleckSans-Italic',
//   SANS_LIGHT_ITALIC = 'ATTAleckSans-LightItalic',
//   SANS_MEDIUM = 'ATTAleckSans-Medium',
//   SANS_MEDIUM_ITALIC = 'ATTAleckSans-MediumItalic',
//   SANS_REGULAR = 'ATTAleckSans-Regular',
//   SANS_THIN = 'ATTAleckSans-Thin',
// }

interface Props {
  index: number;
  title?: string;
  catoText?: string;
  children?: any;
  onPressCallback?: () => void;
  customTitlePanelStyle?: ViewStyle;
  customTitleTextStyle?: TextStyle;
  customImageStyle?: ImageStyle;
  borderColor?: string;
}

/**
 * ExpandableRow is an *independent* component - Meaning it doesn't need a parent to manage it.
 * Combine several ExpandableRows together with different indexes and if one is expanded the others will collapse.
 * Please note, the height of the expanded part is determined by the height of the children. It is done automatically.
 *
 * @param index
 * @param children
 * @param title
 * @param closeCatoText
 * @param openCatoText
 * @param onPressCallback
 * @param customTitlePanelStyle
 * @param customTitleTextStyle
 * @param customImageStyle
 * @param borderColor
 */
const ExpandableRow = ({
  index,
  children,
  title = '',
  catoText = '',
  onPressCallback,
  customTitlePanelStyle,
  customTitleTextStyle,
  customImageStyle,
  borderColor,
}: Props) => {
  // const fullBorderColor = borderColor || Colors().SEPARATOR_LIGHT_GREY;
  const fullBorderColor = borderColor || 'grey';
  const ANIMATION_DURATION = 300;
  const [height, setHeight] = useState<any>(-1);
  const [isRowExpanded, setIsRowExpanded] = useState(false);
  const expandedRef = useRef<boolean>(false);
  const anim = useRef<Animated.Value<number>>(new Animated.Value(0)).current;
  const expandAnimation = Animated.interpolate(anim, {
    inputRange: [0, 1],
    outputRange: [0, height],
  });
  const opacityAnimation = Animated.interpolate(anim, {
    inputRange: [0, 0.3, 1],
    outputRange: [0, 0, 1],
  });
  const rotateAnimation = Animated.interpolate(anim, {
    inputRange: [0, 1],
    outputRange: [90, 270],
  });

  useEffect(() => {
    emitter.addListener(MINIMIZE_EVENT, onMinimizeEvent);
    return () => {
      emitter.removeListener(MINIMIZE_EVENT, onMinimizeEvent);
    };
  }, []);

  const onMinimizeEvent = (expandedItemIndex: number) => {
    if (index !== expandedItemIndex) {
      Animated.timing(anim, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      }).start();
      expandedRef.current = false;
      setIsRowExpanded(false);
    }
  };

  const onRowPressed = () => {
    const isExpanded = expandedRef.current;
    Animated.timing(anim, {
      toValue: isExpanded ? 0 : 1,
      duration: ANIMATION_DURATION,
      easing: Easing.linear,
    }).start(() => onPressCallback && onPressCallback());

    if (!isExpanded) {
      emitter.emit(MINIMIZE_EVENT, index);
    }
    setIsRowExpanded(!isRowExpanded);
    expandedRef.current = !expandedRef.current;
  };

  const renderTitleRow = () => {
    return (
      <TouchableWithoutFeedback
        accessibilityLabel={catoText}
        onPress={onRowPressed}
        accessibilityRole="combobox"
        accessibilityState={{expanded: expandedRef.current}}>
        <View style={[styles.titleRow, customTitlePanelStyle]}>
          <Text
            testID={'rowTitleText'}
            maxFontSizeMultiplier={MAX_FONT_SIZE_MULTIPLIER}
            style={[styles.titleText, customTitleTextStyle]}>
            {title}
          </Text>
          <Animated.Image
            source={require('../assets/images/right_arrow.png')}
            style={[
              styles.image,
              customImageStyle,
              {transform: [{rotate: concat(rotateAnimation, 'deg')}]},
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderChildrenPane = () => {
    return (
      <Animated.View
        style={[
          styles.childrenContainer,
          {height: expandAnimation, opacity: opacityAnimation},
        ]}
        onLayout={event => {
          if (height < 0 && event.nativeEvent.layout.height > 0) {
            setHeight(event.nativeEvent.layout.height);
          }
        }}>
        {children}
      </Animated.View>
    );
  };

  return (
    <BorderWrapper
      hideBottom
      customStyle={styles.container}
      borderColor={fullBorderColor}>
      {renderTitleRow()}
      {renderChildrenPane()}
    </BorderWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  childrenContainer: {
    overflow: 'hidden',
  },
  image: {
    height: 16,
    width: 9,
    tintColor: 'blue',
  },
  titleText: {
    fontFamily: AleckFonts.SANS_MEDIUM,
    fontSize: 16,
    color: 'black',
  },
});

export {ExpandableRow};
