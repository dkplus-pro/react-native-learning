import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const learningSteps = [
  '认识 Expo：用统一工具链启动 iOS、Android 与 Web 调试。',
  '理解 React Native 基础组件：View 负责布局，Text 负责文本渲染。',
  '建立 TypeScript 习惯：先写清数据形状，再组织界面。',
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>Lesson 01</Text>
        <Text style={styles.title}>从 Web 架构师视角打开 React Native</Text>
        <Text style={styles.summary}>
          本课用一个最小 Expo + TypeScript 屏幕建立心智模型：React 仍然负责组件，React Native
          将组件映射到原生 UI，而 Expo 提供开发、调试与发布工具链。
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>本课检查点</Text>
          {learningSteps.map((step, index) => (
            // 使用稳定的文本内容作为 key，避免示例中引入额外状态或 id 概念。
            <Text key={step} style={styles.step}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    gap: 20,
    padding: 24,
  },
  eyebrow: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: '#0F172A',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 38,
  },
  summary: {
    color: '#334155',
    fontSize: 17,
    lineHeight: 28,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    gap: 12,
    padding: 20,
    shadowColor: '#0F172A',
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
  cardTitle: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '700',
  },
  step: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
  },
});
