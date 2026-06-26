import React, { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { CourseStage, courseStages } from './src/curriculum';

function StageCard({ stage, active, onSelect }: { stage: CourseStage; active: boolean; onSelect: () => void }) {
  return (
    <Pressable onPress={onSelect} style={[styles.stageCard, active && styles.stageCardActive]}>
      {/* 架构师提示：StageCard 只接收稳定 props，不读取全局状态，方便未来迁移到列表虚拟化或服务端数据。 */}
      <View style={styles.stageHeader}>
        <Text style={styles.stageTitle}>{stage.title}</Text>
        <Text style={[styles.badge, stage.done ? styles.badgeDone : styles.badgeNext]}>
          {stage.done ? '已完成' : '下一步'}
        </Text>
      </View>
      <Text style={styles.stageBody}>{stage.focus}</Text>
      <Text style={styles.deliverable}>交付：{stage.deliverable}</Text>
    </Pressable>
  );
}

// 本课刻意让 App 持有唯一选择状态，方便你观察父子组件的数据流边界。
export default function App() {
  const [selectedId, setSelectedId] = useState(courseStages[1]?.id ?? courseStages[0].id);
  const selectedStage = useMemo(
    () => courseStages.find((stage) => stage.id === selectedId) ?? courseStages[0],
    [selectedId],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.kicker}>Lesson 02</Text>
        <Text style={styles.title}>用 Props 和 State 组织可演进课程列表</Text>
        <Text style={styles.description}>
          你已经熟悉 React，本课关注移动端组件边界：父组件管理选择状态，子组件只负责展示和事件回调。
        </Text>

        <View style={styles.summaryPanel}>
          <Text style={styles.summaryLabel}>当前聚焦阶段</Text>
          <Text style={styles.summaryTitle}>{selectedStage.title}</Text>
          <Text style={styles.summaryBody}>{selectedStage.focus}</Text>
        </View>

        {courseStages.map((stage) => (
          <StageCard
            key={stage.id}
            stage={stage}
            active={stage.id === selectedId}
            onSelect={() => setSelectedId(stage.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  screen: { padding: 24, gap: 16 },
  kicker: { color: '#7C3AED', fontSize: 14, fontWeight: '800', letterSpacing: 1 },
  title: { color: '#111827', fontSize: 28, fontWeight: '800', lineHeight: 36 },
  description: { color: '#475569', fontSize: 16, lineHeight: 24 },
  summaryPanel: { backgroundColor: '#312E81', borderRadius: 24, padding: 20, gap: 8 },
  summaryLabel: { color: '#C4B5FD', fontSize: 13, fontWeight: '800' },
  summaryTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: '800' },
  summaryBody: { color: '#EDE9FE', fontSize: 15, lineHeight: 22 },
  stageCard: { backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: 20, borderWidth: 1, padding: 18, gap: 10 },
  stageCardActive: { borderColor: '#7C3AED', backgroundColor: '#F5F3FF' },
  stageHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  stageTitle: { color: '#0F172A', flex: 1, fontSize: 18, fontWeight: '800' },
  badge: { borderRadius: 999, fontSize: 12, fontWeight: '800', overflow: 'hidden', paddingHorizontal: 10, paddingVertical: 5 },
  badgeDone: { backgroundColor: '#DCFCE7', color: '#166534' },
  badgeNext: { backgroundColor: '#FEF3C7', color: '#92400E' },
  stageBody: { color: '#334155', fontSize: 15, lineHeight: 22 },
  deliverable: { color: '#64748B', fontSize: 14, fontWeight: '700' },
});
