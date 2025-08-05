import { TaroPlatformBase } from '@tarojs/service';
import { Template } from './template';
import { components } from './components';

const PACKAGE_NAME = '@tarojs/plugin-platform-kwai';

export default class Kwai extends TaroPlatformBase {
  platform = 'kwai';
  globalObject = 'ks';
  runtimePath = require.resolve(`${PACKAGE_NAME}/dist/runtime`);
  fileType = {
    templ: '.ksml',
    style: '.css',
    config: '.json',
    script: '.js'
  };

  template = new Template();

  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor(ctx, config) {
    super(ctx, config);

    this.setupTransaction.addWrapper({
      close() {
        this.modifyTemplate();
        this.generateProjectConfig('project.ks.json');
        this.generateProjectConfig('project.kwai.json');
      }
    });
  }

  /**
   * 增加组件或修改组件属性
   */
  modifyTemplate() {
    const template = this.template;
    template.mergeComponents(this.ctx, components as any);
    this.modifyInput(template.internalComponents.Input);
  }

  /**
   * 修改 Input 组件属性
   */
  modifyInput(input) {
    delete input['placeholder-class'];
    delete input['cursor-spacing'];
    delete input['confirm-hold'];
    delete input['cursor'];
    delete input['selection-start'];
    delete input['selection-end'];
  }
}
