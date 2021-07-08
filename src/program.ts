import { TaroPlatformBase } from '@tarojs/service'
import { Template } from './template'
import { components } from './components'

const PACKAGE_NAME = '@tarojs/plugin-platform-kwai'

export default class Kwai extends TaroPlatformBase {
  platform = 'kwai'
  globalObject = 'ks'
  runtimePath = `${PACKAGE_NAME}/dist/runtime`
  fileType = {
    templ: '.ksml',
    style: '.css',
    config: '.json',
    script: '.js'
  }

  template = new Template()
  // 小程序配置文件名称
  projectConfigJson = 'project.config.json'

  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config) {
    super(ctx, config)

    this.setupTransaction.addWrapper({
      close () {
        this.modifyTemplate()
      }
    })
  }

  /**
   * 增加组件或修改组件属性
   */
  modifyTemplate () {
    const template = this.template
    template.mergeComponents(this.ctx, components)
    template.voidElements.add('voip-room')
    template.voidElements.delete('textarea')
    template.focusComponents.add('editor')
  }
}
