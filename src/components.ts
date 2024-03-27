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
    name: _empty,

    value: _empty,
    maxlength: 140,
    disabled: _false,
    placeholder: _empty,
    'placeholder-style': _empty,
    'auto-focus': _false,
    focus: _false,
    fixed: _false,
    'cursor-color': "'#FE3666'",
    'auto-height': _false,
    'confirm-type': "'return'",
    'adjust-position': _true,
    'hold-keyboard': _false,
    'confirm-hold': _false,
    bindKeyboardHeightChange: _empty
  }
};
