'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<'email' | 'reset' | 'success'>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('reset');
    }, 1500);
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('ລະຫັດຜ່ານບໍ່ກົງກັນ');
      return;
    }

    if (password.length < 6) {
      setError('ລະຫັດຜ່ານຕ້ອງມີຢ່າງໜ້ອຍ 6 ຕົວອັກສອນ');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-gray-900/30 border border-white/10 p-8 backdrop-blur-sm text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter mb-4">
              ສຳເລັດແລ້ວ!
            </h1>
            <p className="text-gray-400 mb-8">
              ລະຫັດຜ່ານຂອງທ່ານຖືກປ່ຽນແປງແລ້ວ. ທ່ານສາມາດເຂົ້າສູ່ລະບົບໄດ້ແລ້ວ.
            </p>
            <Link
              href={ROUTES.login}
              className="inline-block w-full bg-white text-black py-3 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors text-center"
            >
              ເຂົ້າສູ່ລະບົບ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-md">
        <Link 
          href={ROUTES.login}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm uppercase tracking-wide">ກັບຄືນ</span>
        </Link>

        <div className="bg-gray-900/30 border border-white/10 p-8 backdrop-blur-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">
              {step === 'email' ? 'ລືມລະຫັດຜ່ານ' : 'ປ່ຽນລະຫັດຜ່ານ'}
            </h1>
            <p className="text-gray-400 text-sm">
              {step === 'email'
                ? 'ກະລຸນາປ້ອນອີເມວຂອງທ່ານເພື່ອຮັບລະຫັດຢືນຢັນ'
                : 'ກະລຸນາປ້ອນລະຫັດຢືນຢັນແລະລະຫັດຜ່ານໃໝ່'}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 text-red-400 text-sm">
              {error}
            </div>
          )}

          {step === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black py-3 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'ກຳລັງສົ່ງ...' : 'ສົ່ງລະຫັດຢືນຢັນ'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetSubmit} className="space-y-6">
              <div>
                <label htmlFor="code" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-400">
                  ລະຫັດຢືນຢັນ
                </label>
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors text-center text-2xl tracking-widest"
                  placeholder="000000"
                  maxLength={6}
                />
                <p className="text-xs text-gray-500 mt-2">
                  ກະລຸນາກວດເບິ່ງອີເມວຂອງທ່ານເພື່ອຮັບລະຫັດຢືນຢັນ
                </p>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-400">
                  ລະຫັດຜ່ານໃໝ່
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

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-400">
                  ຢືນຢັນລະຫັດຜ່ານ
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black py-3 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'ກຳລັງປ່ຽນລະຫັດຜ່ານ...' : 'ປ່ຽນລະຫັດຜ່ານ'}
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-sm text-gray-400">
              ຈື່ລະຫັດຜ່ານແລ້ວ?{' '}
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

