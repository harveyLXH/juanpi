### 跨平台卷皮项目

#### 技术栈

- Taro + React + Redux Toolkit

### 项目打包配置

- 区分打包文件夹（config/index.js）

```js
outputRoot: `dist/${process.env.TARO_ENV}`,

```
- 设置project.config.josn
```js
  "miniprogramRoot": "./dist/weapp",
```