import {Dimensions, Platform} from 'react-native';

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;
export const DEVICE_HEIGHT: number = Dimensions.get('screen').height;

export const IS_ANDROID: boolean = Platform.OS === 'android';
export const IS_IOS: boolean = Platform.OS === 'ios';
