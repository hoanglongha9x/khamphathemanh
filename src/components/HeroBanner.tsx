import React from 'react';
import { Sparkles, ArrowRight, FileText, Shield, CheckCircle, Lightbulb, Compass, Award } from 'lucide-react';

interface HeroBannerProps {
  completedCount: number;
  totalStations: number;
  onStartExploring: () => void;
  onOpenProfile: () => void;
  onOpenGuide: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  completedCount,
  totalStations,
  onStartExploring,
  onOpenProfile,
  onOpenGuide
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 py-10 sm:py-16 border-b border-slate-200/60 dark:border-slate-800">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-indigo-400/15 via-sky-400/20 to-emerald-400/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-xs border border-indigo-100 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Môn Hoạt động trải nghiệm, hướng nghiệp Lớp 10</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              KHÁM PHÁ TÔI – <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400">
                TÔI CÓ THẾ MẠNH GÌ?
              </span>
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
              “Thử một điều mới – hiểu thêm về chính mình”
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Không chỉ là bài trắc nghiệm tính cách thông thường. Hãy thử sức qua 8 trạm nhiệm vụ thực tế học đường (3–7 phút/trạm) để nhận diện phương thức giải quyết vấn đề, khám phá sở thích và lập hồ sơ năng lực của riêng bạn.
            </p>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={onStartExploring}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 active:scale-95 transition-all cursor-pointer"
            >
              <span>{completedCount === 0 ? 'Bắt đầu khám phá ngay' : 'Tiếp tục khám phá các trạm'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenProfile}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base border border-slate-200 dark:border-slate-700 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-500/50 active:scale-95 transition-all cursor-pointer"
            >
              <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Xem hồ sơ khám phá bản thân</span>
              {completedCount > 0 && (
                <span className="ml-1 px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-extrabold">
                  {completedCount}/{totalStations}
                </span>
              )}
            </button>
          </div>

          {/* Transparency & Privacy Notice */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Không cần tạo tài khoản • Không hỏi SĐT/họ tên thật</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Dữ liệu lưu an toàn trên trình duyệt của máy bạn</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Không dán nhãn cố định • Tự do chọn thứ tự trạm</span>
            </div>
          </div>

        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800/80 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 font-bold">
              8
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">8 Trạm Thực Tế</div>
              <div className="text-[11px] text-slate-500">Mô phỏng nhiệm vụ THPT</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 font-bold">
              3-7'
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">3–7 Phút / Trạm</div>
              <div className="text-[11px] text-slate-500">Gọn gàng, vừa tiết học</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Phản Tư Sâu Sắc</div>
              <div className="text-[11px] text-slate-500">Hiểu cách mình tư duy</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Xuất Hồ Sơ Báo Cáo</div>
              <div className="text-[11px] text-slate-500">Sẵn sàng in ấn nộp bài</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
