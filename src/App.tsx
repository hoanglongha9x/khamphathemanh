/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  loadUserProfile, 
  saveUserProfile, 
  resetUserProfile, 
  saveStationResult, 
  resetStationResult, 
  INITIAL_USER_PROFILE 
} from './utils/storage';
import { STATIONS_DATA } from './data/stationsData';
import { Station, StationResult, UserProfileState } from './types';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { StationCard } from './components/StationCard';
import { StationModal } from './components/StationModal';
import { ProfileView } from './components/ProfileView';
import { TeacherGuideModal } from './components/TeacherGuideModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { 
  Sparkles, 
  Compass, 
  FileText, 
  Filter, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Cpu,
  Brain
} from 'lucide-react';

export default function App() {
  const [userProfile, setUserProfile] = useState<UserProfileState>(INITIAL_USER_PROFILE);
  const [activeStation, setActiveStation] = useState<Station | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'logic-stem' | 'creative-comm' | 'social-leadership'>('all');

  const stationsGridRef = useRef<HTMLDivElement>(null);

  // Load profile from LocalStorage on mount
  useEffect(() => {
    const loaded = loadUserProfile();
    setUserProfile(loaded);
  }, []);

  const completedCount = Object.keys(userProfile.completedStations || {}).length;

  // Filter stations logic
  const filteredStations = STATIONS_DATA.filter(station => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'logic-stem') {
      return ['math-logic', 'tech-algorithm', 'science-discovery'].includes(station.id);
    }
    if (selectedFilter === 'creative-comm') {
      return ['creativity-design', 'language-expression'].includes(station.id);
    }
    if (selectedFilter === 'social-leadership') {
      return ['communication-collaboration', 'organization-planning', 'empathy-support'].includes(station.id);
    }
    return true;
  });

  // Handlers
  const handleStartExploring = () => {
    // Find first uncompleted station or open the first one
    const firstUnfinished = STATIONS_DATA.find(s => !userProfile.completedStations[s.id]);
    if (firstUnfinished) {
      setActiveStation(firstUnfinished);
    } else if (stationsGridRef.current) {
      stationsGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStation = (station: Station) => {
    setActiveStation(station);
  };

  const handleRedoStation = (station: Station) => {
    const updated = resetStationResult(station.id);
    setUserProfile(updated);
    setActiveStation(station);
  };

  const handleSaveResult = (result: StationResult) => {
    const updated = saveStationResult(result);
    setUserProfile(updated);
  };

  const handleNextStation = (currentStationId: string) => {
    const currentIndex = STATIONS_DATA.findIndex(s => s.id === currentStationId);
    if (currentIndex >= 0 && currentIndex < STATIONS_DATA.length - 1) {
      setActiveStation(STATIONS_DATA[currentIndex + 1]);
    } else {
      setActiveStation(null);
      setShowProfile(true);
    }
  };

  const handleResetConfirm = () => {
    resetUserProfile();
    setUserProfile(INITIAL_USER_PROFILE);
    setShowResetModal(false);
    setActiveStation(null);
    setShowProfile(false);
  };

  const handleUpdateProfile = (updated: UserProfileState) => {
    saveUserProfile(updated);
    setUserProfile(updated);
  };

  // If viewing the Profile Page
  if (showProfile) {
    return (
      <ProfileView
        userProfile={userProfile}
        stations={STATIONS_DATA}
        onClose={() => setShowProfile(false)}
        onUpdateProfile={handleUpdateProfile}
        onSelectStation={(station) => {
          setShowProfile(false);
          setActiveStation(station);
        }}
        onResetAll={() => setShowResetModal(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        completedCount={completedCount}
        totalStations={STATIONS_DATA.length}
        completedStations={userProfile.completedStations}
        onOpenProfile={() => setShowProfile(true)}
        onOpenGuide={() => setShowGuide(true)}
        onResetAll={() => setShowResetModal(true)}
      />

      {/* Hero Banner */}
      <HeroBanner
        completedCount={completedCount}
        totalStations={STATIONS_DATA.length}
        onStartExploring={handleStartExploring}
        onOpenProfile={() => setShowProfile(true)}
        onOpenGuide={() => setShowGuide(true)}
      />

      {/* Main Experience Grid Section */}
      <main ref={stationsGridRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 flex-1 w-full">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>8 Trạm Trải Nghiệm Thực Tế</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Chọn trạm em muốn khám phá
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Thứ tự tự do tùy ý chọn • Thời lượng 3–7 phút mỗi trạm • Phản hồi suy luận thực tế
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs self-start md:self-auto text-xs font-semibold">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Tất cả (8)
            </button>
            <button
              onClick={() => setSelectedFilter('logic-stem')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedFilter === 'logic-stem'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Toán & Khoa học (3)
            </button>
            <button
              onClick={() => setSelectedFilter('creative-comm')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedFilter === 'creative-comm'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Sáng tạo & Ngôn ngữ (2)
            </button>
            <button
              onClick={() => setSelectedFilter('social-leadership')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedFilter === 'social-leadership'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Giao tiếp & Quản trị (3)
            </button>
          </div>
        </div>

        {/* 8 Stations Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredStations.map(station => (
            <StationCard
              key={station.id}
              station={station}
              result={userProfile.completedStations[station.id]}
              onSelect={handleSelectStation}
              onRedo={handleRedoStation}
            />
          ))}
        </div>

        {/* Floating Call to Profile if completed some stations */}
        {completedCount > 0 && (
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-sky-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>Tiến trình khám phá của em đã bắt đầu hình thành!</span>
              </div>
              <p className="text-sm sm:text-base font-semibold">
                Em đã hoàn tất {completedCount}/8 trạm. Xem hồ sơ để nhận diện các biểu hiện năng lực và lập kế hoạch rèn luyện nhé.
              </p>
            </div>

            <button
              onClick={() => setShowProfile(true)}
              className="px-6 py-3 rounded-2xl bg-white text-indigo-900 font-bold text-xs sm:text-sm hover:bg-slate-100 active:scale-95 transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>Xem hồ sơ bản thân ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">
              KHÁM PHÁ TÔI – TÔI CÓ THẾ MẠNH GÌ?
            </div>
            <p>
              Học liệu số hỗ trợ môn Hoạt động trải nghiệm, hướng nghiệp Lớp 10 • Chương trình Giáo dục phổ thông 2018
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button 
              onClick={() => setShowGuide(true)} 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold cursor-pointer"
            >
              Hướng dẫn giáo viên & kiểm thử
            </button>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Lưu cục bộ an toàn trên thiết bị
            </span>
            <span>•</span>
            <button 
              onClick={() => setShowResetModal(true)} 
              className="hover:text-rose-600 cursor-pointer"
            >
              Đặt lại tiến độ
            </button>
          </div>
        </div>
      </footer>

      {/* Station Modal */}
      {activeStation && (
        <StationModal
          station={activeStation}
          existingResult={userProfile.completedStations[activeStation.id]}
          onClose={() => setActiveStation(null)}
          onSaveResult={handleSaveResult}
          onNextStation={() => handleNextStation(activeStation.id)}
          onOpenProfile={() => {
            setActiveStation(null);
            setShowProfile(true);
          }}
        />
      )}

      {/* Teacher Guide Modal */}
      {showGuide && (
        <TeacherGuideModal onClose={() => setShowGuide(false)} />
      )}

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <ResetConfirmModal
          onClose={() => setShowResetModal(false)}
          onConfirm={handleResetConfirm}
        />
      )}

    </div>
  );
}
