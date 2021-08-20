import Kwai from './program'
import type { IPluginContext } from '@tarojs/service'

// 让其它平台插件可以继承此平台
export { Kwai }

export interface IOptions {
  enablekeyboardAccessory: boolean
}

export default (ctx: IPluginContext, options: IOptions) => {
  ctx.registerPlatform({
    name: 'kwai',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new Kwai(ctx, config, options || {})
      await program.start()
    }
  })
}
