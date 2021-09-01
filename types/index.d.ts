import Kwai from './program';
import type { IPluginContext } from '@tarojs/service';
export { Kwai };
export interface IOptions {
    enablekeyboardAccessory: boolean;
}
declare const _default: (ctx: IPluginContext, options: IOptions) => void;
export default _default;
