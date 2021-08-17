import { processApis } from '@tarojs/shared'
import { noPromiseApis, needPromiseApis } from './apis-list'

declare const ks: any

export function initNativeApi (taro) {
  processApis(taro, ks, {
    noPromiseApis,
    needPromiseApis
  })
}

