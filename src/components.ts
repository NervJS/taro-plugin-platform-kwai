import { singleQuote } from '@tarojs/shared';

export const components = {
  // ======== 调整属性 ========
  Button: {
    bindGetPhoneNumber: '',
    bindGetUserInfo: '',
    bindContact: '',
    bindError: '',
    bindOpenSetting: '',
    bindLaunchApp: ''
  },
  Slider: {
    color: singleQuote('#e9e9e9'),
    'selected-color': singleQuote('#1aad19')
  },
  Ad: {
    type: ''
  },
  Swiper: {
    'easing-function': singleQuote('default')
  },
  RichText: {
    space: ''
  }
};
