import React from 'react';
import { Compass, FileText, RotateCcw, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { StationId, StationResult } from '../types';

interface NavbarProps {
  completedCount: number;
  totalStations: number;
  completedStations: Record<StationId, StationResult>;
  onOpenProfile: () => void;
  onOpenGuide: () => void;
  onResetAll: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  completedCount,
  totalStations,
  onOpenProfile,
  onOpenGuide,
  onResetAll
}) => {
  const percent = Math.round((completedCount / totalStations) * 100);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs dark:bg-slate-900/95 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-xl tracking-tight bg-gradient-to-r from-indigo-700 via-sky-600 to-emerald-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-emerald-400">
                  KHÁM PHÁ TÔI
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full dark:bg-indigo-950 dark:text-indigo-300">
                  Lớp 10
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium truncate max-w-[200px] sm:max-w-none">
                Tôi có thế mạnh gì? • HĐTN - Hướng nghiệp THPT
              </p>
            </div>
          </div>

          {/* Progress & Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Progress indicator */}
            <div className="hidden md:flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-right">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  Tiến độ: <span className="text-indigo-600 dark:text-indigo-400">{completedCount}/{totalStations}</span> trạm
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  {percent === 100 ? 'Đã hoàn tất toàn bộ!' : 'Tùy chọn thứ tự khám phá'}
                </div>
              </div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
              {percent === 100 && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              )}
            </div>

            {/* View Profile Button */}
            <button
              onClick={onOpenProfile}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 shadow-sm shadow-indigo-500/25 active:scale-95 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Hồ sơ bản thân</span>
              {completedCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-white/20 text-white text-[11px] font-bold flex items-center justify-center">
                  {completedCount}
                </span>
              )}
            </button>

            {/* Guide Button */}
            <button
              onClick={onOpenGuide}
              title="Hướng dẫn môn học & kiểm thử"
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden lg:inline">Hướng dẫn</span>
            </button>

            {/* Reset Button */}
            <button
              onClick={onResetAll}
              title="Làm lại từ đầu"
              className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>

      {/* Mobile mini progress bar */}
      <div className="md:hidden w-full bg-slate-100 dark:bg-slate-800 h-1">
        <div 
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </header>
  );
};
