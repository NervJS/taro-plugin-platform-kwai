# `@tarojs/plugin-platform-kwai`

> 注意：此插件尚未经过完整测试，谨慎使用

Taro 插件。用于支持编译为快手小程序。

## 使用

#### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: [
    '@tarojs/plugin-platform-kwai'
  ]
}
```

#### 2. 编译为快手小程序

```shell
taro build --type kwai
taro build --type kwai --watch
```

#### 其它

##### 平台判断

```js
if (process.TARO_ENV === 'kwai') {
  // ...
}
```

##### API

快手小程序拓展了一些独有 API，可以通过 `Taro.xxx` 来调用，例：

```js
Taro.getSelectedTextRange()
```
