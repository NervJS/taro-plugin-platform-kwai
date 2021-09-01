import { processApis } from '@tarojs/shared'
import { needPromiseApis } from './apis-list'

declare const ks: any

export function initNativeApi (taro) {
  processApis(taro, ks, {
    needPromiseApis
  })
  taro.cloud = ks.cloud
}
