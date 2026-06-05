/**
 * projectsData.js
 * Dữ liệu các bài tập thực hành cho môn:
 * "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo"
 */

const projectsData = [
  {
    id: 1,
    title: "Thao tác cơ bản với tệp tin và thư mục",
    category: "kynangso",
    objective:
      "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux)",
    processSummary: `Bước 1: Chuẩn bị vị trí lưu trữ (Mở File Explorer, truy cập ổ đĩa/Documents).
Bước 2: Xây dựng cấu trúc thư mục (Tạo thư mục ThucHanh_[Họ tên] và thư mục con TaiLieu).
Bước 3: Tạo và đổi tên tệp (Tạo GhiChu.txt, đổi thành GhiChuQuanTrong.txt).
Bước 4: Sao chép và di chuyển (Copy/Paste tệp vào TaiLieu, Cut/Paste tệp DiChuyen.txt).
Bước 5: Xóa và khôi phục (Xóa tạm thời, xóa vĩnh viễn bằng Shift+Delete, khôi phục từ Thùng rác).`,
    image: "images/mockups/anhbia1.jpg",
    link: "https://docs.google.com/document/d/1_F1jkeK8MwhQjS4UBsMLW_bAJJTNRQAz/edit?usp=sharing&ouid=114915794782267766966&rtpof=true&sd=true",
  },
  {
    id: 2,
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    category: "kynangso",
    objective:
      "Phát triển kỹ năng tìm kiếm thông tin học thuật hiệu quả trên các cơ sở dữ liệu khoa học uy tín như Google Scholar, Scopus, và PubMed; đồng thời rèn luyện khả năng đánh giá độ tin cậy và tính xác thực của nguồn tài liệu.",
    processSummary: `Bước 1: Xác định đề tài (Chọn một chủ đề nghiên cứu liên quan chặt chẽ đến ngành học).
Bước 2: Tìm kiếm dữ liệu đa nguồn (Khai thác thông tin từ Google Scholar, tạp chí khoa học, sách chuyên khảo và các nguồn internet mở).
Bước 3: Thu thập tài liệu (Tích lũy tối thiểu 10 tài liệu tham khảo chất lượng, bao gồm ít nhất 5 bài báo khoa học chuyên ngành).
Bước 4: Đánh giá mức độ uy tín (Kiểm định nghiêm ngặt từng nguồn dựa trên tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật).
Bước 5: Lập bảng tổng hợp kết quả (Xây dựng bảng hệ thống hóa các tài liệu, kèm theo nhận xét chi tiết và xếp hạng độ tin cậy cuối cùng).`,
    image: "images/mockups/anhbia2.jpg",
    link: "https://docs.google.com/document/d/1sMiUqggWl7hJX09FWNKwH13askDX4CfA/edit?usp=sharing&ouid=114915794782267766966&rtpof=true&sd=true",
  },
  {
    id: 3,
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    category: "ai",
    objective:
      "Học cách xây dựng và tối ưu hóa các câu lệnh (prompt) để khai thác tối đa khả năng của các mô hình ngôn ngữ lớn (LLM) trong các tình huống học tập cụ thể như tóm tắt tài liệu, giải thích khái niệm, và hỗ trợ ôn tập.",
    processSummary: `Bước 1: Lựa chọn tác vụ học tập (Chọn 3 tác vụ phổ biến: tóm tắt tài liệu, giải thích khái niệm phức tạp và thiết kế bộ câu hỏi ôn tập).
Bước 2: Thiết kế prompt đa cấp độ (Xây dựng 3 phiên bản prompt cho mỗi tác vụ: Cơ bản ngắn gọn, Cải tiến chi tiết và Nâng cao áp dụng kỹ thuật Role-prompting, CoT, Few-shot).
Bước 3: Thực nghiệm trên công cụ AI (Chạy thử toàn bộ các phiên bản prompt trên mô hình AI như ChatGPT và tiến hành thu thập kết quả đầu ra).
Bước 4: Đối sánh và phân tích (So sánh trực quan chất lượng phản hồi, đánh giá chuyên sâu lý do cấu trúc prompt này hiệu quả hơn cấu trúc prompt khác).
Bước 5: Tổng hợp bộ quy tắc (Đúc kết các nguyên tắc cốt lõi và mẹo thiết kế câu lệnh tối ưu từ thực tế thử nghiệm để tái sử dụng trong học tập).`,
    image: "images/mockups/anhbia3.jpg",
    link: "https://docs.google.com/document/d/1ddcF8mNCYjTezkYZ3YznjQpEhJeKDW5J/edit?usp=sharing&ouid=114915794782267766966&rtpof=true&sd=true",
  },
  {
    id: 4,
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    category: "kynangso",
    objective:
      "Thành thạo việc sử dụng các nền tảng cộng tác trực tuyến như Google Workspace, Notion, hoặc Trello để lên kế hoạch, phân công nhiệm vụ và theo dõi tiến độ dự án nhóm một cách hiệu quả và có tổ chức.",
    processSummary: `Bước 1: Xác định dự án và vai trò (Tham gia vào một dự án nhóm nhỏ và định hình rõ ràng trách nhiệm, nhiệm vụ của cá nhân).
Bước 2: Thiết lập bộ công cụ cộng tác (Lựa chọn và phối hợp sử dụng ít nhất 3 công cụ trực tuyến thuộc các nhóm: quản lý công việc, soạn thảo, lưu trữ và giao tiếp).
Bước 3: Triển khai công việc cá nhân (Chủ động tương tác thảo luận, tự quản lý tiến độ và trực tiếp đóng góp nội dung trên tài liệu chung liên tục trong 1 tuần).
Bước 4: Sắp xếp dữ liệu khoa học (Tổ chức, phân loại và lưu trữ hệ thống các tệp tin, tài liệu được phân công phụ trách trên không gian chia sẻ).
Bước 5: Thu thập minh chứng (Chụp ảnh màn hình hiển thị rõ tên tài khoản cá nhân, lịch sử chỉnh sửa và ghi chép nhật ký trải nghiệm thực tế).`,
    image: "images/mockups/anhbia4.jpg",
    link: "https://docs.google.com/document/d/1CoRD5OR0XzshSsUd43yBLWJw3FKKCigW/edit?usp=sharing&ouid=114915794782267766966&rtpof=true&sd=true",
  },
  {
    id: 5,
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    category: "ai",
    objective:
      "Khám phá và ứng dụng các công cụ AI tạo sinh (Generative AI) như ChatGPT, Gemini, hoặc Midjourney để hỗ trợ quá trình sáng tạo nội dung văn bản, hình ảnh và bài thuyết trình phục vụ mục đích học tập và nghiên cứu.",
    processSummary: `Bước 1: Lựa chọn dự án sáng tạo (Xác định một hình thức sản phẩm cụ thể như bài thuyết trình, bài viết, infographic hoặc video ngắn).
Bước 2: Phối hợp đa công cụ AI (Sử dụng kết hợp ít nhất 3 công cụ AI tạo sinh chuyên biệt để hỗ trợ tạo văn bản, hình ảnh và thiết kế đồ họa).
Bước 3: Ghi nhận tiến trình thực nghiệm (Lưu lại toàn bộ câu lệnh prompt, kết quả đầu ra, cách tinh chỉnh dữ liệu và đối sánh chất lượng giữa các AI).
Bước 4: Tổng hòa sản phẩm cuối cùng (Tích hợp khéo léo các tài nguyên do AI tạo ra với tư duy phản biện và đóng góp sáng tạo độc lập của bản thân).
Bước 5: Đánh giá và phân tích chuyên sâu (Viết báo cáo nhìn nhận ưu-nhược điểm của AI, sự chuyển dịch trong quy trình làm việc và các yếu tố đạo đức đi kèm).`,
    image: "images/mockups/anhbia5.jpg",
    link: "https://drive.google.com/drive/folders/1cWIYpHeRMjBX2cxfmYIQINOV4LJDUl96?usp=drive_link",
  },
  {
    id: 6,
    title: "Sử dụng AI có trách nhiệm trong học tập & nghiên cứu",
    category: "ai",
    objective:
      "Nhận thức và vận dụng các nguyên tắc đạo đức trong việc sử dụng AI, bao gồm tránh đạo văn, kiểm chứng thông tin, tôn trọng bản quyền, và hiểu rõ giới hạn của AI để trở thành người dùng công nghệ có trách nhiệm và tư duy phản biện.",
    processSummary: `Bước 1: Nghiên cứu quy định học thuật (Tìm hiểu chi tiết các chính sách và quy định của nhà trường về phạm vi sử dụng AI trong học tập).
Bước 2: Triển khai tác vụ có kiểm soát (Thực hiện một nhiệm vụ học tập dưới sự hỗ trợ của AI, lưu lại prompt, kết quả và minh chứng trích dẫn minh bạch).
Bước 3: Phân tích đạo đức khoa học (Đánh giá sâu sắc ranh giới giữa hỗ trợ hợp lý và gian lận học thuật, quyền sở hữu trí tuệ và hệ quả đến tư duy).
Bước 4: Thiết lập bộ nguyên tắc cá nhân (Xây dựng hệ thống từ 5 đến 7 quy tắc cốt lõi giúp tự điều chỉnh hành vi sử dụng công nghệ có trách nhiệm).
Bước 5: Trực quan hóa thông điệp (Thiết kế và hoàn thiện một infographic truyền tải thông điệp "Sử dụng AI có trách nhiệm trong học thuật").`,
    image: "images/mockups/anhbia6.jpg",
    link: "https://drive.google.com/drive/folders/1eIAvAixqsqUmEx6OGQuacYvV5Kolqrb2?usp=drive_link",
  },
];

export default projectsData;