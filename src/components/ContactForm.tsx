"use client";
import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

const ContactForm = ({ isModal = false }: { isModal?: boolean }) => {
    const [formData, setFormData] = useState({ fullName: '', email: '', message: '', honeyPot: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.honeyPot) return setStatus('success');
        setStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ fullName: '', email: '', message: '', honeyPot: '' });
            } else { setStatus('error'); }
        } catch (error) { setStatus('error'); }
    };

    return (
        <div className="relative w-full">
            <form
                onSubmit={handleSubmit}
                className={`transition-all duration-500 ${isModal ? 'p-0 bg-transparent' : 'bg-slate-50 p-8 md:p-12 rounded-[2.5rem]'} 
                ${status === 'success' ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'} space-y-6`}
            >
                <div className="hidden">
                    <input type="text" name="honeyPot" value={formData.honeyPot} onChange={handleChange} autoComplete="off" />
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 ml-2 uppercase ">Adınız Soyadınız</label>
                    <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 transition-all font-medium" placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 ml-2 uppercase ">Email Adresiniz</label>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 transition-all font-medium" placeholder="ornek@mail.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 ml-2 uppercase ">Mesajınız</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={isModal ? 3 : 4} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 transition-all font-medium resize-none" placeholder="Projenizden bahsedin..." />
                </div>

                <button disabled={status === 'loading'} className="w-full bg-blue-600 hover:bg-slate-900 text-white py-5 rounded-2xl font-bold transition-all0 flex items-center justify-center gap-2">
                    {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Mesajı Gönder <Send className="max-sm:hidden w-5 h-5" /></>}
                </button>
            </form>

            {status === 'success' && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center bg-inherit rounded-[2.5rem]">
                    <div className="bg-blue-600 p-4 rounded-full mb-6 shadow-xl shadow-blue-100">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Harika!</h3>
                    <p className="text-slate-500 font-medium max-w-65">
                        Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ContactForm;