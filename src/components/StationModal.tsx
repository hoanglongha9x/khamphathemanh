import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft, 
  Star, 
  Sparkles, 
  RotateCcw, 
  Compass, 
  Lightbulb, 
  BookOpen, 
  Award,
  ChevronRight,
  ThumbsUp,
  BrainCircuit
} from 'lucide-react';
import { Station, StationStepOption, StationResult, StationReflection } from '../types';

interface StationModalProps {
  station: Station;
  existingResult?: StationResult;
  onClose: () => void;
  onSaveResult: (result: StationResult) => void;
  onNextStation?: () => void;
  onOpenProfile: () => void;
}

export const StationModal: React.FC<StationModalProps> = ({
  station,
  existingResult,
  onClose,
  onSaveResult,
  onNextStation,
  onOpenProfile
}) => {
  // Modes: 'steps' -> 'bonus' (optional) -> 'reflection' -> 'completed-summary'
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [isReflecting, setIsReflecting] = useState(false);
  const [isFinished, setIsFinished] = useState(!!existingResult);

  // User selections in this session
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    () => {
      if (existingResult) {
        const answers: Record<string, string> = {};
        Object.entries(existingResult.stepAnswers).forEach(([k, v]) => {
          if (typeof v === 'string') answers[k] = v;
        });
        return answers;
      }
      return {};
    }
  );

  const [bonusAnswer, setBonusAnswer] = useState<string | undefined>(
    existingResult?.bonusCompleted ? 'completed' : undefined
  );

  // Reflection Form State
  const [interestScore, setInterestScore] = useState<number>(
    existingResult?.reflection?.interestScore || 4
  );
  const [difficultyScore, setDifficultyScore] = useState<number>(
    existingResult?.reflection?.difficultyScore || 3
  );
  const [whatDidWell, setWhatDidWell] = useState<string>(
    existingResult?.reflection?.whatDidWell || ''
  );
  const [nextIntent, setNextIntent] = useState<'retry' | 'practice_more' | 'explore_other'>(
    existingResult?.reflection?.nextIntent || 'explore_other'
  );

  const currentStep = station.steps[currentStepIndex];
  const totalSteps = station.steps.length;

  const currentStepSelectedOptionId = selectedAnswers[currentStep?.id];
  const currentStepSelectedOption = currentStep?.options.find(
    opt => opt.id === currentStepSelectedOptionId
  );

  // Bonus option selected
  const bonusSelectedOption = station.bonusChallenge.options.find(
    opt => opt.id === bonusAnswer
  );

  const handleSelectOption = (option: StationStepOption) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentStep.id]: option.id
    }));
  };

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Finished all main steps, offer bonus or proceed to reflection
      setShowBonus(true);
    }
  };

  const handlePrevStep = () => {
    if (showBonus) {
      setShowBonus(false);
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleSkipBonus = () => {
    setShowBonus(false);
    setIsReflecting(true);
  };

  const handleCompleteBonus = (optId: string) => {
    setBonusAnswer(optId);
  };

  const handleProceedToReflection = () => {
    setIsReflecting(true);
  };

  // Submit Reflection and finalize
  const handleSubmitReflection = () => {
    // Calculate scores and demonstrated competencies
    let totalScore = 0;
    const stepScores: Record<string, number> = {};
    const demonstratedCompetencies: string[] = [];

    station.steps.forEach(st => {
      const optId = selectedAnswers[st.id];
      const opt = st.options.find(o => o.id === optId);
      if (opt) {
        stepScores[st.id] = opt.scoreWeight;
        totalScore += opt.scoreWeight;
        if (opt.competencyInsight) {
          demonstratedCompetencies.push(opt.competencyInsight);
        }
      }
    });

    let bonusScore = 0;
    if (bonusAnswer) {
      const bOpt = station.bonusChallenge.options.find(o => o.id === bonusAnswer);
      if (bOpt) {
        bonusScore = bOpt.scoreWeight;
        totalScore += bonusScore;
        if (bOpt.competencyInsight) {
          demonstratedCompetencies.push(bOpt.competencyInsight);
        }
      }
    }

    const reflection: StationReflection = {
      interestScore,
      difficultyScore,
      whatDidWell: whatDidWell.trim(),
      nextIntent,
      completedAt: new Date().toISOString()
    };

    const finalResult: StationResult = {
      stationId: station.id,
      stepAnswers: selectedAnswers,
      stepScores,
      totalScore,
      bonusCompleted: !!bonusAnswer,
      bonusScore,
      reflection,
      demonstratedCompetencies
    };

    onSaveResult(finalResult);
    setIsFinished(true);
    setIsReflecting(false);
    setShowBonus(false);

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback safe
    }
  };

  const handleResetThisStation = () => {
    setSelectedAnswers({});
    setBonusAnswer(undefined);
    setCurrentStepIndex(0);
    setShowBonus(false);
    setIsReflecting(false);
    setIsFinished(false);
  };

  const QUICK_STRENGTH_TAGS = [
    'Tư duy phân tích có cấu trúc',
    'Bình tĩnh nhìn nhận đa chiều',
    'Tìm ra giải pháp Win-Win hài hòa',
    'Chọn phương án tối ưu tài nguyên',
    'Lắng nghe và thấu cảm cảm xúc',
    'Dự phòng rủi ro chu đáo'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
              0{station.order}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {station.shortTag}
                </span>
                <span className="text-xs text-slate-400">• {station.durationMinutes}</span>
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                {station.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress bar */}
        {!isFinished && !isReflecting && (
          <div className="px-6 py-2.5 bg-slate-50/80 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              {station.steps.map((st, idx) => (
                <div 
                  key={st.id}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${
                    idx === currentStepIndex && !showBonus
                      ? 'bg-indigo-600 text-white font-bold'
                      : selectedAnswers[st.id]
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-slate-200/70 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                  }`}
                >
                  <span>Bước {idx + 1}</span>
                  {selectedAnswers[st.id] && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
              ))}

              <div 
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg ${
                  showBonus
                    ? 'bg-amber-500 text-white font-bold'
                    : bonusAnswer
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                    : 'bg-slate-200/70 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Thử thách thêm</span>
              </div>
            </div>

            <span className="hidden sm:inline-block">
              {showBonus ? 'Thử thách nâng cao' : `Bước ${currentStepIndex + 1} trên ${totalSteps}`}
            </span>
          </div>
        )}

        {/* Main Content Area (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* 1. COMPLETED SUMMARY VIEW */}
          {isFinished && existingResult && !isReflecting && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-emerald-900 dark:text-emerald-200">
                  Em đã hoàn thành trạm này!
                </h3>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 max-w-xl mx-auto">
                  Nhiệm vụ đã được ghi nhận vào hồ sơ cá nhân với tổng điểm nhiệm vụ: <strong>{existingResult.totalScore} điểm</strong>.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-2 text-xs">
                  <div className="bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-xl shadow-xs border border-emerald-100 dark:border-emerald-800">
                    <span className="text-slate-500">Mức độ hứng thú:</span>{' '}
                    <strong className="text-amber-600 font-bold">{existingResult.reflection.interestScore}/5 ⭐</strong>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-xl shadow-xs border border-emerald-100 dark:border-emerald-800">
                    <span className="text-slate-500">Mức độ thử thách:</span>{' '}
                    <strong className="text-indigo-600 font-bold">{existingResult.reflection.difficultyScore}/5</strong>
                  </div>
                </div>

                {existingResult.reflection.whatDidWell && (
                  <div className="mt-3 text-xs bg-white/70 dark:bg-slate-800/70 p-3 rounded-2xl max-w-lg mx-auto text-slate-700 dark:text-slate-300 italic border border-emerald-100">
                    “{existingResult.reflection.whatDidWell}”
                  </div>
                )}
              </div>

              {/* Competencies Revealed */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-indigo-500" />
                  Biểu hiện năng lực đã quan sát được qua nhiệm vụ
                </h4>
                <div className="grid gap-2.5">
                  {existingResult.demonstratedCompetencies.map((comp, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                    >
                      <Sparkles className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={onOpenProfile}
                  className="flex-1 py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Xem hồ sơ bản thân toàn diện</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onNextStation && (
                  <button
                    onClick={onNextStation}
                    className="py-3 px-5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Sang trạm tiếp theo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={handleResetThisStation}
                  className="py-3 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Trải nghiệm lại trạm</span>
                </button>
              </div>
            </div>
          )}

          {/* 2. MAIN INTERACTIVE STEPS */}
          {!isFinished && !showBonus && !isReflecting && currentStep && (
            <div className="space-y-5 animate-in fade-in duration-150">
              
              {/* Step Title & Instruction */}
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                  Bước {currentStep.stepNumber}: {currentStep.title}
                </div>
                
                {/* Scenario card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <div className="font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    Tình huống thực tế:
                  </div>
                  {currentStep.scenario}
                </div>

                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white pt-1">
                  👉 {currentStep.instruction}
                </p>
              </div>

              {/* Options List */}
              <div className="space-y-3">
                {currentStep.options.map(opt => {
                  const isSelected = currentStepSelectedOptionId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all text-sm leading-relaxed cursor-pointer ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 dark:border-indigo-500 ring-2 ring-indigo-500/20 shadow-sm'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-850 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-600 text-white'
                            : 'border-slate-300 text-slate-500'
                        }`}>
                          {isSelected ? '✓' : ''}
                        </div>
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {opt.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Cognitive Reasoning Feedback (Revealed once chosen) */}
              {currentStepSelectedOption && (
                <div className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-2.5 animate-in slide-in-from-bottom-2 duration-200 ${
                  currentStepSelectedOption.isOptimal
                    ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/80 text-emerald-900 dark:text-emerald-200'
                    : 'bg-amber-50/90 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/80 text-amber-900 dark:text-amber-200'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wide">
                    {currentStepSelectedOption.isOptimal ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Phân tích logic: Lựa chọn tối ưu</span>
                      </>
                    ) : (
                      <>
                        <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span>Phân tích logic: Góc nhìn bổ trợ</span>
                      </>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed">
                    <strong>Giải thích cách suy luận: </strong>
                    {currentStepSelectedOption.reasoning}
                  </p>

                  <div className="pt-1.5 border-t border-black/5 dark:border-white/5 text-xs opacity-90 flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span><strong>Biểu hiện năng lực:</strong> {currentStepSelectedOption.competencyInsight}</span>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* 3. BONUS CHALLENGE VIEW */}
          {!isFinished && showBonus && !isReflecting && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{station.bonusChallenge.title}</span>
                </div>
                <p className="text-xs text-amber-700 dark:text-amber-300/80">
                  Đây là phần thử thách mở rộng giúp bạn đào sâu góc nhìn. Bạn có thể thử sức hoặc bấm bỏ qua để chuyển sang bước phản tư.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 text-sm text-slate-700 dark:text-slate-300">
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Tình huống:</p>
                  {station.bonusChallenge.scenario}
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  ❓ {station.bonusChallenge.question}
                </p>

                <div className="space-y-2.5">
                  {station.bonusChallenge.options.map(opt => {
                    const isSelected = bonusAnswer === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleCompleteBonus(opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all text-sm leading-relaxed cursor-pointer ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/60 dark:bg-amber-950/40 dark:border-amber-500 ring-2 ring-amber-500/20'
                            : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 bg-white dark:bg-slate-850'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                            isSelected ? 'border-amber-600 bg-amber-600 text-white' : 'border-slate-300 text-slate-400'
                          }`}>
                            {isSelected ? '✓' : ''}
                          </div>
                          <span className="font-medium text-slate-800 dark:text-slate-200">{opt.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {bonusSelectedOption && (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-emerald-600" />
                      Phân tích thử thách nâng cao:
                    </div>
                    <p>{bonusSelectedOption.reasoning}</p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* 4. REFLECTION PHASE (CƠ CHẾ PHẢN TƯ SAU MỖI TRẠM) */}
          {isReflecting && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Phản tư sau trạm: {station.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                  Dành 1 phút nhìn nhận lại cảm xúc và cách em vừa tiếp cận nhiệm vụ. Đây là bước quan trọng nhất để hiểu về chính mình!
                </p>
              </div>

              {/* Question 1: Mức độ thú vị (1 - 5) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <label className="block text-sm font-bold text-slate-900 dark:text-white">
                  1. Em cảm thấy nhiệm vụ này thú vị đến mức nào?
                </label>
                <div className="flex items-center justify-between max-w-md mx-auto gap-2">
                  {[1, 2, 3, 4, 5].map(score => (
                    <button
                      key={score}
                      onClick={() => setInterestScore(score)}
                      className={`flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        interestScore === score
                          ? 'bg-amber-400 text-slate-900 font-bold shadow-md scale-105'
                          : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-50'
                      }`}
                    >
                      <Star className={`w-5 h-5 ${interestScore >= score ? 'fill-amber-400 text-amber-500' : 'text-slate-300'}`} />
                      <span className="text-xs">{score}</span>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 px-2">
                  <span>Khá tẻ nhạt (1)</span>
                  <span>Rất hào hứng (5)</span>
                </div>
              </div>

              {/* Question 2: Mức độ khó (1 - 5) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <label className="block text-sm font-bold text-slate-900 dark:text-white">
                  2. Em cảm thấy nhiệm vụ này khó đến mức nào?
                </label>
                <div className="flex items-center justify-between max-w-md mx-auto gap-2">
                  {[1, 2, 3, 4, 5].map(score => (
                    <button
                      key={score}
                      onClick={() => setDifficultyScore(score)}
                      className={`flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        difficultyScore === score
                          ? 'bg-indigo-600 text-white font-bold shadow-md scale-105'
                          : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-50'
                      }`}
                    >
                      <span className="text-sm font-extrabold">{score}</span>
                      <span className="text-[10px]">
                        {score === 1 ? 'Rất dễ' : score === 3 ? 'Vừa sức' : score === 5 ? 'Rất khó' : `Mức ${score}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Em nghĩ mình đã làm tốt điều gì? */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-bold text-slate-900 dark:text-white">
                    3. Em nghĩ mình đã làm tốt điều gì trong nhiệm vụ này?
                  </label>
                  <span className="text-[11px] text-slate-400">(Có thể bỏ qua nếu chưa nghĩ ra)</span>
                </div>

                {/* Quick chip suggestions */}
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_STRENGTH_TAGS.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        if (whatDidWell.includes(tag)) {
                          setWhatDidWell(whatDidWell.replace(tag, '').replace(/,\s*,/g, ',').trim());
                        } else {
                          setWhatDidWell(whatDidWell ? `${whatDidWell}, ${tag}` : tag);
                        }
                      }}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                        whatDidWell.includes(tag)
                          ? 'bg-indigo-100 text-indigo-700 border-indigo-300 dark:bg-indigo-950 dark:text-indigo-300'
                          : 'bg-white dark:bg-slate-700 border-slate-200 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      + {tag}
                    </button>
                  ))}
                </div>

                <textarea
                  value={whatDidWell}
                  onChange={e => setWhatDidWell(e.target.value)}
                  placeholder="Ví dụ: Em nhận diện nhanh ràng buộc thời gian, hoặc em cảm thấy mình dễ đồng cảm với hoàn cảnh của bạn..."
                  rows={2}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Question 4: Mong muốn tiếp theo */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <label className="block text-sm font-bold text-slate-900 dark:text-white">
                  4. Sau nhiệm vụ này, em muốn:
                </label>
                <div className="grid sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setNextIntent('explore_other')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
                      nextIntent === 'explore_other'
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white dark:bg-slate-700 border-slate-200 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    🚀 Khám phá lĩnh vực khác ngay
                  </button>
                  <button
                    onClick={() => setNextIntent('practice_more')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
                      nextIntent === 'practice_more'
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white dark:bg-slate-700 border-slate-200 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    💪 Luyện tập thêm kỹ năng này
                  </button>
                  <button
                    onClick={() => setNextIntent('retry')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
                      nextIntent === 'retry'
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white dark:bg-slate-700 border-slate-200 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    🔄 Thử lại trạm với góc nhìn mới
                  </button>
                </div>
              </div>

              {/* Submit reflection button */}
              <div className="pt-2">
                <button
                  onClick={handleSubmitReflection}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/20 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Hoàn tất & Ghi nhận vào Hồ sơ cá nhân</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Bottom Navigation Toolbar (For main steps & bonus) */}
        {!isFinished && !isReflecting && (
          <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-850 flex items-center justify-between shrink-0">
            
            {showBonus ? (
              <>
                <button
                  onClick={handlePrevStep}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay lại Bước {totalSteps}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSkipBonus}
                    className="py-2.5 px-4 rounded-xl text-slate-500 hover:text-slate-700 text-xs sm:text-sm font-semibold cursor-pointer"
                  >
                    Bỏ qua thử thách thêm
                  </button>
                  <button
                    onClick={handleProceedToReflection}
                    className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Vào bước Phản tư</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={handlePrevStep}
                  disabled={currentStepIndex === 0}
                  className={`py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                    currentStepIndex === 0
                      ? 'border-slate-200 text-slate-300 dark:border-slate-800 dark:text-slate-600 cursor-not-allowed'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Bước trước</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleNextStep}
                    disabled={!currentStepSelectedOptionId}
                    className={`py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-xs ${
                      !currentStepSelectedOptionId
                        ? 'bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer active:scale-95'
                    }`}
                  >
                    <span>{currentStepIndex === totalSteps - 1 ? 'Chuyển sang Thử thách thêm' : 'Bước tiếp theo'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
