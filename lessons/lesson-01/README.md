# Lesson 01：从 Web 架构师视角打开 React Native

## 学习目标

- 知道 Expo 在 React Native 新项目中的角色：创建、运行、调试与跨平台预览。
- 将熟悉的 React 组件模型迁移到原生 UI：`View` 类似布局容器，`Text` 专门渲染文本。
- 用 TypeScript 和严格配置作为后续课程的默认工程基线。

## 运行方式

本课是独立 demo，进入课程目录后单独安装依赖并启动：

```bash
cd lessons/lesson-01
npm install
npm run start
```

如果需要先检查 TypeScript 形状：

```bash
npm run typecheck
```

## 代码导读

- `App.tsx`：最小可读屏幕，展示 `SafeAreaView`、`ScrollView`、`Text`、`View` 与 `StyleSheet`。
- `app.json`：Expo 应用元信息，保持每课 demo 可独立启动。
- `tsconfig.json`：启用严格 TypeScript 规则，帮助有经验的前端架构师从第一课就关注边界。

## 架构师提示

React Native 不是浏览器 DOM 的轻量替代品。你仍然写 React，但布局、文本、触摸、导航与性能边界都落在原生运行时上。后续课程会逐步加入状态、列表、导航、网络、离线缓存与发布流水线。
