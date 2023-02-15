import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import { hostConfig, components } from './runtime-utils'

mergeReconciler(hostConfig)
const internalComponents = mergeInternalComponents(components)
delete internalComponents.Input.cursor
delete internalComponents.Input['placeholder-class']
delete internalComponents.Input['cursor-spacing']
delete internalComponents.Input['confirm-hold']
delete internalComponents.Input['selection-start']
delete internalComponents.Input['selection-end']
