# 验证说明

本仓库使用根目录脚本对课程结构和每课 demo 的最低可运行契约做自动检查。

## 必跑命令

```bash
npm run lint
npm test
npm run typecheck
npm run verify
```

## 验证范围

- `lessons/lesson-XX` 目录必须存在，并按两位数字递增命名。
- 每课必须包含 `README.md`、`package.json`、`app.json`、`App.tsx` 和 `tsconfig.json`。
- 每课 `package.json` 必须提供 `start` 与 `typecheck` 脚本，并显式声明 Expo、React、React Native 与 TypeScript。
- 每课 `App.tsx` 必须有解释性注释、默认导出的组件、React Native 基础组件导入与 `StyleSheet.create`。
- 每课 README 必须说明学习目标、运行方式、Expo 与 TypeScript。

> 说明：当前容器不保证具备 iOS/Android 模拟器能力，因此根目录验证以静态结构、脚本契约与 TypeScript 形状检查为主；真实设备/模拟器 smoke test 应在具备 Expo Go 或开发构建环境的机器上执行。
