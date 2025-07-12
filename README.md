# Edward Portfolio

## Giới thiệu

Đây là dự án portfolio cá nhân của Edward, một Front End Developer, được xây dựng bằng Next.js và các công nghệ hiện đại. Portfolio này trình bày thông tin cá nhân, kỹ năng, kinh nghiệm làm việc và các dự án đã thực hiện.

## Công nghệ sử dụng

- **Framework**: Next.js 15.2.4
- **UI Libraries**: 
  - Tailwind CSS
  - Radix UI
  - Shadcn UI
  - Framer Motion
  - Embla Carousel
  - Swiper
- **Ngôn ngữ**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion

## Tính năng

- **Trang chủ** với banner và thông tin cá nhân
- **Phần kỹ năng** hiển thị các công nghệ thành thạo
- **Phần kinh nghiệm** hiển thị quá trình làm việc
- **Phần dự án** hiển thị các dự án đã thực hiện với carousel 3D
- **Tải CV** trực tiếp từ trang web
- **Hiệu ứng UI** đẹp mắt với các animation từ thư viện magicui

## Cấu trúc dự án

```
├── app/                  # Next.js app directory
│   ├── carousel3d-demo/  # Demo cho carousel 3D
│   ├── projects/         # Trang dự án
│   ├── page.tsx          # Trang chủ
│   └── layout.tsx        # Layout chính
├── assets/              # Tài nguyên (hình ảnh, icons)
├── components/          # Các component React
│   ├── Banner.tsx       # Banner chính
│   ├── Experience.tsx   # Hiển thị kinh nghiệm
│   ├── InfoComponents.tsx # Thông tin cá nhân
│   ├── Stacking.tsx     # Hiển thị kỹ năng
│   ├── magicui/         # Các component UI với hiệu ứng đặc biệt
│   ├── projects/        # Components liên quan đến dự án
│   └── ui/              # Các component UI cơ bản
├── data/                # Dữ liệu (projects, experience)
├── hooks/               # Custom hooks
├── lib/                 # Utility functions
├── model/               # Type definitions
└── public/              # Static files
    └── work/            # Hình ảnh dự án
```

## Các dự án nổi bật

- **King Coffee Ecommerce**: Website chính thức của King Coffee, giới thiệu sản phẩm cao cấp, văn hóa cà phê Việt Nam và các tùy chọn mua sắm toàn cầu.
- **Lê Hoàng Diệp Thảo TNI**: Trang web giới thiệu hành trình của doanh nhân Lê Hoàng Diệp Thảo, tầm nhìn và nỗ lực nâng cao ngành cà phê Việt Nam.
- **Distribution King Coffee**: Tập trung vào cơ hội nhượng quyền và hợp tác với King Coffee, cung cấp mô hình kinh doanh và hỗ trợ mở rộng toàn cầu.
- **Novadreams Tickets**: Nền tảng đặt vé cho các trải nghiệm NovaDreams, cung cấp dịch vụ mua vé liền mạch cho các hoạt động giải trí, giải trí và văn hóa.

## Cài đặt và chạy dự án

### Yêu cầu

- Node.js (phiên bản mới nhất)
- npm hoặc pnpm

### Các bước cài đặt

1. Clone repository
```bash
git clone <repository-url>
cd edward-portfolio
```

2. Cài đặt dependencies
```bash
pnpm install
# hoặc
npm install
```

3. Chạy môi trường development
```bash
pnpm dev
# hoặc
npm run dev
```

4. Build cho production
```bash
pnpm build
# hoặc
npm run build
```

5. Chạy phiên bản production
```bash
pnpm start
# hoặc
npm start
```

Dự án sẽ chạy tại http://localhost:3005

## Liên hệ

- Email: phatht2911@gmail.com
- GitHub: [Marious-11](https://github.com/Marious-11)
- Điện thoại: +84 916 215 180
- Địa chỉ: Quận 8, TP.HCM