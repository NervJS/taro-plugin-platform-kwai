import { UnRecursiveTemplate } from '@tarojs/shared/dist/template';
import type { IOptions } from './index';
export declare class Template extends UnRecursiveTemplate {
    pluginOptions: IOptions;
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
    constructor(pluginOptions: IOptions);
    replacePropName(name: string, value: string, componentName: string): string;
    buildXSTepFocus(nn: string): string;
    modifyTemplateResult: (res: string, nodeName: string, _level: any, children: any) => string;
}
