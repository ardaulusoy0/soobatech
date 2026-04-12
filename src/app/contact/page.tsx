"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const ContactPage = () => {
  return (
    <div className='flex flex-col w-full bg-[#f8fafc] pt-32'>
      <AnimateOnScroll>
        <section className="px-6 md:px-32 max-w-7xl mx-auto pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-[3.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-white">
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">Bize <span className="text-blue-600">Ulaşın.</span></h1>
                <p className="text-slate-500 text-lg">Projeniz için heyecanlıyız! Formu doldurun, en geç 24 saat içinde size dönüş yapalım.</p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, text: "hello@sooba.tech", label: "Email" },
                  { icon: Phone, text: "+90 123 456 78 90", label: "Telefon" },
                  { icon: MapPin, text: "Gaziosmanpaşa , İstanbul/Türkiye", label: "Ofis" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">{item.label}</p>
                      <p className="text-slate-900 font-bold">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Adınız Soyadınız</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors font-medium" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Email Adresiniz</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors font-medium" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Mesajınız</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors font-medium resize-none" placeholder="Projenizden bahsedin..." />
              </div>
              <button className="w-full group bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-3">
                Mesajı Gönder
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactPage;