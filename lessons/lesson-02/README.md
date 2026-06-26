# lesson-02：Props、State 与列表组合

## 学习目标

- 用 `useState` 管理移动端交互状态。
- 用显式 props 合约拆分父子组件。
- 理解 `Pressable` 在触摸交互中的角色。


本课 demo 使用 Expo + TypeScript，可独立安装运行，用于练习移动端状态与列表组合。

## 运行方式

```bash
cd lessons/lesson-02
npm install
npm run typecheck
npm start
```

## 架构师视角

多年 Web 经验会让你很自然地拆组件，但 React Native 中组件拆分还要考虑触摸反馈、列表性能和未来虚拟化。本课的 `StageCard` 不访问全局变量，只通过 props 与父组件通信，保留了迁移到 `FlatList`、远程数据或设计系统组件的空间。

## 代码阅读顺序

1. `src/curriculum.ts`：课程阶段数据类型和模拟数据。
2. `App.tsx`：父组件状态、派生选择项和可点击卡片。
