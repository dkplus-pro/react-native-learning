import React, { useEffect, useReducer } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { initialSyncState, syncReducer } from './src/syncMachine';

// 本课用 reducer 先固定异步状态边界，再用 useEffect 模拟网络同步副作用。
export default function App() {
  const [state, dispatch] = useReducer(syncReducer, initialSyncState);

  useEffect(() => {
    if (state.status !== 'syncing') return;

    const timer = setTimeout(() => {
      dispatch({ type: 'success', completedLessons: state.completedLessons + 1 });
    }, 800);

    return () => clearTimeout(timer);
  }, [state.completedLessons, state.status]);

  const isSyncing = state.status === 'syncing';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.screen}>
        {/* 架构师提示：移动端网络不稳定，先用 reducer 明确状态机，再替换成真实 API/缓存层。 */}
        <Text style={styles.kicker}>Lesson 04</Text>
        <Text style={styles.title}>异步状态与离线优先的课程进度同步</Text>
        <Text style={styles.description}>
          本 demo 用定时器模拟网络请求，重点是把 idle、syncing、success、failed 四种状态显式建模。
        </Text>

        <View style={styles.syncCard}>
          <Text style={styles.statusLabel}>当前状态：{state.status}</Text>
          <Text style={styles.progress}>{state.completedLessons}/4</Text>
          <Text style={styles.message}>{state.message}</Text>
          {isSyncing ? <ActivityIndicator color="#FFFFFF" /> : null}
        </View>

        <View style={styles.actions}>
          <Pressable
            disabled={isSyncing}
            onPress={() => dispatch({ type: 'start' })}
            style={[styles.button, isSyncing && styles.buttonDisabled]}
          >
            <Text style={styles.buttonText}>{isSyncing ? '同步中' : '同步下一课'}</Text>
          </Pressable>
          <Pressable onPress={() => dispatch({ type: 'fail' })} style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>模拟失败</Text>
          </Pressable>
          <Pressable onPress={() => dispatch({ type: 'reset' })} style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>重置本地状态</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#111827' },
  screen: { flex: 1, justifyContent: 'center', padding: 24, gap: 18 },
  kicker: { color: '#93C5FD', fontSize: 14, fontWeight: '800', letterSpacing: 1 },
  title: { color: '#FFFFFF', fontSize: 30, fontWeight: '900', lineHeight: 38 },
  description: { color: '#CBD5E1', fontSize: 16, lineHeight: 24 },
  syncCard: { backgroundColor: '#2563EB', borderRadius: 28, padding: 24, gap: 12 },
  statusLabel: { color: '#DBEAFE', fontSize: 14, fontWeight: '800' },
  progress: { color: '#FFFFFF', fontSize: 56, fontWeight: '900' },
  message: { color: '#EFF6FF', fontSize: 16, lineHeight: 24 },
  actions: { gap: 10 },
  button: { alignItems: 'center', backgroundColor: '#22C55E', borderRadius: 18, padding: 16 },
  buttonDisabled: { backgroundColor: '#64748B' },
  buttonText: { color: '#052E16', fontSize: 16, fontWeight: '900' },
  secondaryButton: { alignItems: 'center', borderColor: '#475569', borderRadius: 18, borderWidth: 1, padding: 14 },
  secondaryButtonText: { color: '#E2E8F0', fontSize: 15, fontWeight: '800' },
});
