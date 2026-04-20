"use client";
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ContactForm from './ContactForm';

const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) onClose();
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div
            style={{
                zIndex: 99999999,
                isolation: 'isolate',
                transform: 'translateZ(0)',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh'
            }} className="fixed inset-0 flex items-center justify-center p-4 z-999999">
            <div
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl transition-all duration-300"
                onClick={onClose}
            />

            <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 shadow-2xl z-1000000 border border-white/20 overflow-hidden">

                <button
                    onClick={onClose}
                    className="absolute top-6 right-0 mx-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-1000001"
                >
                    <X className="w-5 h-5 text-slate-500" />
                </button>

                <div className="mb-8">
                    <h2 className="text-3xl font-black text-slate-900 uppercase">
                        Teklif <span className="text-blue-600">Alın.</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-bold mt-2">Hayalinizdeki projeyi birlikte hayata geçirelim.</p>
                </div>

                <div className="relative z-1000002 bg-white">
                    <ContactForm isModal={true} />
                </div>
            </div>
        </div>,
        document.body
    );
};

export default QuoteModal;