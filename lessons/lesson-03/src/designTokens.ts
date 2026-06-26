export const tokens = {
  color: {
    background: '#F1F5F9',
    surface: '#FFFFFF',
    primary: '#0F766E',
    primarySoft: '#CCFBF1',
    text: '#0F172A',
    muted: '#64748B',
  },
  radius: {
    card: 24,
    pill: 999,
  },
  space: {
    screen: 24,
    card: 18,
    gap: 14,
  },
} as const;

export const metrics = [
  { label: '课程模块', value: '4', helper: '独立 Expo demo' },
  { label: '工程基线', value: 'TS', helper: 'strict typecheck' },
  { label: '平台策略', value: 'Expo', helper: '低摩擦启动' },
] as const;
