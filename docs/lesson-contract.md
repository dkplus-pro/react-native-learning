# Lesson 交付契约

此契约用于审查每个 `lessons/lesson-XX` 是否满足“中文课程文档 + 带注释 TypeScript 代码 + 独立可运行 Expo demo”的要求。

## 目录契约

每课至少包含：

- `README.md`：中文讲义、运行命令、代码导读。
- `package.json`：独立脚本和依赖，不引用仓库根目录不存在的工作区配置。
- `App.tsx`：Expo/RN 入口，能表达本课主题。
- `tsconfig.json`：启用 TypeScript 检查，优先继承 Expo 模板默认设置。
- Expo 配置文件：`app.json`、`app.config.ts` 或模板生成的等价配置。

推荐包含：

- `src/components/`：可复用 UI 组件。
- `src/data/`：静态示例数据。
- `src/utils/`：无副作用工具函数。

## 独立运行契约

在每个 lesson 目录内，应能执行：

```bash
npm install
npm run start
```

如果 lesson 提供静态检查脚本，还应支持：

```bash
npm run typecheck
npm run lint
```

禁止：

- 依赖其他 lesson 的源码路径。
- 依赖仓库根目录未声明的 package script。
- 把多个课次的 demo 混合在同一个 Expo 项目中。

## TypeScript 与代码注释契约

- 所有示例代码使用 TypeScript/TSX。
- Props、数据模型、事件处理函数应有明确类型。
- 注释使用中文，优先解释移动端差异、架构边界和关键取舍。
- 不为每一行代码写机械注释；注释应帮助有 Web 背景的读者建立 RN 心智模型。

## 课程递进契约

每课只引入少量新概念：

- 新概念必须在 README 中解释。
- 旧概念可以复用，但不要要求读者阅读其他 lesson 源码才能运行当前 demo。
- 如果需要跨课对比，用文档链接说明，不用源码耦合实现。

## 审查完成定义

一个 lesson 可被认为完成，需要满足：

1. 文档完整：目标、概念、运行方式、代码导读齐全。
2. demo 独立：在 lesson 目录内即可安装和启动。
3. 类型明确：核心数据结构和组件 Props 没有隐式 `any`。
4. 注释有效：关键 RN 差异有中文解释。
5. 验证可复现：README 中的命令与 `package.json` scripts 对齐。
