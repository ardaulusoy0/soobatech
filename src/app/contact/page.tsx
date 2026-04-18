"use client";

import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {

  return (
    <div className='flex flex-col w-full bg-[#f8fafc] pt-32'>
      <AnimateOnScroll>
        <section className="px-6 md:px-32 max-w-7xl mx-auto pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-[3.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-white">

            <div className="space-y-12">
              <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">
                  Bize <span className="text-blue-600">Ulaşın.</span>
                </h1>
                <p className="text-slate-500 text-lg">
                  Projeniz için heyecanlıyız! Formu doldurun, en geç 24 saat içinde size dönüş yapalım.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, text: "info@sooba.tech", label: "Email" },
                  { icon: Phone, text: "+90 533 128 85 69", label: "Telefon" },
                  { icon: Phone, text: "+90 501 933 26 03", label: "Telefon" },
                  { icon: MapPin, text: "Gaziosmanpaşa, İstanbul/Türkiye", label: "Adres" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-slate-900 font-bold">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactPage;