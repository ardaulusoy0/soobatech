"use client";
import React from 'react';
import Image from 'next/image';
import { MoveRight, CheckCircle2, Users, Briefcase, Trophy, Lightbulb, Code2, Palette, Globe, BarChart3, PencilRuler, Megaphone } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Page = () => {
  return (
    <div className='flex flex-col w-full bg-[#f8fafc] relative'>

      <div
        className="fixed inset-0 z-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <AnimateOnScroll>
        <section className='grid grid-cols-1 lg:grid-cols-2 p-6 md:p-16 md:py-32 gap-12 min-h-screen items-center max-w-7xl mx-auto relative pt-24 z-10'>
          <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-blue-100 rounded-full blur-[120px] opacity-50 -z-10" />

          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-600 tracking-wider">Dijital Dönüşüm Partneriniz</span>
            </div>

            <h1 className="text-6xl md:text-8xl text-slate-900 ">
              <Image src="/soobanew.png" alt="SOOBA" width={200} height={50} className="inline-block" />
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
              Modern teknoloji ve yaratıcı stratejilerle işinizi dijital dünyada bir adım öne taşıyoruz. Markanızın potansiyelini keşfedin ve küresel pazarda yerinizi alın.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-blue-900/10">
                Hemen Başlayalım
                <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              <button className="px-10 py-4 rounded-2xl font-bold text-lg text-slate-700 hover:bg-slate-200/50 transition-all border border-slate-200">
                Çalışmalarımız
              </button>
            </div>
          </div>

          <div className='relative flex items-center justify-center py-12'>
            <div className="relative flex flex-col gap-6 w-full max-w-md">
              <div className="group bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 flex justify-center items-center bg-slate-100 rounded-2xl mb-4 border border-slate-200">
                  <Lightbulb className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Dijital Strateji</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  Markanızı analiz ederek hedef kitlenize en doğru kanallardan ulaşmanızı sağlayan veri odaklı dijital stratejiler geliştiriyoruz.
                </p>
              </div>

              <div className="group bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-slate-900/20 md:ml-12 hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 flex justify-center items-center bg-white/10 rounded-2xl mb-4 border border-white/10" >
                  <Code2 className="w-7 h-7 text-white" /></div>
                <h3 className="text-xl font-bold text-white">Yazılım & Geliştirme</h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Modern teknolojilerle yüksek performanslı web ve mobil uygulamalar geliştiriyor, iş süreçlerinizi dijitale taşıyoruz.
                </p>
              </div>

              <div className="group bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 flex justify-center items-center bg-slate-100 rounded-2xl mb-4 border border-slate-200">
                  <Palette className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Marka & Tasarım</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  Markanızı öne çıkaran yaratıcı tasarımlar ile güçlü bir görsel kimlik oluşturuyor, kullanıcı deneyimini en üst seviyeye taşıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <div className="w-full bg-white/80 backdrop-blur-sm py-24 border-y border-slate-100 z-10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              {
                label: "Mutlu Müşteri",
                value: "100+",
                Icon: Users
              },
              {
                label: "Tamamlanan Proje",
                value: "100+",
                Icon: Briefcase
              },
              {
                label: "Başarı Oranı",
                value: "%99",
                Icon: Trophy
              }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center space-y-4 group">
                <div className="p-4 bg-blue-50 rounded-2xl group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500 ">
                  <stat.Icon className="w-8 h-8 text-blue-600 transition-colors duration-500 group-hover:text-white" />
                </div>

                <div className="space-y-1">
                  <div className="text-5xl font-black text-slate-900 tracking-tighter ">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 font-bold text-xs  tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      <div className='w-full bg-slate-900 relative z-10'>
        <div
          className="absolute inset-0 z-[-2] opacity-[0.15] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '25px 25px' }}
        />
        <AnimateOnScroll>
          <div className='w-full px-6 md:px-16 py-64 overflow-hidden'>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
            <div className="max-w-7xl mx-auto space-y-24">
              <div className='grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-20'>
                <div className='group'>
                  <h2 className="text-2xl font-bold mb-5 text-white border-l-4 border-blue-600 pl-6">
                    Vizyonumuz
                  </h2>
                  <p className='text-slate-400 text-sm leading-7 pl-7'>
                    Geleceğin dijital dünyasında markaların sürdürülebilir başarı elde etmesini sağlayan yenilikçi çözümler üreten lider bir ajans olmak.
                  </p>
                </div>
                <div className='group'>
                  <h2 className="text-2xl font-bold mb-5 text-white border-l-4 border-blue-600 pl-6">
                    Neler Yapıyoruz?
                  </h2>
                  <p className='text-slate-400 text-sm leading-7 pl-7'>
                    Markaların dijitalde büyümesini sağlayan uçtan uca çözümler sunuyoruz. Yazılım geliştirme, performans pazarlama ve kreatif tasarım süreçlerini tek çatı altında topluyoruz.
                  </p>
                </div>
                <div className='group'>
                  <h2 className="text-2xl font-bold mb-5 text-white border-l-4 border-blue-600 pl-6">
                    Misyonumuz
                  </h2>
                  <p className='text-slate-400 text-sm leading-7 pl-7'>
                    Müşterilerimizin hedeflerine ulaşmasını sağlayan, ölçülebilir ve etkili dijital çözümler sunarak uzun vadeli iş ortaklıkları kurmak.
                  </p>
                </div>

              </div>

              <div className="space-y-16 text-center">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-white">Hizmetlerimiz</h2>
                  <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                  <div className="bg-slate-800/30 border border-slate-800 p-10 rounded-4xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 text-left">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-xl mb-6 flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
                      <Globe className="w-6 h-6 text-blue-500 group-hover:scale-110 transition" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Web Geliştirme</h3>
                    <ul className="space-y-3">
                      {["Kurumsal Web Siteleri", "E-Ticaret Sistemleri", "Özel Yazılım Çözümleri"].map((li, idx) => (
                        <li key={idx} className="text-slate-400 text-xs flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-800/30 border border-slate-800 p-10 rounded-4xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 text-left">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-xl mb-6 flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
                      <BarChart3 className="w-6 h-6 text-blue-500 group-hover:scale-110 transition" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Dijital Pazarlama</h3>
                    <ul className="space-y-3">
                      {["SEO Optimizasyonu", "Google & Meta Reklamları", "Performans Analizi"].map((li, idx) => (
                        <li key={idx} className="text-slate-400 text-xs flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-800/30 border border-slate-800 p-10 rounded-4xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 text-left">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-xl mb-6 flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
                      <PencilRuler className="w-6 h-6 text-blue-500 group-hover:scale-110 transition" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">UI/UX Tasarım</h3>
                    <ul className="space-y-3">
                      {["Kullanıcı Deneyimi", "Arayüz Tasarımı", "Prototipleme"].map((li, idx) => (
                        <li key={idx} className="text-slate-400 text-xs flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-800/30 border border-slate-800 p-10 rounded-4xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 text-left">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-xl mb-6 flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
                      <Megaphone className="w-6 h-6 text-blue-500 group-hover:scale-110 transition" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Marka Yönetimi</h3>
                    <ul className="space-y-3">
                      {["Kurumsal Kimlik", "Sosyal Medya Yönetimi", "İçerik Üretimi"].map((li, idx) => (
                        <li key={idx} className="text-slate-400 text-xs flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll>
        <section className="py-24 max-w-7xl px-8 w-full mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="bg-blue-600 w-full h-full rounded-[3rem] rotate-3 absolute inset-0 -z-10 opacity-10" />
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl bg-slate-100 h-125">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Ekip" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">İşinizi Büyütmek İçin <span className="text-blue-600">Doğru Yerdesiniz.</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed">Modern teknolojileri kreatif fikirlerle birleştiriyoruz.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Stratejik Dijital Planlama", "Veri Odaklı Büyüme", "Yüksek Dönüşüm Oranları", "Sürekli Optimizasyon"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800 font-bold bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-blue-600 w-5 h-5" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <div className="w-full px-6 md:px-16 pb-24 z-10">
          <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-500/40">
            <div
              className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
              style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 2px)`, backgroundSize: '25px 25px' }}
            />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 relative z-20 tracking-tighter">Dijitaldeki başarınızı şansa bırakmayın.</h2>
            <button className="group bg-white text-blue-600 px-14 py-6 rounded-2xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all relative z-20 flex items-center gap-3 mx-auto">
              Hadi Konuşalım
              <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </AnimateOnScroll>

      <footer className="w-full bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-20">
        <div
          className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '25px 25px' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <span className="text-2xl font-black tracking-tighter text-slate-900">SOO<span className="text-blue-600">BA</span></span>
              <p className="text-slate-500 text-sm leading-relaxed">
                İşinizi dijital dünyada büyütmek için yenilikçi çözümler sunan yaratıcı bir ajansız.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900 uppercase text-xs">Kurumsal</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>Hakkımızda</li>
                <li>Hizmetler</li>
                <li>İletişim</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900 uppercase text-xs">Hizmetler</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>Web Geliştirme</li>
                <li>Mobil Uygulama</li>
                <li>SEO & Pazarlama</li>
                <li>Grafik Tasarım</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 uppercase text-xs">İletişim</h4>
                <div className="space-y-3 text-sm text-slate-500">
                  <p className="font-semibold text-slate-900">İstanbul, Türkiye</p>
                  <p>info@sooba.com</p>
                  <p>+90 555 000 00 00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 text-slate-400 text-xs text-center">
            © 2026 SOOBA Tech. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Page;