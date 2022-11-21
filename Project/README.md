# rabbit-vue3-ts-小兔鲜儿2022新版

项目使用 `Vite` + `Vue3` + `TypeScript` + `Pinia` + `VueRouter@4` 进行开发。

代码检查和格式化为：`ESlint` + `Prettier`

## 推荐 IDE 设置

[VSCode 编辑器](https://code.visualstudio.com/) + [插件-Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (注意禁用 `Vetur` 插件) + [插件-TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

> 🚨注意：
>
> - Vue3 + TS 开发共安装 **2** 个 Volar 插件(拓展)，其中一个为 TS 支持插件(拓展)。
> - 需禁用 `Vetur` 插件(拓展)。

## 在 TS 中支持 `.vue` 导入

VsCode 内置的 TypeScript 插件(拓展)不能处理 `.vue` 导入的类型信息，所以我们用 `vue-tsc` 替换 `tsc` CLI 来进行类型检查。在编辑器中，我们需要通过 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) 插件来识别 `.vue` 文件的 TypeScript 类型信息。



如果你觉得独立的 TypeScript 插件(拓展)不够快，Volar 还实现了一个[接管模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)，它的性能更好。

可以通过以下步骤启用：

1. 禁用内置的 TypeScript 插件(拓展)
    1) 在 `VSCode` 的拓展面板输入 `@builtin typescript` 搜索内置的 Typescript 插件(拓展)。
    2) 找到 `TypeScript and JavaScript Language Features`，右键选择 “禁用”
2. 重启 VsCode 编辑器，在重启后生效。



## Vite 自定义配置

点击查看 [⚓Vite 配置参考](https://cn.vitejs.dev/config/).

## 脚本命令

### package.json

```json
"scripts": {
    "dev": "vite",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "typecheck": "vue-tsc --noEmit",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview --port 5050"
}
```

### 安装依赖

- 基于 `packjson.json` 文件安装项目所需依赖包。

```sh
yarn
```

### 运行开发服务器

- 通过 `vite` 启动开发服务器，编译源码和热重载。

```sh
yarn dev
```

### 运行  [ESLint](https://eslint.org/) 格式化

- ✨开发过程中，所有**黄色警告**类的格式问题，都可通过运行以下命令修复警告问题。

```sh
yarn lint
```

### 运行 TS 检查

- 调用 `vue-tsc` 检查 TypeScript 类型问题。（代码重构时十分好用）

```sh
yarn typecheck
```

### 运行打包命令

- 包含 TS 类型检查，编译 和 压缩。

```sh
yarn build
```

### 预览打包后的项目

- 运行 `yarn build` 打包后的项目源码。

```
yarn preview
```


