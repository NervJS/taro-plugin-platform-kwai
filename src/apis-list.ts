export const _onAndSyncApis = new Set([
  'onWindowResize',
  'onLocalServiceResolveFail',
  'onLocalServiceLost',
  'onLocalServiceFound',
  'onLocalServiceDiscoveryStop',
  'onKeyboardHeightChange',
  'onLocationChange',
  'offWindowResize',
  'offLocationChange',
  'offLocalServiceResolveFail',
  'offLocalServiceLost',
  'offLocalServiceFound',
  'offLocalServiceDiscoveryStop',
  'offDeviceMotionChange',
  'getAccountInfoSync'
])

export const _noPromiseApis = new Set([
  'createUDPSocket'
])

export const _otherApis = new Set([
  'getSelectedTextRange',
  'stopLocationUpdate',
  'startLocationUpdateBackground',
  'startLocationUpdate',
  'stopLocalServiceDiscovery',
  'startLocalServiceDiscovery',
  'requestPayment',
  'stopGyroscope',
  'startGyroscope'
])
