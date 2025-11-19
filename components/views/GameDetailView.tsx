'use client';

import { ArrowLeft, ShoppingCart, Heart, Star, Share2, Cpu, Monitor, Gamepad2 } from 'lucide-react';
import { Game } from '@/types';
import React from 'react';

interface GameDetailViewProps {
  game: Game;
  wishlist: Game[];
  onNavigate: (view: 'home') => void;
  onAddToCart: (game: Game) => void;
  onToggleWishlist: (game: Game) => void;
}

export default function GameDetailView({
  game,
  wishlist,
  onNavigate,
  onAddToCart,
  onToggleWishlist
}: GameDetailViewProps) {
  const isInWishlist = wishlist.find(w => w.id === game.id);

  return (
    <div className="animate-fade-in min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase font-bold tracking-wide text-sm"
        >
          <ArrowLeft size={16} /> ກັບຄືນສູ່ຮ້ານຄ້າ
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div
            className="w-full h-64 sm:h-80 lg:h-[500px] bg-gray-900 rounded-sm flex items-center justify-center border border-white/10 relative overflow-hidden group"
            style={{ background: game.image }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="transform scale-150 transition-transform duration-700 group-hover:scale-125">
              {React.cloneElement(game.icon, { size: 120, className: "text-white opacity-80" })}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-32 bg-white/5 border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer"
              >
                <Monitor size={32} className="text-gray-600" />
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-wide flex items-center gap-2">
              <Share2 size={20} /> ກ່ຽວກັບເກມນີ້
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">{game.longDescription}</p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold uppercase mb-6 tracking-wide flex items-center gap-2">
              <Cpu size={20} /> ຄວາມຕ້ອງການຂອງລະບົບ
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white/5 p-4 border border-white/10">
                <div className="text-gray-500 text-xs uppercase font-bold mb-1">CPU</div>
                <div className="font-mono">{game.specs.cpu}</div>
              </div>
              <div className="bg-white/5 p-4 border border-white/10">
                <div className="text-gray-500 text-xs uppercase font-bold mb-1">Memory</div>
                <div className="font-mono">{game.specs.ram}</div>
              </div>
              <div className="bg-white/5 p-4 border border-white/10">
                <div className="text-gray-500 text-xs uppercase font-bold mb-1">Graphics</div>
                <div className="font-mono">{game.specs.gpu}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="lg:sticky top-32 bg-[#0f0f0f] border border-white/10 p-6 sm:p-8 space-y-8 shadow-2xl">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">{game.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-400 justify-center lg:justify-start">
                <span className="bg-white/10 px-2 py-1 text-white font-bold uppercase">{game.category}</span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="fill-white text-white" /> {game.rating}/5.0
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 justify-center lg:justify-start">
              <span className="text-4xl font-bold font-mono">
                {game.price === 0 ? "FREE" : `$${game.price}`}
              </span>
              {game.price > 0 && (
                <span className="text-gray-500 line-through text-sm font-mono">
                  ${(game.price * 1.2).toFixed(2)}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onAddToCart(game)}
                className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} /> ເພີ່ມໃສ່ກະຕ່າ
              </button>
              <button
                onClick={() => onToggleWishlist(game)}
                className={`w-full border border-white/20 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 ${
                  isInWishlist ? 'bg-white/10' : ''
                }`}
              >
                <Heart size={20} className={isInWishlist ? "fill-white" : ""} />
                {isInWishlist ? "ຢູ່ໃນ Wishlist ແລ້ວ" : "ເພີ່ມໃສ່ Wishlist"}
              </button>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>ຜູ້ພັດທະນາ</span>
                <span className="text-white">BlackStudio Inc.</span>
              </div>
              <div className="flex justify-between">
                <span>ວັນທີວາງຈຳໜ່າຍ</span>
                <span className="text-white">19 Nov 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Platform</span>
                <span className="text-white flex gap-2">
                  <Monitor size={16} /> <Gamepad2 size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

