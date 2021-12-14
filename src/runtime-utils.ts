import { initNativeApi } from './apis'

export { initNativeApi }
export * from './components'
export const hostConfig = {
  initNativeApi,
  getSpecialNodes (): string[] {
    return ['text', 'image']
  },
}
