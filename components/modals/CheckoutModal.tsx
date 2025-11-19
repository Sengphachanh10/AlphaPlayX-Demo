'use client';

import { ArrowLeft, CreditCard, CheckCircle } from 'lucide-react';
import { Game, PaymentStep } from '@/types';

interface CheckoutModalProps {
  isOpen: boolean;
  cart: Game[];
  totalAmount: number;
  paymentStep: PaymentStep;
  onClose: () => void;
  onPaymentSubmit: (e: React.FormEvent) => void;
  onViewOrders: () => void;
}

export default function CheckoutModal({
  isOpen,
  cart,
  totalAmount,
  paymentStep,
  onClose,
  onPaymentSubmit,
  onViewOrders
}: CheckoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-white/20 pb-6">
          <button onClick={onClose} className="mr-6 hover:bg-white hover:text-black p-2 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-black uppercase tracking-widest">ການຊຳລະເງິນ</h1>
        </div>

        {paymentStep === 'form' ? (
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CreditCard size={20} /> ຂໍ້ມູນບັດເຄຣດິດ
              </h2>
              <form onSubmit={onPaymentSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">ຊື່ບົນບັດ</label>
                  <input
                    type="text"
                    required
                    placeholder="JOHN DOE"
                    className="w-full bg-transparent border border-white/20 p-4 text-white focus:border-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">ໝາຍເລກບັດ</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-transparent border border-white/20 p-4 text-white focus:border-white outline-none transition-colors"
                      maxLength={19}
                    />
                    <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-500 mb-2">ວັນໝົດອາຍຸ</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      className="w-full bg-transparent border border-white/20 p-4 text-white focus:border-white outline-none transition-colors"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-500 mb-2">CVV</label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      className="w-full bg-transparent border border-white/20 p-4 text-white focus:border-white outline-none transition-colors"
                      maxLength={3}
                    />
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform active:scale-95"
                  >
                    ຢືນຢັນການຊຳລະເງິນ ${totalAmount.toFixed(2)}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white/5 p-8 border border-white/10 h-fit">
              <h2 className="text-xl font-bold mb-6 uppercase">ລາຍການສັ່ງຊື້</h2>
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">{item.title}</span>
                    <span className="font-mono">{item.price === 0 ? "FREE" : `$${item.price}`}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/20 pt-4 space-y-2">
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/20 mt-4">
                  <span>ລວມທັງໝົດ</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mb-8">
              <CheckCircle size={48} />
            </div>
            <h2 className="text-4xl font-black uppercase mb-4">ການຊຳລະເງິນສຳເລັດ!</h2>
            <button
              onClick={onViewOrders}
              className="bg-white text-black px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors mt-8"
            >
              ເບິ່ງປະຫວັດການສັ່ງຊື້
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

