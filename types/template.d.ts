import { RecursiveTemplate } from '@tarojs/shared/dist/template';
export declare class Template extends RecursiveTemplate {
    supportXS: boolean;
    Adapter: {
        if: string;
        else: string;
        elseif: string;
        for: string;
        forItem: string;
        forIndex: string;
        key: string;
        type: string;
    };
    modifyLoopContainer: (children: string, nodeName: string) => string;
    modifyLoopBody: (child: string, nodeName: string) => string;
    modifyTemplateResult: (res: string, nodeName: string) => string;
    buildBaseTemplate(): string;
    /**
     * cover-view 无法包含 template
     *
     * 无法使用递归模版
     */
    coverViewTemplate(loop: number): string;
    createCoverViewLoopTemplate(loop: number): any;
    /**
     * 默认返回 ```class="{{i.cl}}" style="{{i.sl}}"```
     *
     * @example itemContext='item'
     * class="{{i.cl}}" => class="{{item.cl}}"
     *
     */
    buildNodeAttr(nodeName: string, itemContext?: string): string;
}
