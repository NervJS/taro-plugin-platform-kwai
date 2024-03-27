import { singleQuote } from '@tarojs/shared';

const _true = 'true';
const _false = 'false';
const _empty = '';

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
  },
  Textarea: {
    'adjust-position': _true,
    value: _empty,
    'hold-keyboard': _false,
    'confirm-type': "'return'",
    'confirm-hold': _false,
    bindKeyboardHeightChange: _empty
  }
};
