import { Station } from '../types';

export const STATIONS_DATA: Station[] = [
  {
    id: 'math-logic',
    order: 1,
    title: 'Toán học & Tư duy logic',
    shortTag: 'Logic & Tối ưu',
    iconName: 'Calculator',
    accentColor: 'indigo',
    badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300',
    durationMinutes: '4 - 6 phút',
    tagline: 'Giải mã lịch trình hội trại & Phân bổ nguồn lực lớp 10',
    description: 'Vận dụng tư duy suy luận có cấu trúc, nhận diện ràng buộc và tìm giải pháp tối ưu trong các tình huống thực tiễn học đường.',
    realWorldContext: 'Lớp 10A chuẩn bị tham gia Hội trại Thanh niên toàn trường với ngân sách có hạn và lịch trình biểu diễn chồng chéo.',
    coreCompetencies: [
      'Tư duy suy diễn logic (Deductive Reasoning)',
      'Giải quyết bài toán thỏa mãn ràng buộc (Constraint Satisfaction)',
      'Tối ưu hóa nguồn lực và chi phí (Resource Optimization)'
    ],
    steps: [
      {
        id: 'math-step-1',
        stepNumber: 1,
        title: 'Sắp xếp lịch trình sân khấu không bị xung đột',
        scenario: 'Lớp bạn có 4 tiết mục cần chạy thử trước giờ khai mạc từ 14:00 đến 16:00. Ràng buộc: (1) Tiết mục Kịch cần 45 phút và phải diễn trước tiết mục Hát tam ca. (2) Tiết mục Nhảy hiện đại cần hệ thống âm thanh lớn, chỉ trống sau 15:00. (3) Tiết mục Trình diễn thời trang tái chế cần 30 phút và phải chốt sân khấu cuối cùng.',
        instruction: 'Lựa chọn phương án phân bổ thời gian hợp lý và logic nhất cho 4 tiết mục:',
        type: 'single-choice',
        options: [
          {
            id: 'opt-a',
            label: '14:00-14:45 Kịch ➔ 14:45-15:05 Hát tam ca ➔ 15:05-15:30 Nhảy hiện đại ➔ 15:30-16:00 Thời trang tái chế',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Xuất sắc! Phương án này thỏa mãn hoàn toàn tất cả các điều kiện ràng buộc: Kịch diễn trước Hát, Nhảy được bắt đầu sau 15:00 khi âm thanh sẵn sàng, và Thời trang tái chế chốt cuối cùng mà không bị lố giờ.',
            competencyInsight: 'Bạn có khả năng phân tích chuỗi ràng buộc đa chiều và xây dựng lộ trình tuần tự chính xác.'
          },
          {
            id: 'opt-b',
            label: '14:00-14:30 Nhảy hiện đại ➔ 14:30-15:15 Kịch ➔ 15:15-15:30 Hát tam ca ➔ 15:30-16:00 Thời trang tái chế',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Chưa tối ưu vì vi phạm điều kiện số 2: Tiết mục Nhảy cần âm thanh lớn nhưng hệ thống chỉ trống sau 15:00. Xếp vào 14:00 sẽ khiến nhóm không thể thử âm thanh.',
            competencyInsight: 'Cần chú ý kỹ các điều kiện tiền đề (prerequisites) trước khi bố trí công việc.'
          },
          {
            id: 'opt-c',
            label: '14:00-14:45 Kịch ➔ 14:45-15:15 Thời trang tái chế ➔ 15:15-15:40 Nhảy hiện đại ➔ 15:40-16:00 Hát tam ca',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Chưa thỏa mãn vì vi phạm điều kiện số 3: Thời trang tái chế phải chốt sân khấu cuối cùng để thu dọn đạo cụ cồng kềnh, không thể diễn giữa chừng.',
            competencyInsight: 'Cần lưu ý tính chất của sự kiện cuối cùng trong chuỗi quy trình.'
          }
        ]
      },
      {
        id: 'math-step-2',
        stepNumber: 2,
        title: 'Tối ưu hóa ngân sách dựng gian hàng hội trại',
        scenario: 'Quỹ lớp có 2.500.000 VNĐ. Lớp cần mua: Khung tre & bạt che (bắt buộc: 1.200.000đ), Đèn led trang trí, Màu sơn & cọ vẽ, và 50 phần quà nhỏ cho trò chơi dân gian. Nếu giảm chất lượng quà trò chơi quá nhiều thì gian hàng sẽ vắng khách; nếu cắt giảm đèn thì buổi tối gian hàng sẽ tối mờ.',
        instruction: 'Hãy chọn chiến lược phân bổ 1.300.000 VNĐ còn lại hiệu quả nhất:',
        type: 'single-choice',
        options: [
          {
            id: 'strat-a',
            label: 'Dành 800k mua đèn chiếu sáng rực rỡ, 400k màu vẽ, chỉ còn 100k mua kẹo làm quà (2.000đ/phần)',
            scoreWeight: 3,
            isOptimal: false,
            reasoning: 'Gian hàng sẽ rất sáng nhưng quà thưởng quá đơn điệu có thể làm giảm động lực tham gia trò chơi của học sinh các lớp khác vào chiều tối.',
            competencyInsight: 'Xu hướng ưu tiên hình thức bên ngoài hơn trải nghiệm tương tác của người tham gia.'
          },
          {
            id: 'strat-b',
            label: 'Tận dụng đồ tái chế & mượn dây đèn từ nhà các bạn (tiết kiệm 300k đèn); dành 500k quà hấp dẫn (10k/phần), 300k màu vẽ, 200k dự phòng rủi ro',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Tư duy tối ưu hóa tài nguyên rất sắc sảo! Vừa huy động nguồn lực sẵn có để giảm chi phí cố định, vừa giữ được chất lượng quà hấp dẫn và luôn có quỹ dự phòng cho phát sinh.',
            competencyInsight: 'Bạn biết kết hợp tối ưu chi phí với huy động nguồn lực cộng đồng và quản trị rủi ro tài chính.'
          },
          {
            id: 'strat-c',
            label: 'Dành toàn bộ 1.300k mua quà thật xịn (26k/phần), mượn tất cả đồ trang trí cũ không sơn mới',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Quà rất giá trị nhưng gian hàng thiếu thẩm mỹ và nhận diện lớp 10 có thể khiến ban giám khảo chấm điểm gian hàng thấp.',
            competencyInsight: 'Tư duy nghiêng hẳn về một chỉ số (độ hào phóng) mà bỏ quên tính cân đối tổng thể.'
          }
        ]
      },
      {
        id: 'math-step-3',
        stepNumber: 3,
        title: 'Tìm quy luật tính điểm tích lũy trò chơi tập thể',
        scenario: 'Để kích thích học sinh chơi nhiều lượt tại gian hàng, bạn thiết kế bảng điểm thưởng: Lượt 1 được 3 điểm, Lượt 2 được 7 điểm, Lượt 3 được 15 điểm, Lượt 4 được 31 điểm. Một bạn thắc mắc nếu chơi đến Lượt 6 thì số điểm thưởng quy đổi sẽ là bao nhiêu?',
        instruction: 'Hãy phân tích quy luật của dãy số (3, 7, 15, 31, ...) và đưa ra con số chính xác cùng lý do:',
        type: 'single-choice',
        options: [
          {
            id: 'num-a',
            label: '127 điểm (Quy luật: Mỗi số sau bằng [Số trước × 2] + 1 hoặc 2^(n+1) - 1)',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Chính xác! Lượt 1: 2^2 - 1 = 3; Lượt 2: 2^3 - 1 = 7; Lượt 3: 2^4 - 1 = 15; Lượt 4: 2^5 - 1 = 31; Lượt 5: 31×2 + 1 = 63; Lượt 6: 63×2 + 1 = 127.',
            competencyInsight: 'Bạn có trực giác toán học nhanh nhạy trong việc phát hiện mô hình quy luật (pattern recognition) phi tuyến tính.'
          },
          {
            id: 'num-b',
            label: '63 điểm (Cộng thêm các số chẵn 4, 8, 16, 24...)',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: '63 điểm chỉ mới là số điểm của Lượt thứ 5, chưa phải lượt thứ 6 theo yêu cầu của bài toán.',
            competencyInsight: 'Bạn đã phát hiện một phần quy luật nhưng cần đọc kỹ yêu cầu bước nhảy của câu hỏi.'
          },
          {
            id: 'num-c',
            label: '95 điểm (Mỗi lượt cộng thêm một hằng số cố định)',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Khoảng cách giữa các số tăng theo cấp số nhân (4, 8, 16, 32, 64...), không phải dãy cộng hằng số đều đặn.',
            competencyInsight: 'Cần quan sát tốc độ tăng trưởng của dữ liệu để phân biệt hàm tuyến tính và hàm mũ.'
          }
        ]
      }
    ],
    bonusChallenge: {
      title: 'Thử thách mở rộng: Nghịch lý thứ tự bốc thăm',
      scenario: 'Ba chi đoàn 10A, 10B, 10C bốc thăm thứ tự chọn vị trí dựng lều trại từ một hộp kín có 3 lá thăm đánh số 1, 2, 3. Chi đoàn 10A bốc thăm đầu tiên. Các bạn 10C cho rằng bốc cuối cùng bị thiệt thòi nhất.',
      question: 'Theo góc độ xác suất toán học, nhận định của 10C có đúng không?',
      options: [
        {
          id: 'bonus-a',
          label: 'Không đúng, xác suất bốc được lá thăm số 1 của cả 3 chi đoàn là hoàn toàn bằng nhau (1/3).',
          scoreWeight: 5,
          isOptimal: true,
          reasoning: 'Đúng hoàn toàn theo định lý xác suất điều kiện! P(Người 1 = 1) = 1/3; P(Người 2 = 1) = (2/3) × (1/2) = 1/3; P(Người 3 = 1) = (2/3) × (1/2) × 1 = 1/3.',
          competencyInsight: 'Bạn giữ vững lập luận khoa học khách quan, không bị đánh lừa bởi cảm tính tâm lý thông thường.'
        },
        {
          id: 'bonus-b',
          label: 'Đúng, người bốc đầu tiên luôn có lợi thế vì hộp còn nguyên cơ hội.',
          scoreWeight: 2,
          isOptimal: false,
          reasoning: 'Người bốc đầu tiên cũng có nguy cơ 2/3 bốc phải thăm số không mong muốn ngay lập tức.',
          competencyInsight: 'Dễ bị ảnh hưởng bởi tâm lý chủ quan thay vì phân tích xác suất hệ thống.'
        }
      ]
    }
  },

  {
    id: 'tech-algorithm',
    order: 2,
    title: 'Công nghệ & Tư duy thuật toán',
    shortTag: 'Thuật toán & Debug',
    iconName: 'Cpu',
    accentColor: 'blue',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300',
    durationMinutes: '4 - 7 phút',
    tagline: 'Lập trình đường đi cho Bot dọn rác sân trường & Gỡ lỗi hệ thống',
    description: 'Rèn luyện tư duy phân rã vấn đề, nhận diện mẫu và tối ưu hóa quy trình tự động hóa bằng ngôn ngữ logic thuật toán.',
    realWorldContext: 'CLB STEM của trường chế tạo Robot dọn sân tự động. Robot cần di chuyển thu gom rác mà không đâm vào bồn hoa hay cột cờ.',
    coreCompetencies: [
      'Phân rã vấn đề phức tạp (Decomposition)',
      'Tư duy cấu trúc lặp & tối ưu hóa (Algorithmic Efficiency)',
      'Kỹ năng phát hiện và sửa lỗi hệ thống (Debugging & Troubleshooting)'
    ],
    steps: [
      {
        id: 'tech-step-1',
        stepNumber: 1,
        title: 'Thiết kế chuỗi lệnh tránh vật cản trong mê cung sân trường',
        scenario: 'Robot đang đứng ở góc sân (ô 0,0) hướng về phía Đông. Phía trước 2 bước có bồn hoa (vật cản). Thùng rác cần nhặt nằm ở ô bên trái bồn hoa. Robot chỉ hiểu các lệnh cơ bản: [TIẾN 1], [RẼ TRÁI 90°], [RẼ PHẢI 90°], [NHẶT RÁC].',
        instruction: 'Chọn chuỗi câu lệnh chính xác nhất để robot nhặt rác an toàn:',
        type: 'single-choice',
        options: [
          {
            id: 'tech-cmd-a',
            label: '[TIẾN 1] ➔ [RẼ TRÁI] ➔ [TIẾN 1] ➔ [RẼ PHẢI] ➔ [TIẾN 1] ➔ [NHẶT RÁC]',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Chính xác! Robot tiến 1 bước (chưa đụng bồn hoa ở bước 2), rẽ trái tránh vật cản sang làn bên, tiến 1 bước ngang, rẽ phải lại hướng Đông và tiến tới vị trí rác để nhặt.',
            competencyInsight: 'Bạn có khả năng hình dung không gian và mô phỏng từng trạng thái biến thiên của hệ thống máy móc.'
          },
          {
            id: 'tech-cmd-b',
            label: '[TIẾN 2] ➔ [RẼ TRÁI] ➔ [TIẾN 1] ➔ [NHẶT RÁC]',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Lỗi va chạm! Vì bước 2 có bồn hoa, nếu [TIẾN 2] ngay từ đầu robot sẽ đâm sầm vào vật cản trước khi kịp rẽ.',
            competencyInsight: 'Cần kiểm tra kỹ điều kiện an toàn biên (boundary collision check) trước khi ra lệnh thực thi.'
          },
          {
            id: 'tech-cmd-c',
            label: '[RẼ TRÁI] ➔ [TIẾN 2] ➔ [RẼ PHẢI] ➔ [TIẾN 2] ➔ [NHẶT RÁC]',
            scoreWeight: 3,
            isOptimal: false,
            reasoning: 'Robot có thể tránh được bồn hoa nhưng đi đường vòng thừa bước, lãng phí pin và có nguy cơ chệch tọa độ rác.',
            competencyInsight: 'Giải pháp khả thi nhưng chưa đạt hiệu quả tối ưu về độ phức tạp bước đi.'
          }
        ]
      },
      {
        id: 'tech-step-2',
        stepNumber: 2,
        title: 'Tối ưu hóa bằng vòng lặp (Loop Optimization)',
        scenario: 'Sân trường hình vuông có 4 đống lá cây ở 4 góc đối xứng. Một bạn viết chương trình gồm 24 dòng lặp đi lặp lại: [TIẾN 5; NHẶT; RẼ PHẢI; TIẾN 5; NHẶT; RẼ PHẢI; ...]. Bạn cần rút gọn chương trình bằng cấu trúc lặp để tiết kiệm bộ nhớ vi điều khiển.',
        instruction: 'Cấu trúc mã giả tối ưu nhất là gì?',
        type: 'single-choice',
        options: [
          {
            id: 'loop-a',
            label: 'LẶP LẠI (4 lần): { TIẾN 5; NHẶT RÁC; RẼ PHẢI 90° }',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Tuyệt vời! Nhận diện mẫu (Pattern Recognition) xuất sắc. Cấu trúc lặp 4 lần giúp giảm số dòng lệnh từ 24 xuống còn 3 dòng, dễ bảo trì và tiết kiệm tài nguyên.',
            competencyInsight: 'Tư duy trừu tượng hóa và nguyên lý DRY (Don\'t Repeat Yourself) trong khoa học máy tính.'
          },
          {
            id: 'loop-b',
            label: 'LẶP VÔ HẠN: { TIẾN 1; NẾU CÓ RÁC THÌ NHẶT; NẾU GẶP TƯỜNG THÌ RẼ PHẢI }',
            scoreWeight: 3,
            isOptimal: false,
            reasoning: 'Chạy được nhưng robot sẽ quét từng bước chậm chạp và cần thêm điều kiện dừng (break condition), nếu không robot sẽ chạy cạn pin.',
            competencyInsight: 'Cần tính đến điều kiện kết thúc của vòng lặp để tránh treo hệ thống.'
          },
          {
            id: 'loop-c',
            label: 'LẶP LẠI (2 lần): { TIẾN 10; NHẶT RÁC; RẼ PHẢI 180° }',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Sai hình học! Sân trường hình vuông 4 góc cần 4 lần rẽ 90 độ, rẽ 180 độ chỉ chạy tới lui trên một cạnh.',
            competencyInsight: 'Cần đồng bộ hóa mô hình hình học thực tế với logic biến điều khiển.'
          }
        ]
      },
      {
        id: 'tech-step-3',
        stepNumber: 3,
        title: 'Gỡ lỗi (Debug) hệ thống tưới cây tự động của trường',
        scenario: 'Hệ thống tưới cây thông minh có đoạn mã: "NẾU (Độ ẩm đất < 40%) HOẶC (Trời đang mưa) THÌ { Mở van tưới } NGƯỢC LẠI { Đóng van tưới }". Hôm qua trời mưa tầm tã nhưng vòi tưới vẫn xả nước xối xả làm ngập bồn hoa. Thầy phụ trách nhờ bạn tìm ra nguyên nhân.',
        instruction: 'Lỗi logic nằm ở đâu và sửa lại như thế nào?',
        type: 'single-choice',
        options: [
          {
            id: 'debug-a',
            label: 'Sai toán tử logic: Đang dùng "HOẶC (Trời đang mưa)", phải sửa thành "VÀ (Trời KHÔNG mưa)"',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Chính xác! Do toán tử "HOẶC (Trời đang mưa)" nên hễ trời mưa là điều kiện thành ĐÚNG, van lập tức mở tưới. Biểu thức đúng phải là: "NẾU (Độ ẩm đất < 40%) VÀ KHÔNG (Trời đang mưa)".',
            competencyInsight: 'Bạn nắm rất chắc đại số Boole (AND/OR/NOT) và phản xạ tìm lỗi ngược từ hành vi bất thường của hệ thống.'
          },
          {
            id: 'debug-b',
            label: 'Cảm biến mưa bị hỏng phần cứng, cần mua cảm biến đắt tiền hơn thay thế',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Nguyên nhân nằm ở dòng lệnh điều kiện, thay cảm biến phần cứng thì logic code sai vẫn sẽ kích hoạt vòi nước.',
            competencyInsight: 'Xu hướng đổ lỗi cho phần cứng trước khi kiểm tra kỹ lưỡng phần mềm và giải thuật.'
          },
          {
            id: 'debug-c',
            label: 'Cần tăng ngưỡng độ ẩm lên 80% để van mở nhiều hơn',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Ngược hoàn toàn! Tăng ngưỡng sẽ càng làm vườn cây ngập úng hơn nữa.',
            competencyInsight: 'Cần phân tích mối quan hệ nguyên nhân - kết quả trước khi can thiệp thông số.'
          }
        ]
      }
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Thuật toán tìm đường ngắn nhất (Dijkstra/BFS)',
      scenario: 'Robot cần chuyển tài liệu từ Văn phòng Đoàn đến Phòng Y tế. Có 2 tuyến đường: Đường A qua 3 chặng có camera đông người qua lại (tốc độ chậm); Đường B qua 2 chặng nhưng có 1 đoạn dốc nghiêng tốn 1.5 lần thời gian.',
      question: 'Tiêu chí nào phản ánh tư duy của một lập trình viên khi chọn thuật toán định tuyến?',
      options: [
        {
          id: 'bonus-tech-a',
          label: 'Gán trọng số (weights) theo thời gian thực cho từng cạnh trên đồ thị thay vì chỉ đếm số chặng vật lý.',
          scoreWeight: 5,
          isOptimal: true,
          reasoning: 'Rất chuẩn! Trong lý thuyết đồ thị và mạng giao thông, khoảng cách ngắn nhất không chỉ là số nút mà là tổng chi phí/thời gian thực tế của từng chặng.',
          competencyInsight: 'Tư duy biểu diễn dữ liệu trừu tượng bằng mô hình đồ thị có trọng số.'
        },
        {
          id: 'bonus-tech-b',
          label: 'Cứ chọn đường có ít bước nhất trên bản đồ giấy cho đơn giản.',
          scoreWeight: 2,
          isOptimal: false,
          reasoning: 'Ít chặng hơn nhưng mỗi chặng tắc nghẽn thì tổng thời gian di chuyển sẽ lâu hơn.',
          competencyInsight: 'Cách nhìn trực quan đơn giản chưa tính đến các tham số động.'
        }
      ]
    }
  },

  {
    id: 'science-discovery',
    order: 3,
    title: 'Khoa học & Khám phá',
    shortTag: 'Khoa học & Nghiên cứu',
    iconName: 'FlaskConical',
    accentColor: 'emerald',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300',
    durationMinutes: '4 - 6 phút',
    tagline: 'Điều tra hiện tượng hồ sinh thái bị đục & Thực nghiệm kiểm chứng',
    description: 'Thực hành phương pháp nghiên cứu khoa học: đặt giả thuyết, thiết kế thí nghiệm kiểm soát biến và rút ra kết luận dựa trên bằng chứng thực nghiệm.',
    realWorldContext: 'Góc hồ sinh thái trong khuôn viên trường THPT gần đây bỗng chuyển màu xanh đục và có mùi lạ sau đợt mưa rào.',
    coreCompetencies: [
      'Xây dựng giả thuyết khoa học có thể kiểm chứng (Hypothesis Formulation)',
      'Thiết kế thí nghiệm có kiểm soát biến (Controlled Experimentation)',
      'Phân tích dữ liệu bằng chứng và suy luận khách quan (Evidence-based Reasoning)'
    ],
    steps: [
      {
        id: 'sci-step-1',
        stepNumber: 1,
        title: 'Xác định giả thuyết khoa học từ các manh mối thực tế',
        scenario: 'Nhóm nghiên cứu học sinh thu thập 3 dữ kiện: (1) Nước hồ chỉ đục ở khu vực gần bồn hoa mới được bón phân hóa học. (2) Đo chỉ số Nitrat và Photphat ở vùng này cao gấp 5 lần bình thường. (3) Dưới kính hiển vi quang học quan sát thấy mật độ vi tảo lục tăng đột biến.',
        instruction: 'Giả thuyết khoa học nào giải thích hiện tượng trên một cách chính xác và có thể kiểm chứng thực nghiệm nhất?',
        type: 'single-choice',
        options: [
          {
            id: 'hypo-a',
            label: 'Nước mưa cuốn trôi phân bón dư thừa vào hồ gây phú dưỡng (eutrophication), kích thích tảo sinh sôi mất kiểm soát.',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Rất chính xác! Giả thuyết này liên kết hợp lý dữ kiện nguyên nhân (nước mưa cuốn phân bón giàu N, P) với cơ chế sinh học (phú dưỡng, tảo lục bùng phát) và kết quả quan sát.',
            competencyInsight: 'Khả năng tổng hợp đa dữ liệu để xây dựng mô hình quan hệ nhân quả khoa học.'
          },
          {
            id: 'hypo-b',
            label: 'Do thời tiết tuần này nắng nóng bất thường làm nước bốc hơi nhanh.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Nếu chỉ do nắng nóng thì cả hồ phải đục đều, trong khi manh mối số 1 chỉ ra hiện tượng tập trung ở khu vực gần bồn hoa.',
            competencyInsight: 'Cần chú ý tính khu trú và sự bất đối xứng của các điều kiện trong thực tế.'
          },
          {
            id: 'hypo-c',
            label: 'Do các loài cá trong hồ quẫy bùn làm nước đổi màu xanh.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Bùn đáy chỉ làm nước có màu nâu đục, không thể giải thích màu xanh lục và sự bùng nổ của vi tảo dưới kính hiển vi.',
            competencyInsight: 'Giả thuyết chưa bao quát được các bằng chứng vi mô đã thu thập.'
          }
        ]
      },
      {
        id: 'sci-step-2',
        stepNumber: 2,
        title: 'Thiết kế thí nghiệm kiểm chứng đối chứng (Control Experiment)',
        scenario: 'Để chứng minh phân bón chính là yếu tố kích thích tảo nở hoa, bạn lấy mẫu nước hồ sạch và chia vào các bình thủy tinh trong phòng thí nghiệm trường học.',
        instruction: 'Cách bố trí các bình thí nghiệm nào sau đây tuân thủ đúng nguyên tắc kiểm soát biến độc lập và biến đối chứng?',
        type: 'single-choice',
        options: [
          {
            id: 'exp-a',
            label: 'Bình A (đối chứng): Nước hồ + ánh sáng chuẩn. Bình B (thực nghiệm): Nước hồ + cùng lượng ánh sáng + thêm dung dịch phân bón N-P nồng độ đo được.',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Chuẩn mực khoa học cao! Giữ nguyên mọi điều kiện môi trường (nước, ánh sáng, nhiệt độ, thể tích) và chỉ thay đổi DUY NHẤT một biến độc lập (phân bón N-P) để đo lường biến phụ thuộc (mật độ tảo).',
            competencyInsight: 'Bạn hiểu sâu sắc bản chất của phương pháp thực nghiệm khoa học có đối chứng (Controlled Experiment).'
          },
          {
            id: 'exp-b',
            label: 'Bình A để trong tối không có phân bón; Bình B để ngoài nắng gắt có thêm thật nhiều phân bón.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Sai lầm kinh điển: Làm thay đổi cùng lúc cả 2 biến (ánh sáng và phân bón), dẫn đến hiện tượng biến nhiễu (confounding variable), không thể kết luận do yếu tố nào.',
            competencyInsight: 'Cần triệt để cô lập các biến số để đảm bảo tính giá trị của thí nghiệm.'
          },
          {
            id: 'exp-c',
            label: 'Chỉ làm 1 bình duy nhất có phân bón rồi chụp ảnh theo dõi hàng ngày.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Thiếu bình đối chứng (negative control), không thể loại trừ khả năng tảo tự phát triển do các yếu tố vi lượng có sẵn trong mẫu nước ban đầu.',
            competencyInsight: 'Mẫu đối chứng là điều kiện tiên quyết để xác nhận tính chính xác của giả thuyết.'
          }
        ]
      },
      {
        id: 'sci-step-3',
        stepNumber: 3,
        title: 'Đề xuất giải pháp can thiệp sinh thái bền vững',
        scenario: 'Sau khi xác nhận giả thuyết, bạn cần tư vấn cho Ban Giám hiệu phương án xử lý hồ sinh thái thân thiện với môi trường, không dùng hóa chất diệt khuẩn độc hại cho đàn cá koi.',
        instruction: 'Giải pháp sinh thái nào tối ưu và mang tính tự cân bằng lâu dài?',
        type: 'single-choice',
        options: [
          {
            id: 'sol-a',
            label: 'Trồng thêm thủy sinh hấp thụ dinh dưỡng (hoa súng, bèo hoa dâu), tạo rãnh sỏi chặn dòng chảy phân bón từ bồn hoa và lắp guồng nước sục khí oxy.',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Giải pháp sinh thái tuần hoàn toàn diện! Vừa xử lý gốc rễ (chặn nguồn phân trôi), vừa cạnh tranh sinh học hấp thụ dinh dưỡng dư thừa, vừa tăng oxy hòa tan giúp vi sinh vật có lợi phân hủy bùn.',
            competencyInsight: 'Tư duy hệ sinh thái tích hợp và năng lực giải quyết vấn đề dựa trên khoa học bền vững.'
          },
          {
            id: 'sol-b',
            label: 'Đổ bột Clo tẩy trắng hồ mỗi tuần một lần để tiêu diệt sạch mọi loại tảo.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Clo sẽ giết chết hệ vi sinh có ích và đầu độc cá koi, phá vỡ hoàn toàn chuỗi thức ăn sinh thái của hồ.',
            competencyInsight: 'Can thiệp thô bạo bằng hóa chất mà thiếu hiểu biết về cân bằng sinh thái.'
          },
          {
            id: 'sol-c',
            label: 'Bơm hút cạn nước hồ và thay nước máy mới mỗi khi nước bị đục.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Giải pháp đối phó cực kỳ tốn kém nước sạch và không giải quyết được nguồn phân bón cứ mỗi cơn mưa lại tiếp tục tràn xuống.',
            competencyInsight: 'Tư duy xử lý phần ngọn thay vì giải quyết triệt để nguyên nhân gốc rễ.'
          }
        ]
      }
    ],
    bonusChallenge: {
      title: 'Thử thách mở rộng: Đọc và biện giải biểu đồ oxy hòa tan (DO)',
      scenario: 'Biểu đồ đo nồng độ oxy hòa tan trong hồ cho thấy: Oxy đạt đỉnh cao nhất lúc 14:00 chiều nhưng lại tụt xuống mức nguy hiểm gần như bằng 0 lúc 4:00 sáng.',
      question: 'Quy luật sinh học nào giải thích hiện tượng oxy giảm sâu nhất vào rạng sáng?',
      options: [
        {
          id: 'bonus-sci-a',
          label: 'Ban ngày tảo quang hợp mạnh thải oxy; ban đêm tảo và sinh vật không quang hợp mà chỉ hô hấp tiêu thụ oxy liên tục.',
          scoreWeight: 5,
          isOptimal: true,
          reasoning: 'Chính xác! Ban đêm không có ánh sáng mặt trời để quang hợp tạo oxy, trong khi toàn bộ quần thể tảo khổng lồ và vi sinh vật phân hủy cùng hô hấp tiêu thụ oxy cạn kiệt.',
          competencyInsight: 'Hiểu bản chất chu trình trao đổi chất ngày - đêm trong quần xã sinh vật nước ngọt.'
        },
        {
          id: 'bonus-sci-b',
          label: 'Nhiệt độ ban đêm lạnh làm oxy tự thoát ra khỏi mặt nước vào không khí.',
          scoreWeight: 2,
          isOptimal: false,
          reasoning: 'Theo vật lý, nước càng lạnh thì độ hòa tan của chất khí càng tăng, không thể làm oxy giảm vì lý do này.',
          competencyInsight: 'Cần phân biệt quy luật hóa lý với hiện tượng sinh học của cơ thể sống.'
        }
      ]
    }
  },

  {
    id: 'creativity-design',
    order: 4,
    title: 'Sáng tạo & Thiết kế',
    shortTag: 'Thị giác & Ý tưởng',
    iconName: 'Palette',
    accentColor: 'rose',
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300',
    durationMinutes: '4 - 6 phút',
    tagline: 'Thiết kế nhận diện thị giác & Poster Ngày hội Văn hóa Lớp 10',
    description: 'Thử nghiệm cảm quan thẩm mỹ, nguyên lý phân cấp thị giác (visual hierarchy), phối màu và tư duy ẩn dụ sáng tạo.',
    realWorldContext: 'Đoàn trường phát động cuộc thi thiết kế Poster cổ động "Tuổi trẻ 10 - Bứt phá ước mơ" để treo tại sảnh trung tâm và fanpage trường.',
    coreCompetencies: [
      'Cảm quan màu sắc và độ tương phản (Color Palette Harmony)',
      'Phân cấp thông tin thị giác (Visual Hierarchy)',
      'Tư duy biểu tượng & ẩn dụ thị giác (Metaphorical Thinking)'
    ],
    steps: [
      {
        id: 'art-step-1',
        stepNumber: 1,
        title: 'Lựa chọn bảng màu định hình cảm xúc thương hiệu lớp',
        scenario: 'Chủ đề của Ngày hội là: "Năng động - Khát vọng tri thức - Gắn kết bạn bè". Bạn cần chọn bộ 3 màu chủ đạo (Primary, Accent, Background) vừa thể hiện đúng tinh thần, vừa đảm bảo tính dễ đọc trên màn hình điện thoại học sinh.',
        instruction: 'Bộ phối màu nào mang lại ấn tượng thị giác chuyên nghiệp và phù hợp nhất?',
        type: 'single-choice',
        options: [
          {
            id: 'palette-a',
            label: 'Xanh lam đậm (Tri thức bền vững) + Cam san hô ấm (Nhiệt huyết bứt phá) + Nền trắng kem sáng dịu mắt (Tương phản cao WCAG AAA)',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Phối màu bổ túc (Complementary) kinh điển và hiện đại! Xanh lam tạo cảm giác tin cậy, tri thức; sắc cam san hô tạo điểm nhấn kích thích hành động; nền kem giúp mắt không bị mỏi khi đọc chữ.',
            competencyInsight: 'Bạn có cảm quan thị giác tinh tế và hiểu tâm lý học màu sắc ứng dụng trong truyền thông.'
          },
          {
            id: 'palette-b',
            label: 'Đỏ tươi + Vàng chanh + Xanh nõn chuối neon trên nền đen đậm',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Quá nhiều màu nóng đối chọi gây chói mắt (visual fatigue), chữ trên nền neon khó đọc và tạo cảm giác lộn xộn, thiếu chuyên nghiệp.',
            competencyInsight: 'Chú trọng vào sự nổi bật bề ngoài nhưng chưa tính đến khả năng tiếp nhận thị giác của người xem.'
          },
          {
            id: 'palette-c',
            label: 'Xám tro nhạt + Xám chuột + Trắng đục đơn sắc',
            scoreWeight: 3,
            isOptimal: false,
            reasoning: 'Bảng màu quá ảm đạm, thiếu năng lượng trẻ trung cần có của học sinh khối 10 trong một ngày hội văn hóa bùng nổ.',
            competencyInsight: 'Cần kết nối cảm xúc mục tiêu của sự kiện với sắc độ màu sắc.'
          }
        ]
      },
      {
        id: 'art-step-2',
        stepNumber: 2,
        title: 'Bố cục phân cấp thị giác (Visual Hierarchy) cho Poster',
        scenario: 'Một poster hiệu quả cần giúp người lướt qua nắm bắt thông tin trong vòng 3 giây. Trên bản thiết kế có 4 thành phần: (1) Tiêu đề sự kiện, (2) Thời gian & địa điểm, (3) Hình ảnh minh họa chính, (4) Mã QR đăng ký & link chi tiết.',
        instruction: 'Thứ tự dẫn dắt mắt nhìn (Visual Flow) nào sau đây thu hút và tự nhiên nhất?',
        type: 'single-choice',
        options: [
          {
            id: 'flow-a',
            label: 'Tâm điểm hình ảnh ấn tượng ở 1/3 trên ➔ Tiêu đề chữ lớn sắc nét ➔ Cụm thời gian địa điểm rõ ràng ➔ Mã QR đặt ở góc chân poster thuận tay quét',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Quy tắc dòng chảy thị giác chữ Z/F hoàn hảo! Hình ảnh giữ chân ánh nhìn đầu tiên, mắt trượt xuống tiêu đề hiểu ngay sự kiện, tiếp đến thông tin cốt lõi và kết thúc bằng hành động cụ thể (Call to Action).',
            competencyInsight: 'Bạn nắm vững hành vi thị giác người dùng (User Experience) và nghệ thuật bố cục đồ họa.'
          },
          {
            id: 'flow-b',
            label: 'Đặt mã QR thật to chính giữa poster, xung quanh bao bọc bởi chữ tiêu đề uốn lượn',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Mã QR quá to chiếm tâm điểm làm mất cảm xúc thẩm mỹ, người xem chưa hiểu sự kiện là gì để có hứng thú rút điện thoại ra quét.',
            competencyInsight: 'Đặt mục tiêu kỹ thuật lên trước trải nghiệm tạo cảm xúc của người thưởng thức.'
          },
          {
            id: 'flow-c',
            label: 'Dồn toàn bộ thông tin thể lệ chi tiết thành đoạn văn dài 10 dòng in ở góc trên cùng',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Tạo nên một bức tường chữ (wall of text) dày đặc khiến học sinh bỏ qua ngay lập tức khi lướt mạng xã hội.',
            competencyInsight: 'Thiếu kỹ năng cô đọng thông điệp thành các khối thông tin thị giác ngắn gọn.'
          }
        ]
      },
      {
        id: 'art-step-3',
        stepNumber: 3,
        title: 'Tư duy biểu tượng & Ý tưởng ẩn dụ (Metaphor Concept)',
        scenario: 'Để thiết kế biểu trưng (Logo mascot) cho Ngày hội Lớp 10 mang ý nghĩa "Từ bỡ ngỡ bước vào THPT đến tự tin tỏa sáng", bạn muốn tìm một hình tượng vừa gần gũi vừa độc đáo.',
        instruction: 'Ý tưởng biểu tượng nào thể hiện chiều sâu thông điệp nhất?',
        type: 'single-choice',
        options: [
          {
            id: 'concept-a',
            label: 'Một chiếc la bàn cách điệu thành cánh chim origami bay vút qua khung cửa sổ sổ trang sách mở.',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Ẩn dụ đa tầng rất thơ mộng và giàu ý nghĩa! Trang sách là nền tảng tri thức lớp 10, chiếc la bàn là sự định hướng bản thân, còn cánh chim gấp giấy origami thể hiện sự sáng tạo vươn xa từ những điều giản dị.',
            competencyInsight: 'Khả năng tư duy biểu tượng trừu tượng và kết nối các hình tượng nghệ thuật độc đáo.'
          },
          {
            id: 'concept-b',
            label: 'Vẽ một cây bút máy thật to kèm số 10 gạch chân màu đỏ.',
            scoreWeight: 3,
            isOptimal: false,
            reasoning: 'Hình ảnh quen thuộc, trực quan nhưng còn mang tính khuôn mẫu rập khuôn (cliché), chưa tạo được dấu ấn cảm xúc riêng biệt.',
            competencyInsight: 'Ý tưởng an toàn, cần khuyến khích thêm tư duy phá cách và liên tưởng mới lạ.'
          },
          {
            id: 'concept-c',
            label: 'Sao chép hình ảnh một siêu anh hùng truyện tranh nổi tiếng dán vào giữa poster.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Vi phạm bản quyền hình ảnh và thiếu bản sắc học sinh trường THPT.',
            competencyInsight: 'Cần phát triển ý tưởng nguyên bản (originality) thay vì vay mượn thụ động.'
          }
        ]
      }
    ],
    bonusChallenge: {
      title: 'Thử thách mở rộng: Khai thác khoảng trống (Negative Space)',
      scenario: 'Nhiều bạn có thói quen chèn hình dán và hoa văn phủ kín 100% diện tích trang thiết kế vì sợ để trống sẽ "trống trải".',
      question: 'Trong thiết kế mỹ thuật hiện đại, khoảng trống (Negative Space) đóng vai trò gì?',
      options: [
        {
          id: 'bonus-art-a',
          label: 'Là "nhịp thở thị giác", giúp tôn vinh yếu tố chính và định hướng sự tập trung của não bộ người xem.',
          scoreWeight: 5,
          isOptimal: true,
          reasoning: 'Rất thấu đáo! Khoảng trắng không phải là chỗ bỏ quên, mà là một thành phần thiết kế chủ động tạo sự sang trọng và mạch lạc cho tác phẩm.',
          competencyInsight: 'Tư duy tối giản có chọn lọc và làm chủ không gian nghệ thuật.'
        },
        {
          id: 'bonus-art-b',
          label: 'Khoảng trống chỉ để tiết kiệm mực in khi đem ra xưởng in giấy.',
          scoreWeight: 1,
          isOptimal: false,
          reasoning: 'Cách nhìn thực dụng hạn hẹp chưa phản ánh nguyên lý thẩm mỹ thị giác.',
          competencyInsight: 'Cần nhìn nhận thiết kế như một ngôn ngữ truyền cảm xúc.'
        }
      ]
    }
  },

  {
    id: 'language-expression',
    order: 5,
    title: 'Ngôn ngữ & Diễn đạt',
    shortTag: 'Diễn đạt & Thuyết phục',
    iconName: 'MessageSquareText',
    accentColor: 'amber',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300',
    durationMinutes: '3 - 5 phút',
    tagline: 'Biên tập bản tin phát thanh học đường & Nghệ thuật diễn ngôn thuyết phục',
    description: 'Thử tài chọn lọc từ ngữ sắc bén, biến đổi ngữ điệu (tone of voice) và cấu trúc lập luận truyền cảm hứng cho cộng đồng học sinh.',
    realWorldContext: 'Bạn là thành viên Ban biên tập Bản tin Giờ ra chơi của trường, chuẩn bị một đoạn phát thanh 90 giây kêu gọi giảm thiểu rác thải nhựa tại căn-tin.',
    coreCompetencies: [
      'Nghệ thuật mở đầu cuốn hút (Hook & Engagement)',
      'Tinh chỉnh sắc thái và ngữ điệu ngôn từ (Tone & Nuance)',
      'Cấu trúc lập luận thuyết phục logic (Argumentation Structure)'
    ],
    steps: [
      {
        id: 'lang-step-1',
        stepNumber: 1,
        title: 'Tạo câu mở đầu (Hook) thu hút sự chú ý trong 5 giây đầu',
        scenario: 'Chuông ra chơi vừa reo, sân trường ồn ào tiếng cười nói. Bản tin phát thanh của bạn vừa vang lên qua hệ thống loa. Bạn cần một câu mở đầu kích hoạt trí tò mò mà không sáo rỗng hay mang tính rao giảng.',
        instruction: 'Đoạn mở đầu nào khơi gợi sự lắng nghe tự nhiên nhất của học sinh?',
        type: 'single-choice',
        options: [
          {
            id: 'hook-a',
            label: '"Mỗi ngày căn-tin trường mình ‘tiêu thụ’ hơn 400 chiếc ly nhựa dùng một lần — bạn có tò mò chiếc ly bạn vừa uống xong 5 phút trước sẽ ở đâu vào năm bạn 40 tuổi?"',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Tuyệt chiêu mở đầu xuất sắc! Dùng con số cụ thể gắn với đời sống quen thuộc (400 chiếc ly ở căn-tin) kết hợp câu hỏi gợi mở cá nhân hóa, chạm vào trí tưởng tượng mà không tạo cảm giác bị giáo điều.',
            competencyInsight: 'Khả năng kết nối thực tế học đường với thông điệp lớn bằng thủ pháp tu từ đắt giá.'
          },
          {
            id: 'hook-b',
            label: '"Alo alo, đề nghị toàn thể học sinh trật tự lắng nghe bản tin tuyên truyền phòng chống rác thải nhựa số 04 của nhà trường!"',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Lối diễn đạt hành chính quan cách và mệnh lệnh khiến học sinh lập tức ngắt sự chú ý hoặc cảm thấy nhàm chán.',
            competencyInsight: 'Ngữ điệu quá trang nghiêm, thiếu tính kết nối tâm lý với lứa tuổi học trò.'
          },
          {
            id: 'hook-c',
            label: '"Cứ dùng đồ nhựa thoải mái đi vì đằng nào trái đất cũng sắp nóng lên rồi các bạn ơi!"',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Gây sốc tiêu cực và có nguy cơ phát đi thông điệp buông xuôi, gây hiểu lầm trong môi trường giáo dục.',
            competencyInsight: 'Nhầm lẫn giữa gây chú ý tích cực với phát ngôn giật gân phản tác dụng.'
          }
        ]
      },
      {
        id: 'lang-step-2',
        stepNumber: 2,
        title: 'Biến đổi thông báo khô cứng thành thông điệp truyền cảm hứng',
        scenario: 'Nội dung gốc của văn bản: "Học sinh không được vứt rác bừa bãi. Ai vi phạm sẽ bị trừ điểm thi đua của lớp và phê bình trước cờ."',
        instruction: 'Hãy chọn bản dịch ngôn ngữ truyền thông mềm dẻo nhưng có sức nặng lan tỏa hành vi tự giác:',
        type: 'single-choice',
        options: [
          {
            id: 'trans-a',
            label: '"Sân trường sạch không phải vì ai đó sợ bị trừ điểm, mà vì chúng mình trân trọng từng bước chân bước vào lớp mỗi sớm mai. Một chiếc vỏ kẹo đặt đúng thùng rác hôm nay là lời cảm ơn giản dị nhất gửi đến các cô chú lao công."',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Ngôn từ chạm đến lòng tự trọng và sự thấu cảm nhân văn! Thay thế nỗi sợ trừng phạt bằng niềm tự hào và lòng biết ơn, kích hoạt hành vi tự nguyện bền vững.',
            competencyInsight: 'Khả năng thấu cảm ngôn ngữ cao, chuyển hóa thông điệp cấm đoán thành giá trị đạo đức tích cực.'
          },
          {
            id: 'trans-b',
            label: '"Nếu lớp bạn bị trừ điểm thi đua tuần này, đừng trách sao chúng tôi không cảnh báo trước nhé."',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Giọng điệu thách thức, tạo rào cản phòng vệ tâm lý giữa người nói và người nghe thay vì xây dựng sự gắn kết.',
            competencyInsight: 'Dễ tạo cảm xúc đối kháng trong giao tiếp tập thể.'
          },
          {
            id: 'trans-c',
            label: '"Rác là kẻ thù số một của văn minh trường học, hãy tiêu diệt rác ngay bây giờ."',
            scoreWeight: 3,
            isOptimal: false,
            reasoning: 'Cách nói ẩn dụ đao to búa lớn nhưng thiếu hành động cụ thể, tạo cảm giác hình thức khẩu hiệu sáo rỗng.',
            competencyInsight: 'Cần bổ sung tính cụ thể và khả thi vào lời kêu gọi hành động.'
          }
        ]
      },
      {
        id: 'lang-step-3',
        stepNumber: 3,
        title: 'Cấu trúc lập luận thuyết phục Ban Giám hiệu (Mô hình C-E-R)',
        scenario: 'Lớp 10A muốn đề xuất Nhà trường cho phép thành lập "Câu lạc bộ Tranh biện & Kỹ năng Nói" sinh hoạt vào chiều thứ Năm hàng tuần. Bạn được giao nhiệm vụ viết thư đề xuất gửi Ban Giám hiệu.',
        instruction: 'Đoạn lập luận nào áp dụng chuẩn xác cấu trúc: Khẳng định (Claim) ➔ Dẫn chứng (Evidence) ➔ Lý giải (Reasoning)?',
        type: 'single-choice',
        options: [
          {
            id: 'cer-a',
            label: 'CLB Tranh biện sẽ nâng cao năng lực ngôn ngữ và tư duy phản biện cho học sinh lớp 10 (Khẳng định). Khảo sát 120 bạn khối 10 cho thấy 85% mong muốn có không gian rèn luyện thuyết trình, và 3 trường THPT lân cận đã áp dụng thành công (Dẫn chứng). Khi học sinh biết phản biện văn minh, các xung đột học đường sẽ giảm và kết quả môn Ngữ văn - GDCD sẽ được cải thiện rõ nét (Lý giải).',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Cấu trúc lập luận mẫu mực, chặt chẽ và đầy sức thuyết phục! Có số liệu thực chứng, đối chiếu trường bạn và phân tích lợi ích cụ thể mang tính hai chiều cho cả học sinh lẫn nhà trường.',
            competencyInsight: 'Tư duy lập luận logic có cấu trúc (Rhetorical Structure) vững vàng và chuyên nghiệp.'
          },
          {
            id: 'cer-b',
            label: 'Chúng em rất thích tranh biện vì nó rất vui và ngầu. Nhiều bạn nói rằng nếu không có CLB này thì trường mình sẽ bị thụt lùi so với các trường khác, nên thầy cô nhất định phải duyệt.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Lập luận dựa trên cảm xúc chủ quan, dùng từ ngữ mang tính gây áp lực thiếu căn cứ và chưa tôn trọng ban giám hiệu.',
            competencyInsight: 'Cần rèn luyện cách lập luận dựa trên bằng chứng thay vì cảm xúc bộc phát.'
          },
          {
            id: 'cer-c',
            label: 'Thầy cô cứ cho chúng em lập CLB đi, chúng em cam kết không quậy phá và hứa sẽ ngoan ngoãn trong giờ học.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Chỉ dừng ở lời hứa suông mà không nêu bật được giá trị giáo dục hay kế hoạch hoạt động cụ thể của dự án.',
            competencyInsight: 'Thiếu tư duy đề xuất giải pháp có lộ trình học thuật.'
          }
        ]
      }
    ],
    bonusChallenge: {
      title: 'Thử thách mở rộng: Ứng biến khi bị phản biện',
      scenario: 'Thầy Tổng phụ trách hỏi lại: "Học sinh lớp 10 chương trình mới đã rất bận rộn bài vở, sinh hoạt CLB liệu có làm các em xao nhãng việc học trên lớp không?"',
      question: 'Cách hồi đáp nào thể hiện sự điềm tĩnh và thông minh trong giao tiếp?',
      options: [
        {
          id: 'bonus-lang-a',
          label: 'Đồng tình với mối bận tâm của thầy, sau đó trình bày quy chế CLB: Giới hạn 60 phút/tuần, chỉ dành cho bạn duy trì học lực khá trở lên và hoạt động như một nhóm học tập bổ trợ.',
          scoreWeight: 5,
          isOptimal: true,
          reasoning: 'Phương pháp giao tiếp "Đồng thuận rồi dẫn dắt" (Pacing & Leading) tuyệt vời! Thể hiện sự tôn trọng nỗi lo của người đối thoại, đồng thời đưa ngay giải pháp kiểm soát cụ thể.',
          competencyInsight: 'Nghệ thuật ứng biến linh hoạt và điềm tĩnh trong đối thoại phản biện.'
        },
        {
          id: 'bonus-lang-b',
          label: 'Phản bác ngay rằng học tập không chỉ có điểm số và thầy cô không nên quá khắt khe.',
          scoreWeight: 2,
          isOptimal: false,
          reasoning: 'Cách phản ứng phòng thủ dễ biến buổi trao đổi xây dựng thành cuộc tranh cãi căng thẳng.',
          competencyInsight: 'Dễ rơi vào bẫy đối đầu khi gặp ý kiến trái chiều.'
        }
      ]
    }
  },

  {
    id: 'communication-collaboration',
    order: 6,
    title: 'Giao tiếp & Hợp tác',
    shortTag: 'Làm việc nhóm & Kết nối',
    iconName: 'Users',
    accentColor: 'teal',
    badgeColor: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300',
    durationMinutes: '4 - 6 phút',
    tagline: 'Điều phối mâu thuẫn & Xây dựng đồng thuận nhóm dự án học tập',
    description: 'Thực hành kỹ năng lắng nghe chủ động, phân chia vai trò theo thế mạnh và hóa giải bất đồng theo nguyên tắc cùng thắng (Win-Win).',
    realWorldContext: 'Nhóm 5 bạn lớp 10 được giao dự án thuyết trình môn Lịch sử địa phương. Thời hạn còn 4 ngày nhưng các thành viên bắt đầu nảy sinh bất đồng căng thẳng.',
    coreCompetencies: [
      'Lắng nghe chủ động và tách cảm xúc khỏi vấn đề (Active Listening)',
      'Phân bổ vai trò tương thích với thế mạnh cá nhân (Strength-based Role Assignment)',
      'Phản hồi xây dựng theo thông điệp "Tôi" (Constructive Feedback & I-Message)'
    ],
    steps: [
      {
        id: 'team-step-1',
        stepNumber: 1,
        title: 'Hóa giải xung đột ý tưởng đối lập trong buổi họp nhóm',
        scenario: 'Bạn An muốn làm một phóng sự video thực địa quay tại viện bảo tàng (rất đầu tư nhưng tốn nhiều thời gian di chuyển). Bạn Bình phản đối kịch liệt, muốn làm slide thuyết trình Infographic ngắn gọn để tiết kiệm thời gian ôn thi Toán. Hai bạn bắt đầu to tiếng và không ai chịu nhường ai.',
        instruction: 'Với tư cách nhóm trưởng điều phối, bạn sẽ xử lý tình huống này như thế nào?',
        type: 'single-choice',
        options: [
          {
            id: 'conflict-a',
            label: 'Ghi nhận mong muốn chính đáng của cả hai: An muốn sản phẩm ấn tượng, Bình muốn an toàn về thời gian. Đề xuất phương án kết hợp: Phỏng vấn nhanh 1 đoạn video 2 phút tại góc phố gần trường lồng ghép vào slide infographic.',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Giải pháp Win-Win xuất sắc! Bạn thấu cảm động cơ tích cực đằng sau sự phản ứng của từng bạn, hạ nhiệt cảm xúc và sáng tạo một điểm giao thoa hài hòa lợi ích của cả hai bên.',
            competencyInsight: 'Kỹ năng trung gian hòa giải (Mediation) và tư duy tích hợp giải pháp nhóm.'
          },
          {
            id: 'conflict-b',
            label: 'Tổ chức bỏ phiếu biểu quyết số đông, bên nào ít phiếu hơn thì bắt buộc phải im lặng nghe theo.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Bỏ phiếu vội vã chỉ tạo ra phe thắng - phe thua. Người thua sẽ làm việc trong tâm trạng bất mãn, thụ động và dự án dễ bị đình trệ.',
            competencyInsight: 'Dùng quyền lực biểu quyết cơ học thay vì xây dựng đồng thuận thực chất.'
          },
          {
            id: 'conflict-c',
            label: 'Mặc kệ cho hai bạn tự tranh cãi xong rồi ai thắng thì làm theo người đó.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Bỏ mặc mâu thuẫn sẽ làm rạn nứt tình bạn và nhóm sẽ mất thời gian quý báu mà không ra được quyết định.',
            competencyInsight: 'Né tránh xung đột (Conflict Avoidance) làm giảm sút hiệu suất tập thể.'
          }
        ]
      },
      {
        id: 'team-step-2',
        stepNumber: 2,
        title: 'Phân chia vai trò theo thế mạnh cá nhân (Strength Mapping)',
        scenario: 'Nhóm bạn có 4 thành viên với những đặc điểm nổi bật: (1) Tuấn: Ít nói, tỉ mỉ, thích đọc sách lịch sử sâu; (2) Lan: Khéo tay, thành thạo công cụ thiết kế Canva; (3) Hùng: Tự tin trước đám đông, hoạt ngôn; (4) Bạn: Giỏi tổ chức, viết kịch bản và theo dõi tiến độ.',
        instruction: 'Cách phân công nhiệm vụ nào tối ưu hóa tiềm năng của từng người?',
        type: 'single-choice',
        options: [
          {
            id: 'role-a',
            label: 'Tuấn: Nghiên cứu tư liệu & kiểm chứng dữ kiện; Lan: Thiết kế slide & đồ họa; Hùng: Đại diện nhóm thuyết trình & trả lời vấn đáp; Bạn: Xây dựng dàn ý kịch bản & điều phối tiến độ chung.',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Sự ăn khớp vai trò hoàn hảo! Mỗi người đều được đặt vào vị trí đúng sở trường: Tuấn phát huy tính cẩn trọng, Lan tỏa sáng thẩm mỹ, Hùng thể hiện sự tự tin và Bạn giữ nhịp điều phối hệ thống.',
            competencyInsight: 'Khả năng nhận diện thế mạnh con người và nghệ thuật quản trị nhân sự trong nhóm.'
          },
          {
            id: 'role-b',
            label: 'Bốc thăm ngẫu nhiên để chia việc cho công bằng, ai trúng phần nào tự làm phần đó.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Công bằng máy móc nhưng phản khoa học. Nếu bạn ít nói bị bắt đi thuyết trình còn bạn hoạt ngôn bị bắt ngồi dịch tài liệu thì cả nhóm sẽ giảm năng suất.',
            competencyInsight: 'Nhầm lẫn giữa bình đẳng cào bằng với phân công công việc thông minh.'
          },
          {
            id: 'role-c',
            label: 'Một mình bạn làm hết từ A-Z cho nhanh và đỡ phải bàn bạc mệt mỏi.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Bạn sẽ bị quá tải kiệt sức, tước đi cơ hội học hỏi của các bạn khác và đánh mất hoàn toàn ý nghĩa của việc làm việc nhóm.',
            competencyInsight: 'Tư duy "ôm đồm" cản trở sự trưởng thành của kỹ năng lãnh đạo hợp tác.'
          }
        ]
      },
      {
        id: 'team-step-3',
        stepNumber: 3,
        title: 'Đưa phản hồi xây dựng khi bạn trong nhóm trễ hạn nộp bài',
        scenario: 'Chỉ còn 24 giờ nữa là đến hạn nộp bài, nhưng phần việc của bạn Dũng vẫn chưa thấy đâu. Bạn nhắn tin riêng cho Dũng để nhắc nhở và tìm hiểu nguyên nhân.',
        instruction: 'Cách tiếp cận nào thể hiện kỹ năng phản hồi xây dựng (Feedback Sandwich & I-Message)?',
        type: 'single-choice',
        options: [
          {
            id: 'fb-a',
            label: '"Dũng ơi, nhóm rất trân trọng những ý tưởng hay của bạn ở buổi họp trước. Hiện tại còn phần tóm tắt của bạn nữa là hoàn thiện bài, mình hơi lo lắng vì mai đã là hạn chót. Bạn có đang gặp khó khăn gì không, nhóm có thể hỗ trợ bạn một tay để cùng kịp tiến độ?"',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Mẫu mực của giao tiếp thấu cảm và trách nhiệm! Bắt đầu bằng sự công nhận, nêu cảm xúc và thực tế bằng thông điệp "Tôi/Nhóm" thay vì tấn công, sau đó chủ động đề nghị hỗ trợ để cùng đạt mục tiêu chung.',
            competencyInsight: 'Giao tiếp hỗ trợ (Supportive Communication) và giữ gìn mối quan hệ tích cực khi giải quyết vấn đề.'
          },
          {
            id: 'fb-b',
            label: '"Sao bạn vô trách nhiệm thế? Cả nhóm đang vì bạn mà bị điểm kém đấy, nộp ngay lập tức đi!"',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Gắn nhãn tiêu cực và công kích cá nhân sẽ khiến bạn đối phương co cụm phòng thủ hoặc buông xuôi bỏ cuộc luôn.',
            competencyInsight: 'Thiếu kiểm soát cảm xúc trong tình huống áp lực thời gian.'
          },
          {
            id: 'fb-c',
            label: 'Im lặng không nói gì, tự mình làm bù phần việc rồi báo cô giáo trừ điểm của Dũng.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Giao tiếp thụ động - công kích ngầm (passive-aggressive), không cho bạn cơ hội sửa sai hoặc giãi bày hoàn cảnh bất khả kháng.',
            competencyInsight: 'Thiếu sự thẳng thắn chân thành trong đối thoại trực diện.'
          }
        ]
      }
    ],
    bonusChallenge: {
      title: 'Thử thách mở rộng: Tạo dựng tâm lý an toàn trong nhóm (Psychological Safety)',
      scenario: 'Một bạn thành viên mới rụt rè đưa ra một ý tưởng nghe có vẻ khá ngây ngô và khác biệt, một bạn khác trong nhóm khẽ cười khẩy.',
      question: 'Hành động nhanh nào của bạn sẽ bảo vệ được tinh thần sáng tạo của nhóm?',
      options: [
        {
          id: 'bonus-team-a',
          label: 'Ngay lập tức mỉm cười khuyến khích bạn nói tiếp, đặt câu hỏi đào sâu: "Góc nhìn này lạ đấy, bạn có thể nói rõ hơn vì sao bạn nghĩ đến ý đó không?"',
          scoreWeight: 5,
          isOptimal: true,
          reasoning: 'Hành động nhỏ nhưng thể hiện tố chất lãnh đạo phụng sự vĩ đại! Thiết lập vùng an toàn tâm lý giúp mọi thành viên dám thử sai và tự tin đóng góp chất xám.',
          competencyInsight: 'Khả năng kiến tạo văn hóa tôn trọng và khích lệ trong tập thể.'
        },
        {
          id: 'bonus-team-b',
          label: 'Đổi chủ đề thật nhanh để bạn ấy đỡ ngượng ngùng.',
          scoreWeight: 3,
          isOptimal: false,
          reasoning: 'Dù có ý tốt nhưng vô tình xác nhận rằng ý tưởng đó là điều đáng xấu hổ cần che giấu.',
          competencyInsight: 'Cần chuyển hóa tình huống thành cơ hội học hỏi thay vì né tránh.'
        }
      ]
    }
  },

  {
    id: 'organization-planning',
    order: 7,
    title: 'Tổ chức & Lập kế hoạch',
    shortTag: 'Kế hoạch & Quản trị',
    iconName: 'CalendarCheck2',
    accentColor: 'violet',
    badgeColor: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-300',
    durationMinutes: '4 - 6 phút',
    tagline: 'Lập kế hoạch tổ chức sự kiện Tri ân Thầy Cô 20/11 cho khối 10',
    description: 'Ứng dụng ma trận ưu tiên Eisenhower, sơ đồ tiến độ công việc và kế hoạch dự phòng quản trị rủi ro phát sinh.',
    realWorldContext: 'Khối 10 được giao chủ trì Lễ tri ân các thầy cô nhân ngày Nhà giáo Việt Nam tại hội trường lớn với 400 người tham dự.',
    coreCompetencies: [
      'Ma trận quản lý thứ tự ưu tiên (Eisenhower Matrix)',
      'Lập tiến độ thời gian và đường găng công việc (Critical Path Timeline)',
      'Quản trị rủi ro và xây dựng kịch bản dự phòng (Risk Contingency Planning)'
    ],
    steps: [
      {
        id: 'plan-step-1',
        stepNumber: 1,
        title: 'Phân loại công việc theo Ma trận Eisenhower (Khẩn cấp vs Quan trọng)',
        scenario: 'Trước sự kiện 1 tuần, có 4 đầu việc ập đến cùng lúc: (1) Gửi thư mời chính thức đến thầy cô và ban giám hiệu; (2) Chọn bài hát nền mở đầu sự kiện; (3) Loa hội trường bị rè cần kỹ thuật viên sửa gấp; (4) Tự tay vẽ 100 tấm thiệp lưu niệm cá nhân hóa.',
        instruction: 'Đầu việc nào thuộc nhóm "Khẩn cấp & Quan trọng nhất" cần xử lý ngay đầu tiên?',
        type: 'single-choice',
        options: [
          {
            id: 'eisen-a',
            label: 'Xử lý loa hội trường bị rè (Hệ thống âm thanh hỏng sẽ làm hỏng toàn bộ buổi lễ) & Phát thư mời chính thức.',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Rất chính xác! Âm thanh hội trường và thư mời là yếu tố sống còn (không có âm thanh thì không thể tiến hành lễ, không có thư mời thì khách mời không sắp xếp được lịch). Cần xử lý ngay trước mắt.',
            competencyInsight: 'Tư duy phân loại ưu tiên sắc bén, không bị phân tán bởi các chi tiết phụ trợ.'
          },
          {
            id: 'eisen-b',
            label: 'Tập trung toàn lực vẽ 100 tấm thiệp vì đó là tấm lòng của học sinh.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Vẽ thiệp rất ý nghĩa nhưng nếu âm thanh rè và khách mời không nhận được thư mời thì ý nghĩa đó sẽ bị gián đoạn.',
            competencyInsight: 'Dễ bị cuốn vào công việc tỉ mỉ nhiều cảm xúc mà quên đi những trụ cột cốt lõi của sự kiện.'
          },
          {
            id: 'eisen-c',
            label: 'Ngồi nghe thử 20 bài hát nền suốt cả buổi sáng để chọn bài hay nhất.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Đây là việc không khẩn cấp và mức độ quan trọng trung bình, có thể giao việc hoặc ủy quyền nhanh trong 15 phút.',
            competencyInsight: 'Lãng phí tài nguyên thời gian vàng vào công việc thứ yếu.'
          }
        ]
      },
      {
        id: 'plan-step-2',
        stepNumber: 2,
        title: 'Thiết kế dòng thời gian tiến độ (Timeline & Milestone)',
        scenario: 'Lễ 20/11 diễn ra vào sáng thứ Bảy. Bạn cần sắp xếp các mốc kiểm tra (Checkpoints) từ thứ Hai đến thứ Sáu để đảm bảo không bị "nước đến chân mới nhảy".',
        instruction: 'Lộ trình kiểm soát tiến độ nào khoa học nhất?',
        type: 'single-choice',
        options: [
          {
            id: 'time-a',
            label: 'Thứ Ba: Chốt kịch bản MC & danh sách hoa quà ➔ Thứ Tư: Duyệt khớp âm thanh ánh sáng lần 1 ➔ Thứ Năm: Chạy thử tổng duyệt (Rehearsal) ➔ Thứ Sáu: Trang trí hội trường & kiểm kê dự phòng.',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Lộ trình bài bản và chuẩn chỉnh! Phân bổ các mốc theo nguyên lý tuần tự: chốt khung nội dung trước, ráp nối kỹ thuật, tổng duyệt toàn bộ quy trình và dành ngày cuối cùng để kiểm tra hoàn thiện, giảm thiểu stress.',
            competencyInsight: 'Năng lực tư duy dòng chảy công việc (Workflow Sequencing) và kiểm soát mốc quan trọng.'
          },
          {
            id: 'time-b',
            label: 'Cứ để các tổ tự làm, tối thứ Sáu tập hợp lại chạy thử 1 lần thâu đêm là xong.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Rủi ro cực lớn! Nếu thứ Sáu phát hiện thiếu đạo cụ hoặc sai sót âm thanh thì đêm muộn sẽ không còn thời gian khắc phục, gây kiệt sức cho cả đội ngũ.',
            competencyInsight: 'Tư duy chủ quan thiếu kiểm soát cột mốc trung gian.'
          },
          {
            id: 'time-c',
            label: 'Mỗi ngày bắt toàn bộ các bạn đến tập dượt đủ 5 tiếng từ thứ Hai đến thứ Sáu.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Gây lãng phí thời gian học chính khóa của học sinh và tạo sự mệt mỏi ức chế không cần thiết.',
            competencyInsight: 'Cần cân đối chi phí thời gian với hiệu suất đạt được.'
          }
        ]
      },
      {
        id: 'plan-step-3',
        stepNumber: 3,
        title: 'Lập kịch bản dự phòng rủi ro (Risk Contingency Plan)',
        scenario: 'Trước giờ diễn ra 30 phút, một cơn mưa dông lớn bất ngờ ập đến làm mất điện lưới toàn trường, và bạn MC chính bị sốt xuất huyết đột ngột không thể đến được.',
        instruction: 'Phản ứng của một nhà tổ chức chuyên nghiệp trong tình huống này là gì?',
        type: 'single-choice',
        options: [
          {
            id: 'risk-a',
            label: 'Kích hoạt Kịch bản B: Khởi động máy phát điện dự phòng đã liên hệ trước với bác bảo vệ; chuyển kịch bản MC có ghi chú rõ ràng cho bạn MC dự khuyết (đã cùng tập ở buổi tổng duyệt).',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Bản lĩnh quản trị rủi ro xuất sắc! Mọi sự cố lớn đều đã được lường trước và chuẩn bị sẵn nguồn lực thay thế (backup generator & substitute MC), giúp sự kiện diễn ra trơn tru mà khán giả hầu như không nhận ra sự cố.',
            competencyInsight: 'Tư duy đón đầu rủi ro (Proactive Risk Management) và khả năng giữ bình tĩnh lãnh đạo trong khủng hoảng.'
          },
          {
            id: 'risk-b',
            label: 'Thông báo hủy bỏ sự kiện và xin lỗi toàn thể thầy cô.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Đầu hàng quá sớm trước khó khăn mà không kích hoạt các phương án ứng phó tại chỗ.',
            competencyInsight: 'Thiếu sức bật phục hồi (Resilience) khi đối diện biến cố bất ngờ.'
          },
          {
            id: 'risk-c',
            label: 'Đẩy một bạn bất kỳ ngồi dưới khán đài lên cầm mic đọc chay trong bóng tối.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Gây bối rối cho bạn học sinh và làm giảm tính trang trọng cần có của buổi lễ tri ân.',
            competencyInsight: 'Xử lý tình huống bột phát thiếu sự chuẩn bị kịch bản nền tảng.'
          }
        ]
      }
    ],
    bonusChallenge: {
      title: 'Thử thách mở rộng: Quản lý năng lượng & Hậu cần sau sự kiện',
      scenario: 'Sau khi sự kiện thành công vang dội, hội trường vắng bóng người nhưng rác và đạo cụ ngổn ngang. Hầu hết các bạn đều mệt lả và muốn ra về ngay.',
      question: 'Người làm tổ chức sẽ điều hành khâu "hậu trường kết thúc" như thế nào?',
      options: [
        {
          id: 'bonus-plan-a',
          label: 'Đã phân công trước một ca trực dọn dẹp riêng luân phiên (kèm bánh nước ngọt động viên), cùng chụp tấm ảnh kỷ niệm và gửi lời cảm ơn ngay trong 15 phút sau đó.',
          scoreWeight: 5,
          isOptimal: true,
          reasoning: 'Tư duy chu đáo trọn vẹn từ đầu đến cuối! Sự kiện chỉ thực sự thành công khi khâu hoàn trả mặt bằng ngăn nắp và tinh thần đồng đội được nuôi dưỡng bằng sự quan tâm ấm áp.',
          competencyInsight: 'Văn hóa trách nhiệm trọn vẹn (Accountability) và năng lực chăm sóc đội ngũ.'
        },
        {
          id: 'bonus-plan-b',
          label: 'Để lại toàn bộ cho các cô lao công của trường dọn vì học sinh đã bỏ công tổ chức rồi.',
          scoreWeight: 1,
          isOptimal: false,
          reasoning: 'Thiếu ý thức trách nhiệm và tôn trọng công sức của nhân viên nhà trường.',
          competencyInsight: 'Cần bồi đắp thái độ sống tử tế và trách nhiệm cộng đồng.'
        }
      ]
    }
  },

  {
    id: 'empathy-support',
    order: 8,
    title: 'Thấu hiểu & Hỗ trợ người khác',
    shortTag: 'Thấu cảm & Nâng đỡ',
    iconName: 'HeartHandshake',
    accentColor: 'rose',
    badgeColor: 'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-950/60 dark:text-pink-300',
    durationMinutes: '3 - 5 phút',
    tagline: 'Đồng hành cùng người bạn mới chuyển trường & Nghệ thuật nâng đỡ cảm xúc',
    description: 'Thực hành phân biệt thấu cảm và thương hại, nhận diện ngôn ngữ cơ thể, lắng nghe không phán xét và thiết kế hành động hỗ trợ tế nhị.',
    realWorldContext: 'Một bạn học sinh mới vừa chuyển từ tỉnh khác vào lớp 10 của bạn. Giờ ra chơi, bạn ấy thường ngồi lặng lẽ một mình ở góc lớp, nét mặt đăm chiêu lo lắng.',
    coreCompetencies: [
      'Nhận diện cảm xúc ẩn giấu & phi ngôn ngữ (Emotional Literacy)',
      'Thấu cảm không phán xét (Non-judgmental Empathy)',
      'Hành động hỗ trợ vi mô tế nhị (Micro-support Actions)'
    ],
    steps: [
      {
        id: 'emp-step-1',
        stepNumber: 1,
        title: 'Nhận diện tín hiệu tâm lý và mở đầu tiếp cận tế nhị',
        scenario: 'Bạn quan sát thấy bạn mới thường cúi đầu lướt điện thoại mỗi khi các nhóm khác tụ tập cười đùa, đôi tay nắm chặt gấu áo. Nếu bạn đường đột kéo cả đám bạn ùa lại hỏi han vồ vập, bạn mới có thể cảm thấy ngợp và bối rối.',
        instruction: 'Cách tiếp cận nào thể hiện sự tinh tế và ấm áp nhất?',
        type: 'single-choice',
        options: [
          {
            id: 'open-a',
            label: 'Đến ngồi bên cạnh một cách tự nhiên, mỉm cười nhẹ nhàng và chia sẻ điều đơn giản: "Chào bạn, mình là Minh. Căn-tin trường mình có món bánh mì que ngon lắm, lát ra chơi mình cùng đi ăn thử không?"',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Rất ấm áp và tâm lý! Lời rủ rê bình dị không đặt nặng kỳ vọng, tạo ra một không gian kết nối tự nhiên, an toàn mà không biến người bạn mới thành tâm điểm bị dòm ngó.',
            competencyInsight: 'Trí thông minh xúc cảm (EQ) nhạy bén và khả năng tạo dựng lòng tin ban đầu.'
          },
          {
            id: 'open-b',
            label: 'Đứng trước lớp gọi to: "Cả lớp ơi lại đây xem bạn mới nè, bạn ấy nhìn có vẻ buồn bã cô đơn quá kìa!"',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Làm người bạn mới rơi vào cảm giác xấu hổ và bị biến thành đối tượng thương hại trước tập thể.',
            competencyInsight: 'Thiếu sự tế nhị trong việc bảo vệ ranh giới tâm lý cá nhân.'
          },
          {
            id: 'open-c',
            label: 'Không làm gì cả vì nghĩ rằng nếu bạn ấy muốn kết bạn thì bạn ấy sẽ tự bắt chuyện trước.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Người mới chuyển trường thường chịu áp lực rụt rè và sợ bị từ chối, sự chủ động mở lòng của bạn chính là chiếc cầu nối quý giá.',
            competencyInsight: 'Cần phát huy tinh thần chủ động sẻ chia trong cộng đồng.'
          }
        ]
      },
      {
        id: 'emp-step-2',
        stepNumber: 2,
        title: 'Lắng nghe chân thành khi bạn trải lòng về áp lực học tập',
        scenario: 'Sau vài ngày, bạn mới tâm sự: "Chương trình học ở đây nhanh quá, bài kiểm tra Toán hôm qua mình bị điểm kém. Mình cảm thấy mình vô dụng và sợ làm bố mẹ thất vọng..."',
        instruction: 'Câu phản hồi nào thể hiện sự Thấu cảm (Empathy) thực sự thay vì Đưa ra lời khuyên sáo rỗng?',
        type: 'single-choice',
        options: [
          {
            id: 'listen-a',
            label: '"Mình hiểu cảm giác lo lắng của bạn lúc này, chuyển sang môi trường mới với cách dạy mới là một thử thách rất lớn với bất kỳ ai. Bị điểm kém một bài không có nghĩa bạn vô dụng đâu. Mình luôn ở đây sẵn sàng cùng bạn xem lại những bài tập chưa hiểu nhé."',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Sự thấu cảm chuẩn mực và chân thành tuyệt đối! Công nhận cảm xúc (Validate emotion), bình thường hóa áp lực thích nghi để giải tỏa mặc cảm tội lỗi, và trao đi sự đồng hành vô điều kiện.',
            competencyInsight: 'Khả năng chữa lành tâm lý bằng ngôn từ và sự hiện diện cảm xúc ấm áp.'
          },
          {
            id: 'listen-b',
            label: '"Có gì đâu mà buồn, điểm kém thì lần sau học chăm lên là được, than vãn cũng không giải quyết được gì."',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Gạt phăng cảm xúc của người khác bằng sự lý trí lạnh lùng (Toxic positivity), khiến người đối thoại cảm thấy không được thấu hiểu và đóng chặt cửa lòng.',
            competencyInsight: 'Có xu hướng phủ nhận cảm xúc của người khác bằng lời khuyên lý trí giáo điều.'
          },
          {
            id: 'listen-c',
            label: '"Ôi dào, bạn bị điểm 4 hả? Mình còn bị điểm 3 đây này, có ai thèm sợ bố mẹ đâu!"',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Cướp diễn đàn cảm xúc của bạn (Conversational narcissism) và chuyển trọng tâm về bản thân, biến nỗi buồn thành cuộc thi xem ai tệ hơn.',
            competencyInsight: 'Cần tập trung trọn vẹn vào trải nghiệm của người đang chia sẻ.'
          }
        ]
      },
      {
        id: 'emp-step-3',
        stepNumber: 3,
        title: 'Thiết kế hành động hỗ trợ vi mô tế nhị (Micro-Support Actions)',
        scenario: 'Để giúp người bạn mới thực sự hòa nhập vào đời sống tập thể của lớp 10 mà không thấy mình là "gánh nặng", bạn muốn mời bạn tham gia một hoạt động chung.',
        instruction: 'Hành động nào giúp bạn mới cảm thấy bản thân có giá trị và được chào đón nhất?',
        type: 'single-choice',
        options: [
          {
            id: 'act-a',
            label: 'Khám phá sở thích của bạn (ví dụ bạn thích chụp ảnh) và mời bạn cùng phụ trách lưu giữ khoảnh khắc cho trang tin chi đoàn lớp: "Nhóm mình đang cần một bạn có mắt thẩm mỹ như bạn để chụp ảnh cho sự kiện tuần tới, bạn giúp tụi mình nhé!"',
            scoreWeight: 5,
            isOptimal: true,
            reasoning: 'Chiến lược trao quyền (Empowerment) xuất sắc! Biến người cần giúp đỡ thành người đóng góp giá trị cho tập thể, khôi phục niềm tin vào bản thân và tạo cơ hội kết nối tự nhiên nhất.',
            competencyInsight: 'Năng lực tạo động lực nội tại và gắn kết cộng đồng giàu lòng trắc ẩn.'
          },
          {
            id: 'act-b',
            label: 'Đề nghị lớp trưởng trích quỹ lớp mua cho bạn ấy một món quà cứu trợ đặc biệt.',
            scoreWeight: 2,
            isOptimal: false,
            reasoning: 'Hành động này có thể vô tình làm tổn thương lòng tự trọng của bạn học sinh.',
            competencyInsight: 'Nhầm lẫn giữa lòng tốt với sự thương hại thiếu tế nhị.'
          },
          {
            id: 'act-c',
            label: 'Bắt bạn ấy phải lên biểu diễn văn nghệ trước lớp để mau bớt nhút nhát.',
            scoreWeight: 1,
            isOptimal: false,
            reasoning: 'Ép buộc người hướng nội/rụt rè vào tình huống áp lực cao sẽ phản tác dụng, gây sang chấn tâm lý nhẹ.',
            competencyInsight: 'Cần tôn trọng nhịp điệu thích nghi và tính cách riêng của mỗi người.'
          }
        ]
      }
    ],
    bonusChallenge: {
      title: 'Thử thách mở rộng: Bảo vệ ranh giới cảm xúc của chính mình (Self-Care & Boundaries)',
      scenario: 'Khi hết lòng lắng nghe và hỗ trợ tâm lý cho bạn bè, đôi khi bạn cảm thấy chính bản thân mình cũng bị trĩu nặng năng lượng tiêu cực.',
      question: 'Làm thế nào để trở thành một người bạn hỗ trợ tốt mà không bị kiệt sức cảm xúc (Empathy Burnout)?',
      options: [
        {
          id: 'bonus-emp-a',
          label: 'Biết lắng nghe với lòng trắc ẩn nhưng đồng thời ý thức rõ ranh giới: Mình là người bạn đồng hành chứ không phải nhà trị liệu chuyên nghiệp; khi vấn đề quá nặng cần kết nối bạn với chuyên gia tâm lý học đường hoặc thầy cô.',
          scoreWeight: 5,
          isOptimal: true,
          reasoning: 'Sự trưởng thành tâm lý tuyệt vời! Thấu hiểu sâu sắc rằng chăm sóc chính mình là tiền đề để có thể nâng đỡ người khác một cách bền vững và biết tìm kiếm sự trợ giúp chuyên môn khi cần.',
          competencyInsight: 'Trí tuệ cảm xúc tự nhận thức (Emotional Self-Regulation) và thiết lập ranh giới lành mạnh.'
        },
        {
          id: 'bonus-emp-b',
          label: 'Cố gắng chịu đựng một mình và xem việc gánh hết nỗi buồn của bạn là nghĩa vụ của mình.',
          scoreWeight: 2,
          isOptimal: false,
          reasoning: 'Dễ dẫn đến tình trạng kiệt quệ cảm xúc và suy giảm sức khỏe tinh thần của chính bản thân.',
          competencyInsight: 'Cần phân biệt sự nâng đỡ lành mạnh với việc ôm đồm trách nhiệm quá mức.'
        }
      ]
    }
  }
];

