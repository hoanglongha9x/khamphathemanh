import React, { useState } from 'react';
import { 
  Printer, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Heart, 
  Target, 
  Compass, 
  Lightbulb, 
  Share2, 
  AlertCircle, 
  ArrowLeft,
  Star,
  Award,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Edit3
} from 'lucide-react';
import { Station, StationId, StationResult, UserProfileState } from '../types';
import { GENERAL_COMPETENCY_SUGGESTIONS, NEXT_STEP_ACTIVITY_RECOMMENDATIONS } from '../data/stationsData';

interface ProfileViewProps {
  userProfile: UserProfileState;
  stations: Station[];
  onClose: () => void;
  onUpdateProfile: (updated: UserProfileState) => void;
  onSelectStation: (station: Station) => void;
  onResetAll: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userProfile,
  stations,
  onClose,
  onUpdateProfile,
  onSelectStation,
  onResetAll
}) => {
  const completedEntries = Object.entries(userProfile.completedStations) as [StationId, StationResult][];
  const completedCount = completedEntries.length;

  // Local editable fields
  const [nickname, setNickname] = useState(userProfile.nickname || 'Học sinh Lớp 10');
  const [gradeClass, setGradeClass] = useState(userProfile.gradeClass || '10');
  const [selfNotes, setSelfNotes] = useState(userProfile.selfNotes || '');
  const [selectedCompetencies, setSelectedCompetencies] = useState<string[]>(
    userProfile.desiredCompetenciesToDevelop || [
      'Tư duy logic & giải quyết vấn đề có cấu trúc',
      'Kỹ năng diễn đạt ngôn từ, thuyết trình & truyền cảm hứng'
    ]
  );
  const [weeklyGoalInput, setWeeklyGoalInput] = useState('');
  const [weeklyGoals, setWeeklyGoals] = useState<string[]>(
    userProfile.weeklyGoals.length > 0 
      ? userProfile.weeklyGoals 
      : [
          'Chủ động lắng nghe và đưa ra 1 giải pháp Win-Win trong buổi làm việc nhóm tuần này.',
          'Dành 30 phút rà soát các môn học theo phương pháp lập kế hoạch ưu tiên.'
        ]
  );
  const [isCopied, setIsCopied] = useState(false);

  // Sync edits to parent storage
  const handleSaveEdits = () => {
    onUpdateProfile({
      ...userProfile,
      nickname,
      gradeClass,
      selfNotes,
      desiredCompetenciesToDevelop: selectedCompetencies,
      weeklyGoals
    });
  };

  const toggleCompetency = (comp: string) => {
    let next: string[];
    if (selectedCompetencies.includes(comp)) {
      next = selectedCompetencies.filter(c => c !== comp);
    } else {
      next = [...selectedCompetencies, comp];
    }
    setSelectedCompetencies(next);
    onUpdateProfile({
      ...userProfile,
      desiredCompetenciesToDevelop: next
    });
  };

  const addWeeklyGoal = () => {
    if (!weeklyGoalInput.trim()) return;
    const next = [...weeklyGoals, weeklyGoalInput.trim()];
    setWeeklyGoals(next);
    setWeeklyGoalInput('');
    onUpdateProfile({
      ...userProfile,
      weeklyGoals: next
    });
  };

  const removeWeeklyGoal = (index: number) => {
    const next = weeklyGoals.filter((_, i) => i !== index);
    setWeeklyGoals(next);
    onUpdateProfile({
      ...userProfile,
      weeklyGoals: next
    });
  };

  // Find favorite stations based on interest score >= 4
  const favoriteStations = completedEntries
    .filter(([_, res]) => res.reflection.interestScore >= 4)
    .map(([id]) => stations.find(s => s.id === id))
    .filter(Boolean) as Station[];

  // Print helper
  const handlePrint = () => {
    window.print();
  };

  // Share / Copy summary
  const handleCopySummary = () => {
    const summaryText = `BÁO CÁO MÔN HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP LỚP 10
Chủ đề: "KHÁM PHÁ TÔI – TÔI CÓ THẾ MẠNH GÌ?"
Học sinh: ${nickname} (Lớp: ${gradeClass})
Số trạm đã trải nghiệm: ${completedCount}/${stations.length}
Các lĩnh vực yêu thích nhất: ${favoriteStations.map(s => s.title).join(', ') || 'Đang khám phá'}
Năng lực mong muốn rèn luyện: ${selectedCompetencies.join('; ')}
(Hồ sơ cá nhân được lưu trên thiết bị của học sinh)`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-20">
      
      {/* Top action header (Hidden when printing) */}
      <div className="print:hidden sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-1.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Trang chủ</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>{isCopied ? 'Đã sao chép tóm tắt!' : 'Sao chép tóm tắt'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-sm shadow-indigo-500/25 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>In / Lưu file PDF</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8">
        
        {/* Transparent Storage Banner */}
        <div className="print:hidden p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 text-xs text-sky-800 dark:text-sky-300 flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
          <div className="flex-1">
            <strong>Thông báo minh bạch về dữ liệu: </strong>
            Toàn bộ kết quả và phản tư được lưu trực tiếp trong bộ nhớ trình duyệt (LocalStorage) trên máy tính/điện thoại hiện tại của bạn. Không cần tài khoản, không gửi thông tin lên máy chủ và không thu thập dữ liệu nhạy cảm.
          </div>
        </div>

        {/* Profile Card Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <Compass className="w-3.5 h-3.5" />
                <span>Hồ sơ Hoạt động trải nghiệm, hướng nghiệp Lớp 10</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                HỒ SƠ KHÁM PHÁ BẢN THÂN
              </h1>

              {/* Editable Name & Class */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm">
                  <span className="text-slate-500 text-xs font-semibold">Tên/Bí danh:</span>
                  <input
                    type="text"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    onBlur={handleSaveEdits}
                    className="font-bold text-slate-800 dark:text-white bg-transparent border-none focus:outline-hidden text-sm w-36 sm:w-48"
                    placeholder="Nhập tên/biệt danh"
                  />
                  <Edit3 className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm">
                  <span className="text-slate-500 text-xs font-semibold">Lớp:</span>
                  <input
                    type="text"
                    value={gradeClass}
                    onChange={e => setGradeClass(e.target.value)}
                    onBlur={handleSaveEdits}
                    className="font-bold text-slate-800 dark:text-white bg-transparent border-none focus:outline-hidden text-sm w-16"
                    placeholder="10A1"
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-slate-800 dark:to-indigo-950/50 p-4 sm:p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/60 text-center shrink-0">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400">
                {completedCount}<span className="text-xl font-bold text-slate-400">/{stations.length}</span>
              </div>
              <div className="text-xs font-bold text-slate-600 dark:text-slate-300 mt-1">
                Trạm đã hoàn thành
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {completedCount === 8 ? 'Đầy đủ 8 lĩnh vực!' : 'Có thể tiếp tục khám phá'}
              </div>
            </div>

          </div>

          {/* Educational Disclaimer Banner */}
          <div className="mt-6 p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 text-xs text-amber-900 dark:text-amber-200/90 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Nguyên tắc sư phạm: </strong>
              Hồ sơ này ghi nhận những phản hồi và lựa chọn bước đầu của em trong các nhiệm vụ mẫu. 
              <span className="font-semibold underline ml-1">Không tự gắn nhãn</span> học sinh là giỏi hay kém, và không suy luận tuyệt đối về ngành nghề cố định. Điểm số chỉ là minh chứng cho một trải nghiệm cụ thể tại thời điểm làm bài.
            </div>
          </div>

        </div>

        {/* 1. VISUAL MULTI-FACETED CHART (Requirement 5) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                Biểu đồ 3 chiều: Kết quả nhiệm vụ • Mức độ hứng thú • Độ khó cảm nhận
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tách biệt rõ ràng 3 nguồn thông tin khác nhau để có cái nhìn khách quan về bản thân
              </p>
            </div>
            
            {/* Legend */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-indigo-600">
                <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block" />
                Điểm nhiệm vụ (0-15)
              </span>
              <span className="flex items-center gap-1.5 text-amber-500">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                Hứng thú (1-5 ⭐)
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <span className="w-3 h-3 rounded-full bg-slate-400 inline-block" />
                Độ khó (1-5)
              </span>
            </div>
          </div>

          {/* Chart Bars Table */}
          <div className="space-y-4">
            {stations.map(st => {
              const res = userProfile.completedStations[st.id];
              const scorePercent = res ? Math.round((res.totalScore / 15) * 100) : 0;
              const interestPercent = res ? Math.round((res.reflection.interestScore / 5) * 100) : 0;
              const difficultyPercent = res ? Math.round((res.reflection.difficultyScore / 5) * 100) : 0;

              return (
                <div 
                  key={st.id}
                  className={`p-3 sm:p-4 rounded-2xl border transition-colors ${
                    res
                      ? 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700'
                      : 'bg-slate-50/20 dark:bg-slate-900/40 border-dashed border-slate-200 dark:border-slate-800 opacity-60'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        Trạm 0{st.order}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                        {st.title}
                      </span>
                    </div>

                    {res ? (
                      <div className="flex items-center gap-3 text-xs font-semibold">
                        <span className="text-indigo-600">{res.totalScore}/15 đ</span>
                        <span className="text-amber-500 flex items-center">
                          {res.reflection.interestScore} <Star className="w-3 h-3 fill-amber-400 inline ml-0.5" />
                        </span>
                        <span className="text-slate-500">Khó: {res.reflection.difficultyScore}/5</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => onSelectStation(st)}
                        className="text-xs text-indigo-600 hover:underline font-semibold text-left cursor-pointer"
                      >
                        Chưa trải nghiệm ➔ Nhấn để vào trạm
                      </button>
                    )}
                  </div>

                  {/* Visual 3-bar progress comparison */}
                  {res ? (
                    <div className="space-y-1.5 pt-1">
                      {/* Bar 1: Score */}
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span className="w-16 shrink-0">Nhiệm vụ:</span>
                        <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(100, Math.max(10, scorePercent))}%` }}
                          />
                        </div>
                        <span className="w-8 text-right font-bold text-indigo-600">{scorePercent}%</span>
                      </div>

                      {/* Bar 2: Interest */}
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span className="w-16 shrink-0">Hứng thú:</span>
                        <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-amber-400 h-full rounded-full transition-all duration-500"
                            style={{ width: `${interestPercent}%` }}
                          />
                        </div>
                        <span className="w-8 text-right font-bold text-amber-500">{interestPercent}%</span>
                      </div>

                      {/* Bar 3: Perceived Difficulty */}
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span className="w-16 shrink-0">Độ khó:</span>
                        <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-slate-400 h-full rounded-full transition-all duration-500"
                            style={{ width: `${difficultyPercent}%` }}
                          />
                        </div>
                        <span className="w-8 text-right font-bold text-slate-500">{difficultyPercent}%</span>
                      </div>
                    </div>
                  ) : null}

                </div>
              );
            })}
          </div>
        </div>

        {/* 2. COMPLETED TASKS & CONCRETE EVIDENCE (Requirement 5) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              Nhiệm vụ đã hoàn thành & Minh chứng năng lực cụ thể
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Minh chứng gắn với cách em giải quyết các tình huống thực tiễn học đường
            </p>
          </div>

          {completedCount === 0 ? (
            <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/40 rounded-2xl text-slate-500 text-sm">
              Em chưa hoàn thành trạm nào. Hãy quay lại trang chủ và trải nghiệm một trạm bất kỳ nhé!
            </div>
          ) : (
            <div className="grid gap-4">
              {completedEntries.map(([stId, res]) => {
                const st = stations.find(s => s.id === stId);
                if (!st) return null;

                return (
                  <div 
                    key={stId}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">
                          {st.title}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                          Hoàn tất ({res.totalScore} điểm)
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>Hứng thú: <strong>{res.reflection.interestScore}/5 ⭐</strong></span>
                        <span>Độ khó: <strong>{res.reflection.difficultyScore}/5</strong></span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-300">
                      <strong>Bối cảnh nhiệm vụ: </strong>{st.tagline}
                    </div>

                    {/* Demonstrated Competency list */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                        Minh chứng cách giải quyết vấn đề đã thể hiện:
                      </div>
                      <ul className="grid gap-1 pl-5 list-disc text-xs text-slate-600 dark:text-slate-400">
                        {res.demonstratedCompetencies.map((comp, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Student self-reflection quote */}
                    {res.reflection.whatDidWell && (
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 italic border border-slate-200/80 dark:border-slate-700">
                        “Tự nhận định: {res.reflection.whatDidWell}”
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 3. FAVORITE DOMAINS & DESIRED COMPETENCIES (Requirement 5) */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Favorite domains */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                Lĩnh vực em tự đánh giá là yêu thích
              </h2>
              <p className="text-xs text-slate-500">
                Dựa trên các trạm em cho điểm hứng thú từ 4 đến 5 sao
              </p>
            </div>

            {favoriteStations.length === 0 ? (
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-500 text-center">
                Chưa có trạm nào đạt mức hứng thú cao (4-5 sao). Hãy tiếp tục thử các trạm khác để tìm ra miền sở thích!
              </div>
            ) : (
              <div className="space-y-2.5">
                {favoriteStations.map(st => (
                  <div 
                    key={st.id}
                    className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {st.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {st.shortTag}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-600 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded-md">
                      {userProfile.completedStations[st.id]?.reflection.interestScore} ⭐
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desired Competencies to Develop */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Những năng lực em muốn phát triển
              </h2>
              <p className="text-xs text-slate-500">
                Nhấp chọn các năng lực em ưu tiên rèn luyện trong năm học lớp 10 này
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {GENERAL_COMPETENCY_SUGGESTIONS.map(comp => {
                const isSelected = selectedCompetencies.includes(comp);
                return (
                  <button
                    key={comp}
                    type="button"
                    onClick={() => toggleCompetency(comp)}
                    className={`text-xs p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white font-semibold border-indigo-600 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {comp}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4. WHAT I UNDERSTOOD & WEEKLY GOALS (Requirement 5) */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Điều em hiểu thêm về bản thân */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-sky-600" />
              Điều em hiểu thêm về bản thân
            </h2>
            <p className="text-xs text-slate-500">
              Ghi lại những nhận thức mới về sở thích, cách suy nghĩ hoặc điểm mạnh mà trước đây em chưa để ý
            </p>

            <textarea
              value={selfNotes}
              onChange={e => setSelfNotes(e.target.value)}
              onBlur={handleSaveEdits}
              placeholder="Ví dụ: Em nhận ra mình rất thích phân tích dữ liệu và sắp xếp thứ tự công việc, nhưng đôi khi còn ngần ngại khi phải thuyết phục người khác..."
              rows={4}
              className="w-full text-xs sm:text-sm p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 leading-relaxed"
            />
          </div>

          {/* Mục tiêu rèn luyện trong tuần tới */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-600" />
              Mục tiêu rèn luyện trong tuần tới
            </h2>
            <p className="text-xs text-slate-500">
              Đặt 1–3 mục tiêu hành động cụ thể tại trường lớp THPT
            </p>

            {/* List of goals */}
            <div className="space-y-2">
              {weeklyGoals.map((goal, idx) => (
                <div 
                  key={idx}
                  className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                >
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-emerald-600 mt-0.5">•</span>
                    <span className="text-slate-800 dark:text-slate-200">{goal}</span>
                  </div>
                  <button
                    onClick={() => removeWeeklyGoal(idx)}
                    className="text-slate-400 hover:text-rose-500 shrink-0 text-xs px-1 cursor-pointer print:hidden"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Add goal input */}
            <div className="flex gap-2 pt-1 print:hidden">
              <input
                type="text"
                value={weeklyGoalInput}
                onChange={e => setWeeklyGoalInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addWeeklyGoal()}
                placeholder="Thêm mục tiêu tuần tới..."
                className="flex-1 text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={addWeeklyGoal}
                className="py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer"
              >
                Thêm
              </button>
            </div>
          </div>

        </div>

        {/* 5. RECOMMENDED 3 NEXT ACTIVITIES (Requirement 5) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Gợi ý 3 hoạt động tiếp theo để thử sức tại trường THPT
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Các cơ hội trải nghiệm thực tế ngay trong môi trường học đường để chuyển hóa nhận thức thành năng lực
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {NEXT_STEP_ACTIVITY_RECOMMENDATIONS.map((act, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-850 border border-slate-200 dark:border-slate-700 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {act.category}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-2">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
                  <span>Khuyến nghị thử sức</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions (Hidden when printing) */}
        <div className="print:hidden flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tiếp tục trải nghiệm các trạm</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onResetAll}
              className="py-3 px-4 rounded-2xl border border-rose-200 hover:bg-rose-50 text-rose-600 dark:border-rose-900/60 dark:hover:bg-rose-950/40 text-xs sm:text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Xóa và làm lại từ đầu</span>
            </button>

            <button
              onClick={handlePrint}
              className="py-3 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>In trang báo cáo A4</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
