"use client";
import React from 'react';
import {
  Layout,
  Smartphone,
  Search,
  Code2,
  Palette,
  Share2,
  ArrowUpRight
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const ServicesPage = () => {
  const services = [
    {
      title: "Web Tasarım & Geliştirme",
      icon: Layout,
      desc: "Kullanıcı odaklı, hızlı ve modern web siteleri geliştiriyoruz. Markanızın dijital vitrini olacak projeleri estetik ve performansla buluşturuyoruz.",
      sub: ["Responsive Tasarım", "SEO Uyumlu Altyapı", "Yüksek Performans"]
    },
    {
      title: "Grafik Tasarım & Marka Kimliği",
      icon: Palette,
      sub: ["Logo & Kurumsal Kimlik", "Sosyal Medya Tasarımları", "Reklam & Banner Tasarımları"],
      desc: "Markanızı rakiplerinizden ayıran, akılda kalıcı ve profesyonel tasarımlar oluşturuyoruz. Logo, kurumsal kimlik ve tüm görsel süreçlerinizi stratejik bir yaklaşımla ele alıyoruz."
    },
    {
      title: "Sosyal Medya Yönetimi",
      icon: Share2,
      sub: ["İçerik Planlama", "Post & Reels Tasarımı", "Reklam Yönetimi"],
      desc: "Markanızın sosyal medyada güçlü bir varlık oluşturmasını sağlıyor, içerik üretimi ve reklam yönetimi ile hedef kitlenizle etkili bir bağ kuruyoruz."
    },
    {
      title: "Mobil Uygulama Çözümleri",
      icon: Smartphone,
      desc: "iOS ve Android platformları için yüksek performanslı mobil uygulamalar geliştiriyor, kullanıcı deneyimini ön planda tutan çözümler sunuyoruz.",
      sub: ["iOS & Android Uygulamalar", "Kullanıcı Deneyimi", "App Store Optimizasyonu"]
    },
    {
      title: "SEO & Dijital Pazarlama",
      icon: Search,
      desc: "Arama motorlarında görünürlüğünüzü artırıyor, doğru hedef kitleye ulaşmanızı sağlayan performans odaklı dijital pazarlama stratejileri oluşturuyoruz.",
      sub: ["Anahtar Kelime Analizi", "Google Ads Yönetimi", "Dönüşüm Optimizasyonu"]
    },
    {
      title: "Özel Yazılım Projeleri",
      icon: Code2,
      desc: "İş süreçlerinize özel yazılım çözümleri geliştirerek operasyonel verimliliğinizi artırıyor ve dijital dönüşümünüzü hızlandırıyoruz.",
      sub: ["Özel CRM Sistemleri", "API Entegrasyonları", "Ölçeklenebilir Altyapı"]
    }
  ];

  return (
    <div className='flex flex-col w-full  pt-32 pb-24'>
      <AnimateOnScroll>
        <div className="px-6 md:px-32 max-w-7xl mx-auto mb-24">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
            Neler <span className="text-blue-600">Sunuyoruz?</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-3xl text-center">
            Markanızın dijital dünyada büyümesi için strateji, tasarım ve teknolojiyi bir araya getiriyoruz. İhtiyacınıza özel çözümlerle işinizi bir üst seviyeye taşıyoruz.
          </p>
        </div>
      </AnimateOnScroll>

      <section className="px-6 md:px-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <AnimateOnScroll key={i}>
            <div className="group bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-blue-600/10 transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <ArrowUpRight className="w-8 h-8 text-slate-200 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                {service.desc}
              </p>
              <ul className="space-y-3 pt-6 border-t border-slate-50">
                {service.sub.map((li, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;