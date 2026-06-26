# lesson-03：设计令牌与平台思维

## 学习目标

- 用 TypeScript 对象组织颜色、圆角和间距 token。
- 理解 React Native 样式对象与 Web CSS cascade 的差异。
- 建立平台差异验收意识。


本课 demo 使用 Expo + TypeScript，可独立安装运行，用于练习移动端设计令牌和平台差异验收。

## 运行方式

```bash
cd lessons/lesson-03
npm install
npm run typecheck
npm start
```

## 架构师视角

Web 设计系统常依赖 CSS 变量、层叠和浏览器布局能力；React Native 更适合用显式 token 与组件封装建立约束。`src/designTokens.ts` 是一个最小设计系统雏形：它不追求抽象完整性，只把跨页面最容易漂移的视觉决策收敛到一个可审查位置。

## 代码阅读顺序

1. `src/designTokens.ts`：设计令牌与课程指标数据。
2. `App.tsx`：如何在 `StyleSheet.create` 中消费 token。
