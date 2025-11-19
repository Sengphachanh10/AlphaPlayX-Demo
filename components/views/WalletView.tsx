'use client';

import { ArrowLeft, Wallet, Plus, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Wallet as WalletType } from '@/types';

interface WalletViewProps {
  wallet: WalletType;
  onNavigate: (view: 'home') => void;
  onTopUp: () => void;
}

export default function WalletView({ wallet, onNavigate, onTopUp }: WalletViewProps) {
  return (
    <div className="animate-fade-in min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center flex-wrap mb-8 gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="hover:bg-white hover:text-black p-2 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-black uppercase tracking-widest flex items-center gap-3 text-center md:text-left">
            <Wallet size={32} /> ກະເປົາເງິນຂອງຂ້ອຍ
          </h1>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] border border-white/20 p-6 sm:p-8 rounded-sm mb-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl text-center md:text-left">
          <div className="w-full">
            <p className="text-gray-400 text-sm uppercase font-bold tracking-widest mb-2">ຍອດເງິນຄົງເຫຼືອ (Balance)</p>
            <h2 className="text-4xl sm:text-5xl font-mono font-bold text-white">${wallet.balance.toFixed(2)}</h2>
          </div>
          <button
            onClick={onTopUp}
            className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-transform active:scale-95 flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <Plus size={20} /> ເຕີມເງິນ (+Credits)
          </button>
        </div>

        {/* Transactions */}
        <h3 className="text-xl font-bold uppercase mb-6 border-b border-white/10 pb-4">
          ປະຫວັດການເຄື່ອນໄຫວ (Transactions)
        </h3>
        <div className="space-y-4">
          {wallet.transactions.map(tx => (
            <div
              key={tx.id}
              className="bg-white/5 border border-white/5 p-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === 'Deposit' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                }`}>
                  {tx.type === 'Deposit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div>
                  <div className="font-bold uppercase text-sm">{tx.type}</div>
                  <div className="text-xs text-gray-500 font-mono">{tx.date} • {tx.id}</div>
                </div>
              </div>
              <div className={`font-mono font-bold text-lg w-full sm:w-auto text-left sm:text-right ${
                tx.type === 'Deposit' ? 'text-green-400' : 'text-white'
              }`}>
                {tx.type === 'Deposit' ? '+' : ''}{tx.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

