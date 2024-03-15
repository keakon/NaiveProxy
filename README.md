# Naive Proxy for Chrome

一个不占用内存的 Chrome 代理扩展。

## 使用方法

1. 编辑 `proxy.js`，确保 `singleProxy` 中的服务器地址和端口正确。
2. 打开 Chrome 扩展程序页面（chrome://extensions/），启用「开发者模式」，点击「加载已解压的扩展程序」按钮，选择本目录。

## 注意事项

1. 如果安装了其他代理扩展，需禁用它们。
2. 如需停用或移除本扩展，可进入 Chrome 扩展程序页面进行管理。

## 详细配置

如需使用 PAC 脚本等，请参考[官方文档](https://developer.chrome.com/docs/extensions/reference/api/proxy)。