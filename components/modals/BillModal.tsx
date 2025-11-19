'use client';

import { X } from 'lucide-react';
import { Order } from '@/types';

interface BillModalProps {
  order: Order | null;
  onClose: () => void;
}

export default function BillModal({ order, onClose }: BillModalProps) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white text-black w-full max-w-md relative shadow-2xl font-mono text-sm my-8">
        <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-red-500">
          <X size={32} />
        </button>

        <div className="p-8">
          <div className="text-center border-b-2 border-black pb-6 mb-6">
            <h1 className="text-3xl font-black uppercase tracking-widest mb-2">RECEIPT</h1>
            <p className="font-bold">BLACKMARKET INC.</p>
            <p>Vientiane, Laos</p>
            <p>support@blackmarket.la</p>
          </div>

          <div className="flex justify-between mb-2">
            <span>Order ID:</span>
            <span className="font-bold">{order.id}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span>Date:</span>
            <span>{order.date}</span>
          </div>

          <div className="border-t border-b border-dashed border-black py-4 mb-6 space-y-2">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="truncate pr-4">{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-8">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (0%)</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-black mt-2">
              <span>TOTAL</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="text-center text-xs space-y-2">
            <p>*** THANK YOU FOR YOUR PURCHASE ***</p>
          </div>
        </div>

        <button
          className="w-full bg-black text-white py-4 font-bold uppercase hover:bg-gray-800 transition-colors"
          onClick={() => window.print()}
        >
          PRINT RECEIPT
        </button>
      </div>
    </div>
  );
}

