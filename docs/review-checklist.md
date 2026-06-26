# 代码质量与文档审查清单

本清单用于 Task 3 的 review/document lane，也可作为后续每课合并前的验收标准。

## 文档审查

- [ ] 课程或 lesson README 为中文，面向有经验前端而不是零基础编程读者。
- [ ] 每课说明“Web React 经验如何迁移到 React Native”。
- [ ] 运行命令从 lesson 自己的目录执行，且与 `package.json` scripts 一致。
- [ ] 课程递进清晰：本课新增概念、复用概念、暂不覆盖概念边界明确。
- [ ] 架构师思考题覆盖工程边界、团队协作、性能或发布风险。

## Demo 审查

- [ ] `lessons/lesson-XX` 是独立 Expo/TypeScript demo。
- [ ] `App.tsx` 或入口文件可读，示例聚焦一个主题。
- [ ] 组件拆分不过度抽象；初级课程避免提前引入复杂架构层。
- [ ] 样式使用 React Native 支持的属性，不假设浏览器 CSS 能力。
- [ ] 移动端交互状态（loading/error/empty/disabled）在相关课程中被显式处理。

## TypeScript 审查

- [ ] 组件 Props、列表 item、事件处理函数有显式类型。
- [ ] 没有为省事使用 `any`；如必须使用，应在注释中说明边界。
- [ ] 示例数据与 UI 展示类型一致。
- [ ] `npm run typecheck` 或等价命令可执行。

## Expo / React Native 审查

- [ ] 初始化方式与团队上下文中的 Expo 官方路径一致。
- [ ] 不引入未讲解的重型依赖；新增依赖必须服务当前 lesson 目标。
- [ ] 资源、配置、入口文件均在 lesson 内自洽。
- [ ] Linux/容器无法证明真机运行时，至少保留静态检查和启动命令证据。

## 集成与协作边界

- [ ] Worker 3 只维护 review/document artifacts，避免覆盖其他 worker 的 demo/test 实现。
- [ ] 若需要修改共享根 README，应先通过 leader 明确协调。
- [ ] 每次 lesson 完成后单独提交，提交信息能对应 lesson 或审查文档。
- [ ] 合并前记录验证命令、通过/失败原因和无法运行的环境限制。

## 当前仓库初始审查（2026-06-26）

- 当前 worker-3 worktree 仅包含 `README.md` 与本次新增 `docs/*` 文档。
- 尚未发现 `package.json`、`lessons/`、Expo demo 或测试配置，因此无法执行真实 TypeScript/Expo 检查。
- 本次变更刻意不编辑根 `README.md`，以降低与其他 worker 的共享文件冲突风险。
