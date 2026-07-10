import React, { useState } from 'react';
import { products, Product } from './data';
import { 
  ShieldCheck, 
  Wind, 
  Zap, 
  Menu, 
  PhoneCall, 
  MessageCircle, 
  ChevronRight, 
  CheckCircle2, 
  Thermometer, 
  Settings2, 
  Info 
} from 'lucide-react';
import { motion } from 'motion/react';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-brand-blue" />
          <span className="font-bold text-xl tracking-tight text-brand-blue">ZTP VIỆT NAM</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Công nghệ</a>
          <a href="#products-family" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Dòng Gia Đình</a>
          <a href="#products-industrial" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Dòng Công Nghiệp</a>
          <a href="#specs" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Thông số</a>
        </nav>
        <div className="hidden md:flex items-center">
          <a href="tel:0369333910" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-light transition-colors">
            <PhoneCall className="w-4 h-4 mr-2" />
            0369 333 910
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative bg-white overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-sm font-semibold mb-6 border border-blue-100">
            <ShieldCheck className="w-4 h-4 mr-2" />
            Giải pháp diệt khuẩn toàn diện
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            TỦ SẤY CHÉN BÁT <span className="text-brand-blue">ZTP</span>
            <br />
            HƠN 3000 NHÀ HÀNG ĐÃ SỬ DỤNG
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Sấy khô hoàn toàn, khử khuẩn bằng nhiệt độ cao 125°C kết hợp Ozone. Bảo vệ sức khỏe gia đình và nâng tầm không gian bếp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products-family" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-light rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Xem Các Dòng Máy
            </a>
            <a href="tel:0369333910" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-blue bg-white border-2 border-brand-blue rounded-full hover:bg-gray-50 transition-all">
              Nhận Báo Giá Ngay
            </a>
          </div>
          
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Bảo hành 24 tháng
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Miễn phí giao hàng
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-lg mx-auto mt-12 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-brand-blue to-blue-200 rounded-[2rem] blur opacity-20"></div>
            
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
              <img 
                src="/images/hero.png" 
                alt="ZTP Dish Dryer Showcase" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-10 -left-6 md:-left-10 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl z-20 border border-white/50 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-xl shadow-inner">
                  <Thermometer className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Nhiệt độ kép</p>
                  <p className="text-xl font-extrabold text-gray-900 leading-none">125°C + O₃</p>
                </div>
              </div>
            </div>
            
            {/* Another decorative badge */}
            <div className="absolute bottom-10 -right-6 bg-brand-blue text-white p-4 rounded-2xl shadow-xl z-20 border-4 border-white">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-blue-300" />
                <div>
                  <p className="text-sm font-bold">HÀNG CHÍNH HÃNG</p>
                  <p className="text-xs text-blue-200">Độ bền vượt trội</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CoreTech = () => {
  const features = [
    { icon: Thermometer, title: 'Nhiệt Độ Cao 125°C', desc: 'Diệt sạch 99.9% vi khuẩn, nấm mốc cứng đầu. Giúp bát đĩa khô ráo tuyệt đối.' },
    { icon: Wind, title: 'Khử Khuẩn Ozone', desc: 'Công nghệ tuần hoàn khí Ozone loại bỏ mùi hôi, chống ẩm mốc cho đồ nhựa, gỗ.' },
    { icon: Zap, title: 'Tiết Kiệm Điện Năng', desc: 'Cảm biến nhiệt thông minh tự ngắt khi đạt chuẩn, tối ưu hóa năng lượng.' },
    { icon: ShieldCheck, title: 'Inox Cao Cấp', desc: 'Thiết kế Inox chống gỉ sét, kính cường lực chịu nhiệt cao, an toàn tuyệt đối.' }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">4 CÔNG NGHỆ CỐT LÕI</h2>
          <p className="mt-4 text-lg text-gray-600">Được trang bị những công nghệ tiên tiến nhất, ZTP mang đến sự an tâm tuyệt đối cho từng bữa ăn của gia đình bạn.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-brand-blue">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-brand-blue/30 hover:shadow-xl transition-all group"
  >
    <div className="relative aspect-[4/5] bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
      {product.badges && product.badges.length > 0 && (
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.badges.map(badge => (
            <span key={badge} className="px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded-full uppercase tracking-wider">
              {badge}
            </span>
          ))}
        </div>
      )}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
        <span className="px-3 py-1 bg-white/80 backdrop-blur text-gray-900 text-xs font-bold border border-gray-200 rounded-full shadow-sm">
          {product.capacity}
        </span>
        {product.originalPrice && product.salePrice && (
          <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-sm animate-pulse">
            Giảm {Math.round((product.originalPrice - product.salePrice) / product.originalPrice * 100)}%
          </span>
        )}
      </div>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      
      {(product.originalPrice || product.salePrice) && (
        <div className="mb-4 flex items-end gap-2">
          {product.salePrice && (
            <span className="text-2xl font-extrabold text-red-600">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through mb-1">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice)}
            </span>
          )}
        </div>
      )}

      <ul className="space-y-3 mb-6 flex-grow">
        {product.specs.map((spec, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 text-sm">{spec}</span>
          </li>
        ))}
        <li className="flex items-start">
          <Settings2 className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
          <span className="text-gray-500 text-sm">Kích thước: {product.dimensions}</span>
        </li>
      </ul>
      <a href="tel:0369333910" className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-brand-blue text-brand-blue font-bold rounded-full hover:bg-brand-blue hover:text-white transition-colors group-hover:bg-brand-blue group-hover:text-white">
        Nhận Báo Giá
        <ChevronRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  </motion.div>
);

