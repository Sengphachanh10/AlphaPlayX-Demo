'use client';

import { X, Heart } from 'lucide-react';
import { Game } from '@/types';
import React from 'react';

interface WishlistModalProps {
  isOpen: boolean;
  wishlist: Game[];
  onClose: () => void;
  onRemove: (game: Game) => void;
  onAddToCart: (game: Game) => void;
}

export default function WishlistModal({ isOpen, wishlist, onClose, onRemove, onAddToCart }: WishlistModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-[#0a0a0a] border-l border-white/20 h-full shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black">
          <h2 className="text-xl font-bold uppercase tracking-wider flex items-center gap-2">
            <Heart size={20} className="fill-white" /> ສິ່ງທີ່ຢາກໄດ້
          </h2>
          <button onClick={onClose} className="hover:rotate-90 transition-transform">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlist.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white/5 p-4 border border-white/5 hover:border-white/30 transition-colors group">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-800" style={{ background: item.image }}>
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm uppercase">{item.title}</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-mono text-sm">{item.price === 0 ? "FREE" : `$${item.price}`}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(item);
                        onRemove(item);
                      }}
                      className="text-xs bg-white text-black px-2 py-1 font-bold uppercase hover:bg-gray-200"
                    >
                      ຍ້າຍໄປກະຕ່າ
                    </button>
                    <button
                      onClick={() => onRemove(item)}
                      className="text-xs text-gray-500 hover:text-white p-1"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

