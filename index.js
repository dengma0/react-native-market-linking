import {
  Linking,
  Platform,
  NativeModules
} from 'react-native';

const RNMarketCommentModule = NativeModules.RNMarketCommentModule;

export function openAppStore (appId = '') {
  if (Platform.OS === 'ios') {
    const url = `itms-apps://itunes.apple.com/cn/app/id${appId}?mt=8`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
    return;
  }
  if (Platform.OS === 'android') {
    RNMarketCommentModule.show();
  }
}
