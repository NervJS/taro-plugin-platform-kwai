import { indent } from '@tarojs/shared'
import { RecursiveTemplate } from '@tarojs/shared/dist/template'

export class Template extends RecursiveTemplate {
  flattenCoverViewLevel = 8
  supportXS = false
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

  buildFlattenNodeAttributes (nodeName: string): string {
    const component = this.miniComponents[nodeName]

    return Object.keys(component)
      .map(k => `${k}="${k.startsWith('bind') || k.startsWith('on') || k.startsWith('catch') ? component[k] : `{{${component[k].replace('i.', 'item.')}}}`}"`)
      .join(' ') + ' id="{{item.uid}}"'
  }

  buildFlattenCoverView = (level = this.flattenCoverViewLevel): string => {
    if (level === 0) {
      return ''
    }

    const child = this.buildFlattenCoverView(level - 1)

    const template =
  `${level - 1 !== 0 ? `<cover-view ks:if="{{item.nn==='cover-view'}}" ${this.buildFlattenNodeAttributes('cover-view')}>
  <block ks:for="{{item.cn}}" ks:key="uid">
    ${indent(child, 4)}
  </block>
</cover-view>` : ''}
<cover-image ks:elif="{{item.nn==='cover-image'}}"  ${this.buildFlattenNodeAttributes('cover-image')} />
<block ks:elif="{{item.nn==='#text'}}">{{item.v}}</block>`

    return template
  }

  modifyLoopBody = (child: string, nodeName: string): string => {
    if (nodeName === 'cover-view') {
      return this.buildFlattenCoverView()
    }
    return child
  }
}
