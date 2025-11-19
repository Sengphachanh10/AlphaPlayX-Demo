import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] bg-white text-black px-6 py-4 rounded-sm shadow-2xl flex items-center gap-3 animate-bounce-in">
      <CheckCircle size={20} className="text-black" />
      <span className="font-bold text-sm uppercase tracking-wide">{message}</span>
    </div>
  );
}

