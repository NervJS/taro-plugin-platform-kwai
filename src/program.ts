import { TaroPlatformBase } from '@tarojs/service'
import { Template } from './template'

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

  /**
   * 调用 mini-runner 开启编译
   */
  async start () {
    this.setup()

    const runner = await this.getRunner()
    const options = this.getOptions({
      runtimePath: this.runtimePath
    })
    runner(options)
  }
}
