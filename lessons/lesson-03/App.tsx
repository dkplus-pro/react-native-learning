import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { metrics, tokens } from './src/designTokens';

// 本课把视觉决策集中到 token，再在 App 中消费它们，模拟真实设计系统落地路径。
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.hero}>
          {/* 架构师提示：先把 token 约束放在 TypeScript 对象中，后续可替换为跨端设计系统包。 */}
          <Text style={styles.kicker}>Lesson 03</Text>
          <Text style={styles.title}>用设计令牌建立移动端 UI 基线</Text>
          <Text style={styles.description}>
            React Native 没有 CSS cascade。把颜色、圆角、间距和语义层级集中成 token，能降低跨页面漂移。
          </Text>
        </View>

        <View style={styles.metricGrid}>
          {metrics.map((metric) => (
            <View key={metric.label} style={styles.metricCard}>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricLabel}>{metric.label}</Text>
              <Text style={styles.metricHelper}>{metric.helper}</Text>
            </View>
          ))}
        </View>

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>平台差异提醒</Text>
          <Text style={styles.noteText}>
            阴影、字体渲染、状态栏和安全区域都可能在 iOS/Android 上表现不同。设计系统不只是视觉资产，也应该包含平台验收清单。
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: tokens.color.background },
  screen: { padding: tokens.space.screen, gap: tokens.space.gap },
  hero: { backgroundColor: tokens.color.surface, borderRadius: tokens.radius.card, padding: tokens.space.card, gap: 10 },
  kicker: { color: tokens.color.primary, fontSize: 14, fontWeight: '800', letterSpacing: 1 },
  title: { color: tokens.color.text, fontSize: 28, fontWeight: '900', lineHeight: 36 },
  description: { color: tokens.color.muted, fontSize: 16, lineHeight: 24 },
  metricGrid: { flexDirection: 'row', gap: 10 },
  metricCard: { backgroundColor: tokens.color.primarySoft, borderRadius: 18, flex: 1, padding: 14 },
  metricValue: { color: tokens.color.primary, fontSize: 26, fontWeight: '900' },
  metricLabel: { color: tokens.color.text, fontSize: 13, fontWeight: '800', marginTop: 4 },
  metricHelper: { color: tokens.color.muted, fontSize: 12, lineHeight: 18, marginTop: 2 },
  noteCard: { backgroundColor: tokens.color.surface, borderRadius: tokens.radius.card, padding: tokens.space.card, gap: 8 },
  noteTitle: { color: tokens.color.text, fontSize: 20, fontWeight: '900' },
  noteText: { color: tokens.color.muted, fontSize: 15, lineHeight: 23 },
});
