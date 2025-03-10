import { RecursiveTemplate } from '@tarojs/shared/dist/template'

export class Template extends RecursiveTemplate {
  flattenViewLevel = 8
  flattenCoverViewLevel = 8
  flattenTextLevel = 3
  supportXS = true
  Adapter = {
    if: 'ks:if',
    else: 'ks:else',
    elseif: 'ks:elif',
    for: 'ks:for',
    forItem: 'ks:for-item',
    forIndex: 'ks:for-index',
    key: 'ks:key',
    type: 'kwai'
  }

  createMiniComponents(components): any {
    const result = super.createMiniComponents(components)

    delete result['pure-view']
    delete result['static-view']

    return result
  }

  buildXsTemplate() {
    return '<ks module="xs" src="/utils.ks" />'
  }
}
