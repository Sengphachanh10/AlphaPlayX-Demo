'use client';

import { Search, Package, Wallet, User, Heart, ShoppingCart, Menu } from 'lucide-react';
import { ViewType } from '@/types';

interface NavbarProps {
  scrolled: boolean;
  currentView: ViewType;
  searchQuery: string;
  wishlistCount: number;
  cartCount: number;
  onSearchChange: (query: string) => void;
  onNavigate: (view: ViewType) => void;
  onCartClick: () => void;
  onWishlistClick: () => void;
}

export default function Navbar({
  scrolled,
  currentView,
  searchQuery,
  wishlistCount,
  cartCount,
  onSearchChange,
  onNavigate,
  onCartClick,
  onWishlistClick
}: NavbarProps) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-xl rounded-sm group-hover:rotate-12 transition-transform">B</div>
            <span className="text-xl font-bold tracking-widest uppercase">BlackMarket</span>
          </div>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 w-full md:max-w-lg focus-within:border-white/50 transition-colors">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="ຄົ້ນຫາເກມ..."
              className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full text-white placeholder-gray-500 outline-none"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap w-full md:w-auto justify-between md:justify-end">
            <button
              className={`relative hover:text-white transition-colors group ${currentView === 'orders' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => onNavigate('orders')}
              title="ປະຫວັດການສັ່ງຊື້"
            >
              <Package size={22} />
            </button>

            <button
              className={`relative hover:text-white transition-colors group ${currentView === 'wallet' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => onNavigate('wallet')}
              title="ກະເປົາເງິນ"
            >
              <Wallet size={22} />
            </button>

            <button
              className={`relative hover:text-white transition-colors group ${currentView === 'profile' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => onNavigate('profile')}
              title="ໂປຣໄຟລ໌"
            >
              <User size={22} />
            </button>

            <div className="hidden md:block h-6 w-px bg-gray-700 mx-2"></div>

            <button
              className="relative hover:text-red-500 transition-colors group"
              onClick={onWishlistClick}
              title="Wishlist"
            >
              <Heart size={22} className={wishlistCount > 0 ? "fill-white text-white group-hover:fill-red-500 group-hover:text-red-500" : ""} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              className="relative hover:text-gray-300 transition-colors"
              onClick={onCartClick}
              title="Cart"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="md:hidden text-gray-400">
              <Menu size={22} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

