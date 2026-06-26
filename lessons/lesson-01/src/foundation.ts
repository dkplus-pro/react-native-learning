export type FoundationCard = {
  readonly title: string;
  readonly webAnalogy: string;
  readonly nativeMindset: string;
};

export const foundationCards: readonly FoundationCard[] = [
  {
    title: 'View 不是 div',
    webAnalogy: '类似块级容器，但没有浏览器默认样式和 DOM API。',
    nativeMindset: '把 View 当作跨平台原生布局节点，显式定义间距、背景与层级。',
  },
  {
    title: 'Text 必须包裹文本',
    webAnalogy: '不像 HTML 中任意节点都能直接放文本。',
    nativeMindset: '文本是独立原生组件，排版、可访问性和嵌套规则需要单独建模。',
  },
  {
    title: 'StyleSheet 是约束边界',
    webAnalogy: '接近 CSS-in-JS 的静态对象。',
    nativeMindset: '优先集中声明样式，让组件结构与视觉令牌保持可审查。',
  },
];
