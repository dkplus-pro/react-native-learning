export type CourseStage = {
  readonly id: string;
  readonly title: string;
  readonly focus: string;
  readonly deliverable: string;
  readonly done: boolean;
};

export const courseStages: readonly CourseStage[] = [
  {
    id: 'foundation',
    title: '基础组件与样式',
    focus: '把 Web 组件化经验迁移到 View/Text/StyleSheet。',
    deliverable: '欢迎页和知识卡片。',
    done: true,
  },
  {
    id: 'composition',
    title: 'Props、State 与列表组合',
    focus: '用清晰 props 合约拆分课程卡片。',
    deliverable: '可切换的学习阶段列表。',
    done: false,
  },
  {
    id: 'system',
    title: '设计系统与平台约束',
    focus: '将 token、间距、颜色和阴影映射到 RN 样式对象。',
    deliverable: '课程仪表盘。',
    done: false,
  },
];
