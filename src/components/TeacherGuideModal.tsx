import React, { useState } from 'react';
import { X, BookOpen, Smartphone, Globe, Shield, Sparkles, CheckCircle2, Copy, ExternalLink, QrCode } from 'lucide-react';

interface TeacherGuideModalProps {
  onClose: () => void;
}

export const TeacherGuideModal: React.FC<TeacherGuideModalProps> = ({ onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Hướng Dẫn Dành Cho Giáo Viên & Học Sinh Khối 10
              </h2>
              <p className="text-xs text-slate-500">
                Môn Hoạt động trải nghiệm, hướng nghiệp 10 • Chương trình GDPT 2018
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
          
          {/* Share Link Section */}
          <div className="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-2 text-xs sm:text-sm">
                <Globe className="w-4 h-4 text-indigo-600" />
                Đường link công khai để học sinh toàn trường truy cập
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-200/60 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-semibold">
                Không cần cài app
              </span>
            </div>
            
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs">
              <input 
                type="text" 
                readOnly 
                value={currentUrl} 
                className="flex-1 bg-transparent border-none text-slate-600 dark:text-slate-300 focus:outline-hidden truncate"
              />
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Đã sao chép!' : 'Sao chép link'}</span>
              </button>
            </div>
            <p className="text-[11px] text-indigo-700 dark:text-indigo-300/80">
              💡 Thầy/Cô chỉ cần gửi link này qua nhóm Zalo lớp, Google Classroom hoặc tạo mã QR dán lên bảng chiếu để cả lớp quét bằng điện thoại vào làm bài ngay.
            </p>
          </div>

          {/* Section 1: Cách tổ chức tiết học */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              1. Kế hoạch tổ chức tiết học 45 phút trên lớp
            </h3>
            <div className="grid gap-2.5 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="text-indigo-600">Phút 0 – 5 (Khởi động):</strong> Giáo viên chiếu màn hình giới thiệu tên app “KHÁM PHÁ TÔI – TÔI CÓ THẾ MẠNH GÌ?”. Nêu rõ mục tiêu: Thử thách giải quyết vấn đề, không chấm điểm thi đua, tự do chọn trạm.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="text-indigo-600">Phút 5 – 30 (Trải nghiệm độc lập):</strong> Học sinh mở link trên điện thoại/máy tính cá nhân. Mỗi học sinh tự chọn và hoàn thành từ 3 đến 8 trạm theo nhịp độ riêng. Mỗi trạm có phản hồi giải thích logic và bước phản tư (thú vị / độ khó).
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="text-indigo-600">Phút 30 – 40 (Lập hồ sơ cá nhân):</strong> Học sinh mở trang “Hồ sơ khám phá bản thân”, quan sát biểu đồ 3 chiều, chọn các năng lực muốn phát triển, ghi nhận 1 mục tiêu rèn luyện cho tuần tới.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="text-indigo-600">Phút 40 – 45 (Chia sẻ & Thu hoạch):</strong> Mời 2-3 học sinh chia sẻ điều bất ngờ nhất em vừa nhận ra về bản thân. Học sinh bấm nút “In / Lưu file PDF” để gửi báo cáo cho giáo viên.
              </div>
            </div>
          </div>

          {/* Section 2: Kiểm thử trên thiết bị di động */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-500" />
              2. Hướng dẫn kiểm thử trên điện thoại (Mobile Testing)
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>Web app được thiết kế responsive 100% chuẩn di động, tương thích tốt với iOS (Safari, Chrome) và Android (Chrome, Cốc Cốc).</li>
              <li>Chữ, nút bấm và thanh cuộn được tối ưu cho thao tác chạm tay một chạm.</li>
              <li>Không yêu cầu quyền truy cập định vị, camera hay bất kỳ quyền nhạy cảm nào.</li>
            </ul>
          </div>

          {/* Section 3: Nguyên tắc sư phạm */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <Shield className="w-4 h-4 text-sky-500" />
              3. Nguyên tắc sư phạm cốt lõi
            </h3>
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-1.5">
              <p>• <strong>Không dán nhãn cố định:</strong> Năng lực học sinh lớp 10 đang trong quá trình phát triển mạnh mẽ. Điểm số nhiệm vụ chỉ là minh chứng cho cách tiếp cận cụ thể, không đại diện cho toàn bộ tiềm năng tương lai.</p>
              <p>• <strong>Tách biệt 3 nguồn dữ liệu:</strong> Biểu đồ phân biệt rõ: Điểm nhiệm vụ (minh chứng thực tế), Mức độ hứng thú (sở thích cá nhân) và Độ khó cảm nhận (thử thách). Một bạn có thể thấy bài khó nhưng rất hào hứng.</p>
              <p>• <strong>Bảo mật riêng tư tuyệt đối:</strong> Học sinh có thể dùng biệt danh vui tươi, không thu thập bất kỳ thông tin cá nhân nào.</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm cursor-pointer"
          >
            Đã hiểu & Bắt đầu
          </button>
        </div>

      </div>
    </div>
  );
};
