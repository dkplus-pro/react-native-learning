# React Native 渐进课程蓝图（Expo + TypeScript）

本课程面向已有约 7 年 Web 前端经验、正在从零进入 React Native 的架构师。课程默认采用 Expo + TypeScript，因为该路径更适合快速验证移动端概念、降低原生工程门槛，并且与当前团队上下文中记录的 React Native 官方入门建议保持一致。

## 学习目标

完成课程后，学习者应能：

1. 理解 React Native 与 Web React 在渲染模型、样式系统、运行环境和发布链路上的差异。
2. 使用 Expo 创建、运行、调试和组织 TypeScript React Native 应用。
3. 为每一课维护独立可运行 demo，避免跨课隐式依赖。
4. 建立适合移动端的组件、状态、导航、数据请求、性能和工程化心智模型。
5. 从前端架构师视角评估 React Native 项目的边界、风险和演进路径。

## 课程结构约定

每节课必须独立位于：

```text
lessons/lesson-XX/
├── README.md          # 中文课程讲义与运行说明
├── package.json       # 独立依赖与脚本
├── app.json 或 app.config.*
├── tsconfig.json
├── App.tsx            # 可直接运行的入口，包含必要中文注释
└── src/               # 可选：组件、数据、工具函数等
```

约定：

- `XX` 使用两位数字，例如 `lesson-01`。
- 每课 demo 必须能在自己的目录内安装依赖并启动，不依赖其他 lesson 的源码。
- 示例代码应优先展示一个清晰主题，不把后续课程概念提前混入。
- 中文注释解释“为什么这样写”，避免把代码逐字翻译成注释。

## 建议课程序列

| 课次 | 主题 | 架构师关注点 | 最小 demo |
| --- | --- | --- | --- |
| 01 | 环境、Expo 项目与第一个界面 | Expo 工作流、移动端运行闭环 | 个人名片/欢迎页 |
| 02 | RN 基础组件与样式系统 | Yoga/Flexbox、样式与 Web CSS 差异 | 响应式资料卡片 |
| 03 | 组件拆分与 Props/State | 组件边界、状态归属 | 计数器 + 列表筛选 |
| 04 | 输入、表单与事件 | 触控事件、键盘、受控输入 | 登录表单原型 |
| 05 | 列表与数据建模 | FlatList、key、渲染性能 | 课程清单 |
| 06 | 网络请求与异步状态 | loading/error/empty、请求边界 | API 数据面板 |
| 07 | 导航与页面结构 | 页面栈、模块边界、深链伏笔 | 多页面课程 App |
| 08 | 本地存储与离线体验 | AsyncStorage、缓存策略 | 收藏课程 |
| 09 | 性能与调试 | 渲染成本、Profiler、日志策略 | 性能对比 demo |
| 10 | 发布、配置与架构复盘 | Expo 配置、EAS、团队规范 | 最终综合 demo |

## 每课文档模板

每个 `lessons/lesson-XX/README.md` 建议包含：

1. **本课目标**：用 3-5 条说明学习完成后的能力。
2. **前置知识**：说明需要的 Web/React 经验映射。
3. **核心概念**：解释 React Native 语义，而不是只给 API 清单。
4. **代码导读**：按文件说明 demo 如何组织。
5. **运行方式**：列出 `npm install`、`npm run start` 等命令。
6. **架构师思考题**：提示工程边界、可维护性、性能或团队协作问题。
7. **延伸练习**：给出不破坏本课主题的小型改造任务。

## 版本与官方上下文

本蓝图依据团队上下文文件 `.omx/context/react-native-course-20260626T034738Z.md`：

- 官方入门路径建议使用 Expo 创建 React Native 应用。
- 课程以 Expo + TypeScript 为主线。
- 上下文记录的 2026-06-26 npm 观察版本：`expo@56.0.12`、`react-native@0.86.0`、`react@19.2.7`。

实际 lesson 初始化时应使用 `npx create-expo-app@latest` 或等价 Expo 官方模板，并在该 lesson 的 `package.json` 中锁定生成结果，避免不同课次之间隐式漂移。
