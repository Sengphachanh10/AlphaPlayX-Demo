'use client';

import { ArrowLeft, Package, Calendar, CheckCircle, Clock, Truck, FileText, MessageSquare } from 'lucide-react';
import { Order } from '@/types';

interface OrdersViewProps {
  orders: Order[];
  onNavigate: (view: 'home') => void;
  onTrackingClick: (order: Order) => void;
  onBillClick: (order: Order) => void;
  onChatClick: (orderId: string) => void;
}

export default function OrdersView({
  orders,
  onNavigate,
  onTrackingClick,
  onBillClick,
  onChatClick
}: OrdersViewProps) {
  return (
    <div className="animate-fade-in min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center mb-8 gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="hover:bg-white hover:text-black p-2 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-black uppercase tracking-widest flex items-center gap-3 text-center md:text-left">
            <Package size={32} /> ປະຫວັດການສັ່ງຊື້
          </h1>
        </div>

        <div className="space-y-6">
          {orders.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-gray-800 rounded-lg">
              <Package size={48} className="mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400">ຍັງບໍ່ມີປະຫວັດການສັ່ງຊື້</p>
              <button onClick={() => onNavigate('home')} className="mt-4 text-white underline">
                ເລືອກຊື້ເກມເລີຍ
              </button>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="bg-[#0a0a0a] border border-white/10 p-6 hover:border-white/30 transition-colors relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${
                  order.status === 'Completed' ? 'bg-green-500' : 'bg-white'
                }`}></div>

                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 border-b border-white/10 pb-4 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Order ID</div>
                    <div className="font-mono text-lg font-bold text-white">{order.id}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Date</div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar size={14} /> {order.date}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Total</div>
                    <div className="font-mono text-xl font-bold text-white">${order.total.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Status</div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-bold uppercase border ${
                      order.status === 'Completed'
                        ? 'border-green-500 text-green-500'
                        : 'border-white text-white'
                    }`}>
                      {order.status === 'Completed' ? <CheckCircle size={14} /> : <Clock size={14} />}
                      {order.status}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {order.items.map((item, index) => (
                    <div
                      key={`${order.id}-${item.id}-${index}`}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white/5 p-3 rounded-sm"
                    >
                      <div
                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-800 rounded-sm"
                        style={{ background: item.image }}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1 w-full">
                        <div className="font-bold text-sm uppercase">{item.title}</div>
                        <div className="text-xs text-gray-400">{item.category}</div>
                      </div>
                      <div className="font-mono text-sm text-gray-300">
                        {item.price === 0 ? "FREE" : `$${item.price}`}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onTrackingClick(order)}
                    className="flex-1 md:flex-none bg-white text-black px-6 py-2 font-bold uppercase text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Truck size={16} /> ຕິດຕາມ
                  </button>
                  <button
                    onClick={() => onBillClick(order)}
                    className="flex-1 md:flex-none border border-white px-6 py-2 font-bold uppercase text-sm text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    <FileText size={16} /> ໃບຮັບເງິນ
                  </button>
                  <button
                    onClick={() => onChatClick(order.id)}
                    className="flex-1 md:flex-none border border-white/20 px-6 py-2 font-bold uppercase text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} /> ຕິດຕໍ່ Admin
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

