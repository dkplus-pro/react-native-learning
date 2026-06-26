# lesson-04：异步状态与离线优先

## 学习目标

- 用 `useReducer` 描述移动端异步状态机。
- 理解离线优先：失败时保留本地进度，而不是清空用户状态。
- 为未来接入真实 API、缓存和重试策略建立清晰边界。


本课 demo 使用 Expo + TypeScript，可独立安装运行，用于练习异步状态机和离线优先边界。

## 运行方式

```bash
cd lessons/lesson-04
npm install
npm run typecheck
npm start
```

## 架构师视角

移动端网络比桌面 Web 更容易遇到弱网、切后台和重试问题。与其让多个 `useState` 分散描述状态，不如先用 reducer 固化状态转换。本课没有引入外部请求库，目的是让状态机本身足够清晰，后续可以把 timer 替换成真实同步服务。

## 代码阅读顺序

1. `src/syncMachine.ts`：状态、动作和 reducer。
2. `App.tsx`：副作用、按钮交互和 UI 状态映射。
