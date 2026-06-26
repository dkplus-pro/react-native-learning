// Minimal ambient declarations used by the repository-level static checks.
// Each lesson remains a standalone Expo app and installs the real packages
// from its own package.json when run locally.
declare module 'react' {
  export type ReactNode = unknown;
  export type Dispatch<T> = (value: T) => void;
  export type SetStateAction<T> = T | ((previous: T) => T);
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export function useState<T>(initial: T | (() => T)): [T, Dispatch<SetStateAction<T>>];
  export function useReducer<R extends (state: any, action: any) => any, I>(
    reducer: R,
    initialArg: I,
  ): [ReturnType<R>, Dispatch<Parameters<R>[1]>];
  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;
  const React: { createElement: (...args: unknown[]) => unknown };
  export default React;
}

declare namespace JSX {
  interface Element {}
  interface IntrinsicAttributes {
    key?: unknown;
  }
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}

declare module 'react-native' {
  export const ActivityIndicator: any;
  export const FlatList: any;
  export const Pressable: any;
  export const SafeAreaView: any;
  export const ScrollView: any;
  export const StatusBar: any;
  export const StyleSheet: { create<T extends Record<string, unknown>>(styles: T): T };
  export const Text: any;
  export const TextInput: any;
  export const View: any;
}
