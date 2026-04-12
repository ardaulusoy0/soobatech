"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Ana Sayfa', href: '/' },
        { name: 'Hizmetlerimiz', href: '/services' },
        { name: 'Hakkımızda', href: '/about' },
        { name: 'İletişim', href: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full top-0 z-100 transition-all duration-500 ${
                scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
            }`}>
                <div className="max-w-7xl mx-auto justify-center flex items-center ">
                    
                   
                    {/* <div className="shrink-0 z-110 flex justify-start">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900">
                            <Image src="/soobanew.png" loading="eager" alt="SOOBA Logo" width={100} height={150} className="inline-block mr-2" />
                        </Link>
                    </div> */}

                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-slate-900 text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all">
                            Teklif Al
                        </button>
                    </div>

                    <div className="md:hidden z-110 pr-8"> 
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors outline-none"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 z-105 md:hidden transition-all duration-500 ${
                isOpen ? 'visible' : 'invisible'
            }`}>
                <div 
                    className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={() => setIsOpen(false)}
                />

                <div className={`absolute p-4 mx-8 right-0 top-0 h-screen w-[60%] bg-white shadow-2xl transition-transform duration-500 ease-in-out  pt-32 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col justify-between space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-black text-slate-900 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-slate-100">
                            <button className="w-full bg-blue-600 text-white px-7 py-3 rounded-2xl font-black text-md shadow-xl shadow-blue-600/20">
                                Teklif Al
                            </button>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-12 left-8">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Bize Ulaşın</p>
                        <p className="text-slate-900 font-bold mt-2 ">info@sooba.tech</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;