import {Dimensions, Platform, PixelRatio} from 'react-native';
import Device from 'react-native-device-info';

const model = Device.getModel();
const {width, height} = Dimensions.get('window');

export function normalize(size, multiplier = 2) {
  const scale = (width / height) * multiplier;

  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    if (model === 'iPhone 8') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 15;
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
