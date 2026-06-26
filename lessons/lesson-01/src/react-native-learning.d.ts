declare namespace JSX {
  interface IntrinsicAttributes {
    key?: string;
  }
}

declare module 'react' {
  const React: unknown;
  export default React;
}

declare module 'react-native' {
  export type TextStyle = Record<string, unknown>;
  export type ViewStyle = Record<string, unknown>;

  export const SafeAreaView: (props: { children?: unknown; style?: ViewStyle }) => unknown;
  export const ScrollView: (props: { children?: unknown; contentContainerStyle?: ViewStyle }) => unknown;
  export const StatusBar: (props: { barStyle?: 'dark-content' | 'light-content' | 'default' }) => unknown;
  export const Text: (props: { children?: unknown; key?: string; style?: TextStyle }) => unknown;
  export const View: (props: { children?: unknown; style?: ViewStyle }) => unknown;
  export const StyleSheet: {
    create<T extends Record<string, ViewStyle | TextStyle>>(styles: T): T;
  };
}
