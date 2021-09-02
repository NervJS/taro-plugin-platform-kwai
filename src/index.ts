import Kwai from './program'
import type { IPluginContext } from '@tarojs/service'

// 让其它平台插件可以继承此平台
export { Kwai }

let registedModifyPageTemplate = false

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'kwai',
    useConfigName: 'mini',
    async fn ({ config }) {
      !registedModifyPageTemplate && modifyPageTemplate(ctx)
      const program = new Kwai(ctx, config)
      await program.start()
    }
  })
}

// 和支付宝小程序一样，快手小程序中，如果某个页面依赖了原生小程序组件，
// 那么这个页面不能使用公共模板 base.axml，
// 而需要把公共模板的内容在此页面的模板中复制一份, 。
function modifyPageTemplate (ctx: IPluginContext) {
  registedModifyPageTemplate = true
  ctx.modifyBuildAssets(({ assets, miniPlugin }) => {
    const pages: string[] = []

    // 筛选出使用了自定义组件的页面
    miniPlugin.pages.forEach(page => {
      const config = miniPlugin.filesConfig[miniPlugin.getConfigFilePath(page.name)].content
      if (!page.isNative && config?.hasOwnProperty('usingComponents') && Object.keys(config.usingComponents).length) {
        pages.push(page.name)
      }
    })

    if (!pages.length) return

    const baseXml = assets['base.ksml'].source()

    pages.forEach(page => {
      const templateName = `${page}.ksml`
      const assetsItem = assets[templateName]
      const src = assetsItem._value ? assetsItem._value.toString() : assetsItem.source()
      const templateCaller = src.replace(/<import src="(.*)base\.ksml"\/>/, '')
      const res = `${templateCaller}
${baseXml}`

      assets[templateName] = {
        size: () => res.length,
        source: () => res
      }
    })
  })
}

