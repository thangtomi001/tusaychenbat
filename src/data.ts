export type ProductCategory = 'family' | 'industrial';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  capacity: string;
  image: string;
  dimensions: string;
  specs: string[];
  badges?: string[];
  originalPrice?: number;
  salePrice?: number;
}

export const products: Product[] = [
  {
    id: '138l',
    name: 'Tủ Sấy Chén Bát ZTP 138L',
    category: 'family',
    capacity: '138 Lít',
    image: '/images/138l.png',
    dimensions: '44 x 37 x 103 cm',
    originalPrice: 4500000,
    salePrice: 3600000,
    specs: [
      'Công suất: 600W',
      'Ngăn trên: 70°C + Ozone',
      'Ngăn dưới: 125°C',
      'Sức chứa: 40 - 60 món',
      'Phù hợp: 4-8 người',
    ],
    badges: ['Bán Chạy Nhất', '2 Ngăn Tiện Lợi'],
  },
  {
    id: '168l',
    name: 'Tủ Sấy Chén Bát ZTP 168L',
    category: 'family',
    capacity: '168 Lít',
    image: '/images/168l.png',
    dimensions: '42 x 37 x 120 cm',
    originalPrice: 5500000,
    salePrice: 4200000,
    specs: [
      'Công suất: 600W',
      'Ngăn trên: 70°C + Ozone',
      'Ngăn dưới: 125°C',
      'Sức chứa: 50 - 70 món',
      'Phù hợp: 6-10 người',
    ],
  },
  {
    id: '280l',
    name: 'Tủ Sấy Chén Bát ZTP 280L',
    category: 'family',
    capacity: '280 Lít',
    image: '/images/280l.png',
    dimensions: '48 x 40 x 133 cm',
    originalPrice: 6500000,
    salePrice: 5800000,
    specs: [
      'Công suất: 600W',
      'Ngăn trên: 70°C + Ozone',
      'Ngăn dưới: 125°C',
      'Sức chứa: 90 - 120 món',
      'Phù hợp: 10-15 người',
    ],
    badges: ['Dung Tích Lớn'],
  },
  {
    id: '380l',
    name: 'Tủ Sấy Chén Bát ZTP 380L',
    category: 'family',
    capacity: '380 Lít',
    image: '/images/380l.png',
    dimensions: '57 x 49 x 160 cm',
    originalPrice: 8500000,
    salePrice: 7800000,
    specs: [
      'Công suất: 900W',
      'Ngăn trên: 70°C + Ozone',
      'Ngăn dưới: 125°C',
      'Sức chứa: 150 - 180 món',
      'Phù hợp: 15-20 người',
    ],
    badges: ['Dung Tích Lớn'],
  },
  {
    id: '450l',
    name: 'Tủ Sấy Chén Bát 450L',
    category: 'industrial',
    capacity: '450 Lít',
    image: '/images/450l.png',
    dimensions: '57 x 44 x 165 cm',
    originalPrice: 12000000,
    salePrice: 7500000,
    specs: [
      'Nhiệt độ: 30 - 125°C',
      'Công suất: 600W',
      'Sức chứa bát/đĩa: 60-80 bát, 50-70 đĩa',
      'Bảo hành: 2 Năm',
    ],
    badges: ['Bán Chạy Trong Tầm Giá', 'Thiết Kế Sang Trọng'],
  },
  {
    id: '800l',
    name: 'Tủ Sấy Chén Bát 800L',
    category: 'industrial',
    capacity: '800 Lít',
    image: '/images/800l.png',
    dimensions: '80 x 38 x 160 cm',
    originalPrice: 16000000,
    salePrice: 8600000,
    specs: [
      'Nhiệt độ: 30 - 125°C',
      'Công suất: 600W',
      'Sức chứa bát/đĩa: 100-140 bát, 80-120 đĩa',
      'Bảo hành: 2 Năm',
    ],
    badges: ['Nhà Hàng, Quán Ăn'],
  },
  {
    id: '1000l',
    name: 'Tủ Sấy Chén Bát 1000L',
    category: 'industrial',
    capacity: '1000 Lít',
    image: '/images/1000l.png',
    dimensions: '116 x 48 x 165 cm',
    originalPrice: 20000000,
    salePrice: 10500000,
    specs: [
      'Nhiệt độ: 30 - 125°C',
      'Công suất: 1200W',
      'Sức chứa bát/đĩa: 120-160 bát, 100-140 đĩa',
      'Bảo hành: 2 Năm',
    ],
    badges: ['Khu Công Nghiệp, Trường Học'],
  },
];
