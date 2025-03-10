import Kwai from './program'
import type { IPluginContext } from '@tarojs/service'

// 让其它平台插件可以继承此平台
export { Kwai }


export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'kwai',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new Kwai(ctx, config)
      await program.start()
    }
  })
}

