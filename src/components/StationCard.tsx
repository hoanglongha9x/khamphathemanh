import React from 'react';
import { 
  Calculator, 
  Cpu, 
  FlaskConical, 
  Palette, 
  MessageSquareText, 
  Users, 
  CalendarCheck2, 
  HeartHandshake, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Station, StationResult } from '../types';

interface StationCardProps {
  station: Station;
  result?: StationResult;
  onSelect: (station: Station) => void;
  onRedo: (station: Station) => void;
}

export const StationCard: React.FC<StationCardProps> = ({
  station,
  result,
  onSelect,
  onRedo
}) => {
  const isCompleted = !!result;

  // Icon mapping
  const renderIcon = () => {
    const props = { className: 'w-6 h-6' };
    switch (station.iconName) {
      case 'Calculator': return <Calculator {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'FlaskConical': return <FlaskConical {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'MessageSquareText': return <MessageSquareText {...props} />;
      case 'Users': return <Users {...props} />;
      case 'CalendarCheck2': return <CalendarCheck2 {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div 
      className={`relative rounded-3xl p-5 sm:p-6 transition-all duration-300 border flex flex-col justify-between ${
        isCompleted
          ? 'bg-gradient-to-b from-white to-emerald-50/30 dark:from-slate-800 dark:to-emerald-950/20 border-emerald-200 dark:border-emerald-800/60 shadow-sm'
          : 'bg-white dark:bg-slate-800/90 border-slate-200/90 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-600/70 hover:shadow-md'
      }`}
    >
      <div>
        
        {/* Header: Station number, icon, status badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-xs ${
              isCompleted
                ? 'bg-emerald-500 text-white'
                : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900'
            }`}>
              {renderIcon()}
            </div>
            <div>
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                TRẠM 0{station.order}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {station.shortTag}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 px-2.5 py-1 rounded-full border border-slate-100 dark:border-slate-800">
            <Clock className="w-3.5 h-3.5" />
            <span>{station.durationMinutes}</span>
          </div>
        </div>

        {/* Station Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
          {station.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">
          {station.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4 leading-relaxed">
          {station.description}
        </p>

        {/* Context badge */}
        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 mb-4">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Bối cảnh: </span>
          {station.realWorldContext}
        </div>

        {/* Completed status summary */}
        {isCompleted && result && (
          <div className="mb-4 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs">
            <div className="flex items-center justify-between font-semibold text-emerald-800 dark:text-emerald-300 mb-1.5">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Đã hoàn thành & phản tư
              </span>
              <span className="bg-emerald-200/70 dark:bg-emerald-900/60 px-2 py-0.5 rounded-md text-[11px] font-bold">
                {result.totalScore} điểm nhiệm vụ
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-[11px] text-emerald-700 dark:text-emerald-400">
              <span className="flex items-center gap-1">
                Hứng thú: 
                <span className="font-bold flex items-center">
                  {result.reflection.interestScore}
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline ml-0.5" />
                </span>
              </span>
              <span>
                Độ khó: <span className="font-bold">{result.reflection.difficultyScore}/5</span>
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex items-center gap-2">
        {isCompleted ? (
          <>
            <button
              onClick={() => onSelect(station)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span>Xem lại kết quả</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onRedo(station)}
              title="Làm lại nhiệm vụ này"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            onClick={() => onSelect(station)}
            className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm shadow-indigo-500/20"
          >
            <span>Vào trạm trải nghiệm</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};
