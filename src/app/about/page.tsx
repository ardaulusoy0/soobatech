"use client";
import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const AboutPage = () => {
  return (
    <div className='flex flex-col w-full bg-[#f8fafc] pt-32 pb-24'>
      <AnimateOnScroll>
        <section className='px-6 md:px-32 max-w-7xl mx-auto mb-32'>
          <div className="max-w-4xl text-center">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-12">
              Geleceği <br /> <span className="text-blue-600">Tasarlıyoruz.</span>
            </h1>
            <div className="space-y-8 text-center text-slate-600 text-xl leading-relaxed font-medium">
              <p>
                SOOBA olarak markaların dijital dünyada sürdürülebilir bir başarı elde etmesi için teknoloji, tasarım ve stratejiyi bir araya getiriyoruz. Her projeye özel yaklaşımımızla, işinizi sadece büyütmekle kalmıyor, aynı zamanda geleceğe hazırlıyoruz.
              </p>
              <p>
                Ekibimizle birlikte işletmelerin dijital dönüşüm süreçlerini yönetiyor, veri odaklı kararlar ve yaratıcı çözümlerle rekabette öne çıkmalarını sağlıyoruz. Bizim için her iş, uzun vadeli bir iş ortaklığının başlangıcıdır.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="px-6 md:px-32 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 pt-16">
            {[
              {
                title: "Vizyonumuz",
                desc: "Dijital dünyada markaların büyümesini hızlandıran, yenilikçi ve sürdürülebilir çözümler sunarak global ölçekte tercih edilen bir teknoloji ve kreatif ajans olmak."
              },
              {
                title: "Misyonumuz",
                desc: "Müşterilerimizin hedeflerine ulaşmasını sağlayan, ölçülebilir ve etkili dijital stratejiler geliştirerek işlerine değer katmak ve uzun vadeli başarılarına katkıda bulunmak."
              },
              {
                title: "Değerlerimiz",
                desc: "Şeffaflık, yenilikçilik ve kalite odaklı çalışma prensibimizle her projede maksimum fayda sağlamayı hedefleriz. İş ortaklarımızın başarısını kendi başarımız olarak görürüz."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4 group">
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="px-6 md:px-32 max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Dijital Dönüşüm Partneriniz</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              İşinizi dijital dünyada bir adım öne taşımak için doğru yerdesiniz. Strateji, yazılım ve tasarımı bir araya getirerek markanızı büyütüyor, sizi hedef kitlenizle en etkili şekilde buluşturuyoruz.
            </p>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default AboutPage;