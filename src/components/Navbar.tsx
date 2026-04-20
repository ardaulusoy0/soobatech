"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useModal } from "@/context/ModalContext";
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/brand/logo';
const Navbar = () => {
    const { openModal } = useModal();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleMobileQuoteClick = () => {
        setIsOpen(false);
        setTimeout(() => {
            openModal();
        }, 300);
    };

    const navLinks = [
        { name: 'Ana Sayfa', href: '/' },
        { name: 'Hizmetlerimiz', href: '/services' },
        { name: 'Hakkımızda', href: '/about' },
        { name: 'İletişim', href: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full top-0 z-100 transition-all duration-500 ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
                }`}>
                <div className="max-w-7xl mx-auto pl-6 justify-center flex items-center ">
                    <Logo width={100} height={40} className="absolute md:hidden left-0 mx-8 " />
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                {link.name}
                            </Link>
                        ))}

                        <button onClick={openModal} className="bg-slate-900 text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all">
                            Teklif Al
                        </button>
                    </div>

                    <div className="md:hidden z-110 flex items-center justify-end w-full mx-6">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className=" text-slate-900 hover:bg-slate-100 rounded-xl transition-colors outline-none"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 z-105 md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
                <div
                    className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setIsOpen(false)}
                />

                <div className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}>
                    <div
                        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className={`absolute right-0 top-0 py-16 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}>

                        <div className="flex items-center mb-2 justify-between mt-4">
                            <span className="text-xl font-black tracking-tighter text-slate-900">MENU</span>
                            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500">
                                <X className="h-8 w-8 " />
                            </button>
                        </div>
                        <Separator />
                        <nav className="flex my-16 flex-col space-y-8">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-all active:scale-95"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto border-t border-slate-100 pt-8">
                            <button onClick={handleMobileQuoteClick} className="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.98] mb-8">
                                Teklif Al
                            </button>

                            <div className="space-y-1">
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Bize Ulaşın</p>
                                <a href="mailto:info@sooba.tech" className="text-slate-900 font-bold block hover:text-blue-600 transition-colors">
                                    info@sooba.tech
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;