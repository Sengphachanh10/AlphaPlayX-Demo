'use client';

import { X, ShoppingCart } from 'lucide-react';
import { Game } from '@/types';
import React from 'react';

interface CartModalProps {
  isOpen: boolean;
  cart: Game[];
  totalAmount: number;
  onClose: () => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

export default function CartModal({ isOpen, cart, totalAmount, onClose, onRemove, onCheckout }: CartModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-[#0a0a0a] border-l border-white/20 h-full shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black">
          <h2 className="text-xl font-bold uppercase tracking-wider flex items-center gap-2">
            <ShoppingCart size={20} /> ກະຕ່າສິນຄ້າ
          </h2>
          <button onClick={onClose} className="hover:rotate-90 transition-transform">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white/5 p-4 border border-white/5 hover:border-white/30 transition-colors">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-800" style={{ background: item.image }}>
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm uppercase">{item.title}</h4>
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold">{item.price === 0 ? "FREE" : `$${item.price}`}</span>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-xs text-red-400 hover:text-red-300 uppercase underline"
                  >
                    ລົບອອກ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-white/10 bg-black">
          <div className="flex justify-between mb-4 text-lg font-bold">
            <span>ລວມທັງໝົດ</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={cart.length === 0}
            onClick={onCheckout}
          >
            ດຳເນີນການຊຳລະເງິນ
          </button>
        </div>
      </div>
    </div>
  );
}

