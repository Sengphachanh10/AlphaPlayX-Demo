'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Headphones, Send } from 'lucide-react';
import { ChatMessage } from '@/types';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  initialMessage?: string;
}

export default function ChatWidget({ isOpen, onToggle, initialMessage = '' }: ChatWidgetProps) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { sender: 'admin', text: 'ສະບາຍດີ! BlackMarket ຍິນດີໃຫ້ບໍລິການ. ມີຫຍັງໃຫ້ຊ່ວຍບໍ່?' }
  ]);
  const [chatInput, setChatInput] = useState(initialMessage);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage) {
      setChatInput(initialMessage);
    }
  }, [initialMessage]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isOpen]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages([...chatMessages, { sender: 'user', text: chatInput }]);
    const userMsg = chatInput;
    setChatInput("");

    setTimeout(() => {
      let reply = "ຂອບໃຈທີ່ຕິດຕໍ່ຫາເຮົາ. ແອດມິນຈະຕອບກັບໂດຍໄວທີ່ສຸດ.";
      if (userMsg.toLowerCase().includes("order") || userMsg.includes("ສັ່ງຊື້")) {
        reply = "ຫາກທ່ານຕ້ອງການກວດສອບສະຖານະ Order, ສາມາດກົດເຂົ້າໄປທີ່ເມນູ 'ປະຫວັດການສັ່ງຊື້' ໄດ້ເລີຍ.";
      } else if (userMsg.toLowerCase().includes("bill") || userMsg.includes("ເງິນ")) {
        reply = "ທ່ານສາມາດດາວໂຫລດໃບຮັບເງິນໄດ້ທີ່ໜ້າ Order ຂອງທ່ານ.";
      }
      setChatMessages(prev => [...prev, { sender: 'admin', text: reply }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 bg-[#111] border border-white/20 w-80 h-96 rounded-sm shadow-2xl flex flex-col animate-fade-in-up">
          <div className="p-4 bg-black border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold uppercase text-sm">Admin Support</span>
            </div>
            <button onClick={onToggle}>
              <X size={16} className="text-gray-500 hover:text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-700">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-sm text-sm ${
                  msg.sender === 'user' ? 'bg-white text-black' : 'bg-gray-800 text-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleChatSubmit} className="p-3 bg-black border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="ພິມຂໍ້ຄວາມ..."
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-600"
            />
            <button type="submit" className="text-white hover:text-gray-300">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={onToggle}
        className="bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-200 transition-transform hover:scale-110 active:scale-95 relative group"
      >
        {isOpen ? <X size={24} /> : <Headphones size={24} />}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            ຕິດຕໍ່ Admin
          </span>
        )}
      </button>
    </div>
  );
}