export const GENERAL_COMPETENCY_SUGGESTIONS = [
  'Tư duy logic & giải quyết vấn đề có cấu trúc',
  'Tư duy thuật toán, phân tích hệ thống & công nghệ',
  'Phương pháp nghiên cứu khoa học & suy luận dựa trên bằng chứng',
  'Cảm quan thị giác, tư duy thẩm mỹ & sáng tạo đột phá',
  'Kỹ năng diễn đạt ngôn từ, thuyết trình & truyền cảm hứng',
  'Lắng nghe tích cực, điều phối mâu thuẫn & làm việc nhóm',
  'Kỹ năng lập kế hoạch, quản lý thời gian & dự phòng rủi ro',
  'Trí tuệ cảm xúc (EQ), sự thấu cảm & nâng đỡ người khác'
];

export const NEXT_STEP_ACTIVITY_RECOMMENDATIONS = [
  {
    category: 'STEM & Công nghệ',
    title: 'Tham gia CLB STEM hoặc Dự án Nghiên cứu Khoa học Kỹ thuật THPT',
    description: 'Thử sức lập trình vi điều khiển Arduino, thiết kế mô hình xanh hoặc giải các bài toán logic thực tiễn cùng bạn bè.'
  },
  {
    category: 'Truyền thông & Sáng tạo',
    title: 'Cộng tác viên Ban Truyền thông & Kỷ yếu Đoàn trường',
    description: 'Viết bài cho bản tin phát thanh học đường, chụp ảnh sự kiện hoặc thiết kế ấn phẩm cổ động trên mạng xã hội trường.'
  },
  {
    category: 'Lãnh đạo & Hoạt động Xã hội',
    title: 'Tham gia Ban Tổ chức Dự án Tình nguyện hoặc CLB Tranh biện',
    description: 'Rèn luyện khả năng điều phối sự kiện, lắng nghe thấu cảm, thuyết phục đám đông và gắn kết tập thể vững mạnh.'
  }
];
