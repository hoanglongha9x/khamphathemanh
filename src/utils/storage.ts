import { StationId, StationResult, UserProfileState } from '../types';

const STORAGE_KEY = 'kham_pha_toi_grade10_state_v1';

export const INITIAL_USER_PROFILE: UserProfileState = {
  nickname: 'Học sinh Lớp 10',
  gradeClass: '10',
  startedAt: new Date().toISOString(),
  completedStations: {} as Record<StationId, StationResult>,
  desiredCompetenciesToDevelop: [],
  selfNotes: '',
  weeklyGoals: []
};

export function loadUserProfile(): UserProfileState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_USER_PROFILE;
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_USER_PROFILE,
      ...parsed,
      completedStations: parsed.completedStations || {}
    };
  } catch (err) {
    console.warn('Lỗi khi tải dữ liệu từ LocalStorage:', err);
    return INITIAL_USER_PROFILE;
  }
}

export function saveUserProfile(state: UserProfileState): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (err) {
    console.error('Không thể lưu vào LocalStorage:', err);
    return false;
  }
}

export function resetUserProfile(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (err) {
    console.error('Không thể xóa LocalStorage:', err);
    return false;
  }
}

export function saveStationResult(result: StationResult): UserProfileState {
  const current = loadUserProfile();
  const updated: UserProfileState = {
    ...current,
    completedStations: {
      ...current.completedStations,
      [result.stationId]: result
    }
  };
  saveUserProfile(updated);
  return updated;
}

export function resetStationResult(stationId: StationId): UserProfileState {
  const current = loadUserProfile();
  const updatedCompleted = { ...current.completedStations };
  delete updatedCompleted[stationId];
  const updated: UserProfileState = {
    ...current,
    completedStations: updatedCompleted
  };
  saveUserProfile(updated);
  return updated;
}
