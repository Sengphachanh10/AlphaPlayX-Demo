'use client';

import { X, Truck, CheckCircle, Clock } from 'lucide-react';
import { Order } from '@/types';

interface TrackingModalProps {
  order: Order | null;
  onClose: () => void;
}

export default function TrackingModal({ order, onClose }: TrackingModalProps) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="bg-[#111] border border-white/20 w-full max-w-lg rounded-sm relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 hover:text-red-500">
          <X size={24} />
        </button>

        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold uppercase flex items-center gap-2">
            <Truck size={24} /> ຕິດຕາມສະຖານະ ({order.id})
          </h2>
        </div>

        <div className="p-8 relative">
          <div className="absolute left-12 top-10 bottom-10 w-0.5 bg-gray-800"></div>
          <div className="space-y-8">
            {order.tracking.map((track, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className={`z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  track.done ? 'bg-white border-white text-black' : 'bg-black border-gray-600 text-gray-600'
                }`}>
                  {track.done ? <CheckCircle size={16} /> : <Clock size={16} />}
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold uppercase text-sm ${track.done ? 'text-white' : 'text-gray-500'}`}>
                    {track.step}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 font-mono">{track.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

