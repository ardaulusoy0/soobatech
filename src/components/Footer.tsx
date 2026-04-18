import React from 'react';
import { Logo } from '@/components/brand/logo';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-20">
            <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Logo width={120} height={40} />
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
                                <p>info@soobatech.com</p>
                                <p>+90 533 128 85 69</p>
                                <p>+90 501 933 26 03</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 border-t border-slate-100 text-slate-400 text-xs text-center">
                    © 2026 SOOBA Tech. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    )
}

export default Footer