const ProductSection = () => {
  const familyProducts = products.filter(p => p.category === 'family');
  const industrialProducts = products.filter(p => p.category === 'industrial');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Family Section */}
        <div id="products-family" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">DÒNG GIA ĐÌNH</h2>
              <p className="text-lg text-gray-600">Dung tích từ 138L - 380L. Thiết kế thanh lịch, chia 2 ngăn sấy độc lập chuyên biệt cho từng loại chất liệu.</p>
            </div>
            <div className="inline-flex items-center text-brand-blue font-semibold bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <Info className="w-4 h-4 mr-2" /> 2 Ngăn Độc Lập
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>

        {/* Industrial Section */}
        <div id="products-industrial">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">DÒNG CÔNG NGHIỆP & NHÀ HÀNG</h2>
              <p className="text-lg text-gray-600">Dung tích lớn 450L - 1000L. Công suất mạnh mẽ, đáp ứng nhu cầu sấy số lượng lớn và liên tục.</p>
            </div>
             <div className="inline-flex items-center text-orange-600 font-semibold bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
              <Zap className="w-4 h-4 mr-2" /> Công Suất Lớn
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrialProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>

      </div>
    </section>
  );
};

const ComparisonTable = () => (
  <section id="specs" className="py-20 bg-gray-50 border-t border-gray-200">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Bảng Thông Số Kỹ Thuật</h2>
        <p className="mt-4 text-gray-600">So sánh chi tiết các mẫu mã để lựa chọn sản phẩm phù hợp nhất.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-900 border-b border-gray-200">
              <th className="p-4 font-bold">Model</th>
              <th className="p-4 font-bold">Dung tích</th>
              <th className="p-4 font-bold">Kích thước (R x S x C)</th>
              <th className="p-4 font-bold">Công suất</th>
              <th className="p-4 font-bold">Sức chứa tham khảo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map(p => (
              <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 font-semibold text-gray-900 whitespace-nowrap">{p.name}</td>
                <td className="p-4 text-gray-600 whitespace-nowrap">{p.capacity}</td>
                <td className="p-4 text-gray-600 whitespace-nowrap">{p.dimensions}</td>
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {p.specs.find(s => s.includes('Công suất'))?.split(': ')[1] || '600W'}
                </td>
                <td className="p-4 text-gray-600">
                  {p.category === 'family' 
                    ? p.specs.find(s => s.includes('Sức chứa'))?.split(': ')[1] 
                    : p.specs.find(s => s.includes('Sức chứa'))?.split(': ')[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-blue text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-8 w-8 text-white" />
            <span className="font-bold text-xl tracking-tight">ZTP VIỆT NAM</span>
          </div>
          <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
            Giải pháp làm sạch và bảo vệ sức khỏe gia đình với công nghệ sấy và diệt khuẩn chuẩn Đức hàng đầu.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Liên Hệ</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Hotline: <a href="tel:0369333910" className="text-white font-bold hover:underline">0369 333 910</a></li>
            <li>Hà Nội: 1136 Giải Phóng</li>
            <li>Hồ Chí Minh: 366 Cộng Hòa</li>
            <li>Bảo hành: 24 Tháng Toàn Quốc</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Chính Sách</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Giao hàng miễn phí</li>
            <li>Lắp đặt tận nơi</li>
            <li>Cam kết hàng chính hãng</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ZTP Việt Nam. All rights reserved.
      </div>
    </div>
  </footer>
);

const StickyContact = () => (
  <div className="fixed bottom-0 left-0 right-0 p-4 z-50 pointer-events-none md:hidden">
    <div className="flex justify-between items-center gap-4 pointer-events-auto max-w-md mx-auto">
      <a 
        href="https://zalo.me/0369333910" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 bg-blue-500 text-white p-3 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-500/30"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Chat Zalo
      </a>
      <a 
        href="tel:0369333910" 
        className="flex-1 bg-green-500 text-white p-3 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-green-500/30"
      >
        <PhoneCall className="w-5 h-5 mr-2" />
        Gọi Ngay
      </a>
    </div>
  </div>
);

const RealImages = () => {
  const images = [
    '/images/real-1.png',
    '/images/real-2.png',
    '/images/real-3.png',
    '/images/real-4.png',
    '/images/real-5.png',
    '/images/real-6.png',
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Hình Ảnh Thực Tế</h2>
          <p className="mt-4 text-gray-600">Hình ảnh tủ sấy chén bát ZTP thực tế tại kho và khi được lắp đặt tại nhà khách hàng.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm"
            >
              <img 
                src={src} 
                alt={`Hình ảnh thực tế ZTP ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/600x600/f3f4f6/a1a1aa?text=ZTP+Image+${idx + 1}`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <CoreTech />
        <ComparisonTable />
        <RealImages />
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}

