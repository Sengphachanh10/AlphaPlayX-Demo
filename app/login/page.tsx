'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, redirect to home on any login
      router.push(ROUTES.home);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-md">
        <Link 
          href={ROUTES.home}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm uppercase tracking-wide">ກັບຄືນ</span>
        </Link>

        <div className="bg-gray-900/30 border border-white/10 p-8 backdrop-blur-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">
              ເຂົ້າສູ່ລະບົບ
            </h1>
            <p className="text-gray-400 text-sm">
              ຍິນດີຕ້ອນຮັບກັບຄືນ! ກະລຸນາເຂົ້າສູ່ລະບົບ
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-400">
                ອີເມວ
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-white/10 px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-400">
                ລະຫັດຜ່ານ
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-white/10 px-12 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-black/50 border-white/10 text-white focus:ring-white focus:ring-offset-0"
                />
                <span className="text-gray-400">ຈື່ຂ້ອຍໄວ້</span>
              </label>
              <Link
                href={ROUTES.resetPassword}
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                ລືມລະຫັດຜ່ານ?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black py-3 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'ກຳລັງເຂົ້າສູ່ລະບົບ...' : 'ເຂົ້າສູ່ລະບົບ'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-sm text-gray-400">
              ຍັງບໍ່ມີບັນຊີ?{' '}
              <Link
                href={ROUTES.register}
                className="text-white hover:underline font-bold"
              >
                ສ້າງບັນຊີໃໝ່
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

