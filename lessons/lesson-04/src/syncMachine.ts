export type SyncState = {
  readonly status: 'idle' | 'syncing' | 'success' | 'failed';
  readonly completedLessons: number;
  readonly message: string;
};

export type SyncAction =
  | { readonly type: 'start' }
  | { readonly type: 'success'; readonly completedLessons: number }
  | { readonly type: 'fail' }
  | { readonly type: 'reset' };

export const initialSyncState: SyncState = {
  status: 'idle',
  completedLessons: 2,
  message: '本地已有 2 节课进度，尚未与云端同步。',
};

export function syncReducer(state: SyncState, action: SyncAction): SyncState {
  switch (action.type) {
    case 'start':
      return { ...state, status: 'syncing', message: '正在模拟网络同步，请稍候……' };
    case 'success':
      return {
        status: 'success',
        completedLessons: action.completedLessons,
        message: `同步完成：云端记录 ${action.completedLessons} 节课进度。`,
      };
    case 'fail':
      return { ...state, status: 'failed', message: '同步失败：保留本地进度，等待下一次重试。' };
    case 'reset':
      return initialSyncState;
    default:
      return state;
  }
}
