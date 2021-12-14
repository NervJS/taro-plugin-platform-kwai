import { indent, Shortcuts } from '@tarojs/shared'
import { RecursiveTemplate } from '@tarojs/shared/dist/template'

export class Template extends RecursiveTemplate {
  flattenViewLevel = 8
  flattenCoverViewLevel = 8
  flattenTextLevel = 3
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

  createMiniComponents (components): any {
    const result = super.createMiniComponents(components)

    delete result['pure-view']
    delete result['static-view']

    return result
  }

  buildFlattenNodeAttributes (nodeName: string): string {
    const component = this.miniComponents[nodeName]

    return Object.keys(component)
      .map(k => `${k}="${k.startsWith('bind') || k.startsWith('on') || k.startsWith('catch') ? component[k] : `{{${component[k].replace('i.', 'item.')}}}`}"`)
      .join(' ') + ' id="{{item.uid}}"'
  }

  buildFlattenView = (level = this.flattenViewLevel): string => {
    if (level === 0) {
      return '<template is="tmpl_0_container" data="{{i:item}}" />'
    }

    const child = this.buildFlattenView(level - 1)

    const template =
`<view ks:if="{{item.nn==='view'&&(item.st||item.cl)}}" id="{{item.uid}}" ${this.buildFlattenNodeAttributes('view')}>
  <block ks:for="{{item.cn}}" ks:key="uid">
    ${indent(child, 4)}
  </block>
</view>
<text ks:elif="{{item.nn==='text'&&(item.st||item.cl)}}" id="{{item.uid}}" ${this.buildFlattenNodeAttributes('text')}>
  <block ks:for="{{item.cn}}" ks:key="uid">
    <block>{{item.v}}</block>
  </block>
</text>
<text ks:elif="{{item.nn==='static-text'&&(item.st||item.cl)}}" id="{{item.uid}}" ${this.buildFlattenNodeAttributes('static-text')}>
  <block ks:for="{{item.cn}}" ks:key="uid">
    <block>{{item.v}}</block>
  </block>
</text>
<button ks:elif="{{item.nn==='button'&&(item.st||item.cl)}}" id="{{item.uid}}" ${this.buildFlattenNodeAttributes('button')}>
  <block ks:for="{{item.cn}}" ks:key="uid">
    <template is="tmpl_0_container" data="{{i:item}}" />
  </block>
</button>
<input ks:elif="{{item.nn==='input'&&(item.st||item.cl)}}" id="{{item.uid}}" ${this.buildFlattenNodeAttributes('input')} />
<swiper ks:elif="{{item.nn==='swiper'&&(item.st||item.cl)}}" id="{{item.uid}}" ${this.buildFlattenNodeAttributes('swiper')}>
  <block ks:for="{{item.cn}}" ks:key="uid">
    <template is="tmpl_0_container" data="{{i:item}}" />
  </block>
</swiper>
<block ks:else>
  <template is="tmpl_0_container" data="{{i:item}}" />
</block>`

    return template
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

  buildFlattenText = (level = this.flattenTextLevel): string => {
    if (level === 0) {
      return `<block>{{i.${Shortcuts.Childnodes}[index].${Shortcuts.Text}}}</block>`
    }

    const child = this.buildFlattenText(level - 1)

    const template =
`<block ks:if="item.nn === '#text'">{{item.v}}</block><text ks:else id="{{item.uid}}" ${this.buildFlattenNodeAttributes('text')}>
  <block ks:for="{{item.cn}}" ks:key="uid">
    ${indent(child, 4)}
  </block>
</text>`
    return template
  }

  modifyLoopBody = (child: string, nodeName: string): string => {
    switch (nodeName) {
      case 'view':
        return this.buildFlattenView()

      case 'text':
      case 'static-text':
        return this.buildFlattenText()

      case 'cover-view':
        return this.buildFlattenCoverView()

      default:
        return child
    }
  }
}
