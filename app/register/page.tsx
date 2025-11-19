'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('ລະຫັດຜ່ານບໍ່ກົງກັນ');
      return;
    }

    if (formData.password.length < 6) {
      setError('ລະຫັດຜ່ານຕ້ອງມີຢ່າງໜ້ອຍ 6 ຕົວອັກສອນ');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, redirect to home on registration
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
              ສ້າງບັນຊີໃໝ່
            </h1>
            <p className="text-gray-400 text-sm">
              ສ້າງບັນຊີເພື່ອເລີ່ມຕົ້ນຊື້ເກມ
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-400">
                ຊື່
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="ຊື່ຂອງທ່ານ"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-400">
                ອີເມວ
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-400">
                ຢືນຢັນລະຫັດຜ່ານ
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 px-12 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 bg-black/50 border-white/10 text-white focus:ring-white focus:ring-offset-0"
              />
              <label className="text-gray-400">
                ຂ້ອຍຕົກລົງກັບ{' '}
                <Link href={ROUTES.terms} className="text-white hover:underline">
                  ເງື່ອນໄຂການໃຊ້ງານ
                </Link>{' '}
                ແລະ{' '}
                <Link href={ROUTES.privacy} className="text-white hover:underline">
                  ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black py-3 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'ກຳລັງສ້າງບັນຊີ...' : 'ສ້າງບັນຊີ'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-sm text-gray-400">
              ມີບັນຊີແລ້ວ?{' '}
              <Link
                href={ROUTES.login}
                className="text-white hover:underline font-bold"
              >
                ເຂົ້າສູ່ລະບົບ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

