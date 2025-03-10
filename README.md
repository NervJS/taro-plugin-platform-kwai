# `@tarojs/plugin-platform-kwai`

Taro 插件。用于支持编译为快手小程序。

## 版本要求

### Taro 4+

请使用本插件的 7.0 或以上版本

### Taro 3.6.9+

请使用本插件的 6.0 或以上版本

### Taro 3.5+

请使用本插件的 3.0 或以上版本

### Taro 3.4+

请使用本插件的 2.0 或以上版本

### Taro 3.3

请使用本插件的 1.0.x 版本

### Taro 3.2

请使用 [taro-plugin-platform-ks](https://github.com/vadxq/taro-plugin-platform-ks) 的 1.2.x 版本

### Taro 3.1

请使用 [taro-plugin-platform-ks](https://github.com/vadxq/taro-plugin-platform-ks) 的 1.0.x 版本

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

#### 2. 根目录添加配置文件 `project.ks.json`

内容请参考快手小程序的 `project.config.json` 配置。

#### 3. 编译为快手小程序

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

## 注意

* cover-view 只能嵌套8层,子元素只能是 文本/cover-view/cover-image
* cover-view 样式有些不支持,等待快手修复,line-height border-radius
* cover-image 不支持嵌套子元素
* 部分 api 未 promise 化
* 组件属性还未完全支持，参考 [taro-plugin-inject](https://github.com/NervJS/taro-plugin-inject) 进行添加，或者 issue pr

## License

MIT License

Copyright (c) O2Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
