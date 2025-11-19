'use client';

import { ShoppingCart, Heart, Star, CheckCircle, Ghost, Filter, ArrowUpDown } from 'lucide-react';
import { Game, ViewType, SortOption } from '@/types';
import { CATEGORIES } from '@/data/mockData';
import React from 'react';

interface HomeViewProps {
  filteredGames: Game[];
  activeCategory: string;
  searchQuery: string;
  sortOption: SortOption;
  wishlist: Game[];
  cart: Game[];
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: SortOption) => void;
  onGameClick: (game: Game) => void;
  onAddToCart: (game: Game) => void;
  onToggleWishlist: (game: Game) => void;
}

export default function HomeView({
  filteredGames,
  activeCategory,
  sortOption,
  wishlist,
  cart,
  onCategoryChange,
  onSortChange,
  onGameClick,
  onAddToCart,
  onToggleWishlist
}: HomeViewProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 border-b border-white/10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="container mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs tracking-widest mb-4 text-gray-400 uppercase">
            Featured Game
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
            The Void <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Walker</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg mb-8 font-light px-2">
            ສຳຜັດປະສົບການເກມ Action RPG ຮູບແບບໃໝ່ໃນໂລກທີ່ບໍ່ມີສີສັນ.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors w-full sm:w-auto">
              ຊື້ເລີຍ $59.99
            </button>
            <button className="border border-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all w-full sm:w-auto">
              ເບິ່ງຕົວຢ່າງ
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 border border-white rounded-full mix-blend-overlay animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-dashed border-white rounded-full mix-blend-overlay"></div>
        </div>
      </section>

      {/* Marketplace */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-white/10 pb-6 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all duration-300 rounded-sm ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-gray-400 border-gray-800 hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm uppercase font-bold">
              <Filter size={16} />
              <span>ຈັດລຽງ:</span>
            </div>
            <div className="relative group w-full sm:w-auto">
              <select
                value={sortOption}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="appearance-none bg-black border border-gray-700 text-white text-sm font-bold uppercase py-2 pl-4 pr-10 rounded-sm focus:outline-none focus:border-white cursor-pointer hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                <option value="recommended">ແນະນຳ</option>
                <option value="price-asc">ລາຄາ: ຕ່ຳ - ສູງ</option>
                <option value="price-desc">ລາຄາ: ສູງ - ຕ່ຳ</option>
                <option value="rating">ຄະແນນສູງສຸດ</option>
              </select>
              <ArrowUpDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group relative bg-gray-900/30 border border-white/10 hover:border-white transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
              onClick={() => onGameClick(game)}
            >
              <div className="h-60 sm:h-64 w-full flex items-center justify-center overflow-hidden relative" style={{ background: game.image }}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {game.icon}
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(game);
                    }}
                    className={`p-2 rounded-full backdrop-blur-md border border-white/20 transition-all ${
                      wishlist.find(w => w.id === game.id)
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-black/50 text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    <Heart size={18} className={wishlist.find(w => w.id === game.id) ? "fill-white" : ""} />
                  </button>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(game);
                  }}
                  className="absolute bottom-0 left-0 w-full bg-white text-black p-4 font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-200 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} /> ເພີ່ມໃສ່ກະຕ່າ
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold uppercase tracking-wide">{game.title}</h3>
                  <div className="flex items-center text-xs font-bold bg-white/10 px-2 py-1">
                    <Star size={12} className="mr-1 fill-white" /> {game.rating}
                  </div>
                </div>
                <p className="text-xs text-gray-500 uppercase mb-3 tracking-widest">{game.category}</p>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-1">{game.description}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="text-lg font-bold font-mono">{game.price === 0 ? "FREE" : `$${game.price}`}</span>
                  {cart.find(i => i.id === game.id) && (
                    <span className="text-xs text-gray-400 uppercase font-bold flex items-center gap-1">
                      <CheckCircle size={12} /> ຢູ່ໃນກະຕ່າ
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-20 text-gray-500 border border-dashed border-gray-800 rounded-lg mt-8 px-4">
            <Ghost size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg font-light">ບໍ່ພົບເກມທີ່ທ່ານຄົ້ນຫາ...</p>
            <button
              onClick={() => {
                onCategoryChange('All');
              }}
              className="mt-4 text-sm underline hover:text-white"
            >
              ລ້າງການຄົ້ນຫາ
            </button>
          </div>
        )}
      </div>
    </>
  );
}

