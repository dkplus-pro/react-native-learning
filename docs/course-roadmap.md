# React Native 渐进课程路线图

本仓库面向已经具备 7 年前端经验、但从零开始学习 React Native 的架构师。课程采用 Expo + TypeScript，目标不是重复 Web 入门知识，而是把已有的组件化、状态管理、工程化、性能与可维护性经验迁移到移动端语境。

## 官方上下文对齐

依据 `.omx/context/react-native-course-20260626T034738Z.md`：

- 使用 Expo 创建低摩擦 React Native 应用。
- 示例依赖锁定到上下文观察到的最新主线：`expo@^56.0.12`、`react-native@^0.86.0`、`react@^19.2.7`。
- 每一课都放在独立目录 `lessons/lesson-XX`，包含自己的 `package.json`、`app.json`、`tsconfig.json` 和 `App.tsx`。
- Linux/容器内无法证明真实 iOS/Android 原生运行，因此仓库提供静态类型检查、结构测试与轻量 lint 作为可复现验证。

## 学习路径

| 课次 | 主题 | 交付物 | 架构师迁移重点 |
| --- | --- | --- | --- |
| lesson-01 | Expo 与 React Native 基础视图 | 一个欢迎页和移动端布局基线 | 从 DOM/CSS 转换到原生组件与 StyleSheet |
| lesson-02 | Props、State 与列表组合 | 可切换阶段的课程卡片列表 | 以组合边界替代页面级巨组件 |
| lesson-03 | 设计令牌与平台思维 | 可复用课程仪表盘 | 把设计系统能力迁移到 RN 样式对象 |
| lesson-04 | 异步状态与离线优先 | 模拟课程同步流程 | 用 reducer 明确移动端网络状态机 |

## 推荐节奏

1. 先读每课 README，确认学习目标与架构师视角。
2. 在对应目录运行 `npm install`，再执行 `npm run typecheck` 与 `npm start`。
3. 对照 `App.tsx` 中的中文注释理解代码边界。
4. 每完成一课，用 `git commit` 固化可回滚节点；如果远程权限可用，再推送对应提交。

## 后续扩展

- 增加 `lesson-05`：Expo Router 与导航架构。
- 增加 `lesson-06`：原生能力、权限与 Expo Modules。
- 增加端到端设备验证记录，例如真机扫码、Android 模拟器截图与 iOS Simulator 截图。
