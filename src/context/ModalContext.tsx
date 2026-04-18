"use client";
import React, { createContext, useContext, useState } from 'react';
import QuoteModal from '@/components/Modal'; // Modal bileşeninin yolu

// 1. Context tipini tanımlıyoruz
interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal, ModalProvider içinde kullanılmalıdır.");
  return context;
};