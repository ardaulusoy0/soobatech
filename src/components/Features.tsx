import React from 'react';
import {
    Rocket,
    ShieldCheck,
    Zap,
    Headset,
    CheckCircle2,
    MessageSquare
} from 'lucide-react';

const FeaturesSection = () => {
    return (
        <section className="py-24 max-w-7xl px-8 w-full mx-auto z-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                <div className="relative min-h-fit md:min-h-125 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full hidden md:block" />
                    <div className="w-full max-w-90 md:w-90 aspect-square bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/50 relative z-20 p-8 flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                                <Rocket className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                                Hızlı Çözümler,<br />Net Sonuçlar
                            </h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                Projelerinizi en güncel teknoloji yığınları ile optimize ederek hayata geçiriyoruz.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-2xl border border-blue-100 mt-4">
                            <Zap className="text-blue-600 w-4 h-4 fill-blue-600" />
                            <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest text-center w-full">
                                Sistem Aktif: v3.2
                            </span>
                        </div>
                    </div>

                    <div className="relative md:absolute top-0 md:-top-4 right-0 md:z-30 w-full max-w-90 md:w-auto bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-slate-800">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                            <ShieldCheck className="text-blue-400 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Güvenlik</p>
                            <p className="text-sm font-black">%100 Koruma</p>
                        </div>
                    </div>

                    <div className="relative md:absolute bottom-0 md:-bottom-2 left-0 md:z-30 w-full max-w-90 md:w-auto bg-slate-900 p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-slate-700">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                            <Headset className="text-blue-600 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Süreklilik</p>
                            <p className="text-sm font-black text-white">Proje Sonrası Destek</p>
                        </div>
                    </div>
                </div>

                {/* SAĞ TARAF: Metin İçeriği */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <span className="inline-block text-blue-600 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                            Neden SOOBA
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                            İşinizi Geleceğe <br />
                            <span className="text-blue-600">Hazırlıyoruz.</span>
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg">
                            Sadece kod yazmıyoruz; markanızın dijital dünyadaki DNA'sını oluşturuyoruz. Teslimat sonrası süreçte de güvenilir teknoloji ortağınız olmaya devam ediyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                t: "Stratejik Planlama",
                                desc: "Hedef odaklı dijital yol haritası.",
                                icon: <CheckCircle2 className="text-blue-600 w-5 h-5" />
                            },
                            {
                                t: "Veri Odaklı Büyüme",
                                desc: "Rakamlarla kanıtlanmış başarı.",
                                icon: <CheckCircle2 className="text-blue-600 w-5 h-5" />
                            },
                            {
                                t: "Kesintisiz İş Birliği",
                                desc: "Teslimat sonrası teknik danışmanlık.",
                                icon: <MessageSquare className="text-blue-600 w-5 h-5" />
                            },
                            {
                                t: "Sürekli Gelişim",
                                desc: "Değişen teknolojiye hızlı adaptasyon.",
                                icon: <Zap className="text-blue-600 w-5 h-5" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="group p-5 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-500/5">
                                <div className="flex items-center gap-3 mb-2">
                                    {item.icon}
                                    <span className="font-black text-slate-900 text-sm tracking-tight">{item.t}</span>
                                </div>
                                <p className="text-slate-500 text-xs font-medium leading-snug">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;