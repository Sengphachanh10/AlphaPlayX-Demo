'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, Settings, Bell, Globe, LogOut, X } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { UserProfile } from '@/types';

interface ProfileViewProps {
  profile: UserProfile;
  onNavigate: (view: 'home') => void;
}

export default function ProfileView({ profile, onNavigate }: ProfileViewProps) {
  const router = useRouter();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here
    // For now, just close modal and navigate to login
    setIsLogoutModalOpen(false);
    router.push(ROUTES.login);
  };
  return (
    <div className="animate-fade-in min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <div className="flex flex-wrap items-center mb-8 gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="hover:bg-white hover:text-black p-2 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-black uppercase tracking-widest flex items-center gap-3 text-center md:text-left">
            <User size={32} /> ໂປຣໄຟລ໌ຜູ້ໃຊ້
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-[#111] border border-white/20 p-6 text-center">
              <div className="w-32 h-32 bg-white text-black rounded-full mx-auto flex items-center justify-center mb-4 border-4 border-black outline outline-2 outline-white">
                <span className="text-5xl font-black uppercase">{profile.name.charAt(0)}</span>
              </div>
              <h2 className="text-xl font-bold uppercase mb-1">{profile.name}</h2>
              <p className="text-gray-500 text-xs mb-4 font-mono">{profile.email}</p>
              <div className="flex justify-center gap-2">
                <span className="bg-white/10 px-3 py-1 text-xs uppercase font-bold rounded-full">Member</span>
                <span className="bg-white/10 px-3 py-1 text-xs uppercase font-bold rounded-full">LVL 5</span>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4 text-left space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Joined</span>
                  <span>{profile.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Games</span>
                  <span>{profile.gamesOwned}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Spent</span>
                  <span className="text-green-400 font-mono">${profile.totalSpent.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Settings & Form */}
          <div className="md:col-span-2 space-y-6">
            {/* Edit Info */}
            <div className="bg-[#0a0a0a] border border-white/10 p-6">
              <h3 className="text-lg font-bold uppercase mb-4 flex items-center gap-2">
                <Settings size={18} /> ແກ້ໄຂຂໍ້ມູນ
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase font-bold mb-1">ຊື່ຜູ້ໃຊ້ (Username)</label>
                  <input
                    type="text"
                    value={profile.name}
                    readOnly
                    className="w-full bg-black border border-white/20 p-3 text-white outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase font-bold mb-1">ອີເມວ (Email)</label>
                  <input
                    type="text"
                    value={profile.email}
                    readOnly
                    className="w-full bg-black border border-white/20 p-3 text-white outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="pt-2">
                  <button className="bg-white text-black px-6 py-2 font-bold uppercase text-sm hover:bg-gray-200">
                    ບັນທຶກການປ່ຽນແປງ
                  </button>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-[#0a0a0a] border border-white/10 p-6">
              <h3 className="text-lg font-bold uppercase mb-4">ການຕັ້ງຄ່າອື່ນໆ</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <Bell size={20} className="text-gray-400" />
                    <div>
                      <div className="text-sm font-bold">ການແຈ້ງເຕືອນ (Notifications)</div>
                      <div className="text-xs text-gray-500">ຮັບຂ່າວສານໂປຣໂມຊັ່ນໃໝ່</div>
                    </div>
                  </div>
                  <div className="w-10 h-5 bg-white rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 bottom-1 w-3 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-gray-400" />
                    <div>
                      <div className="text-sm font-bold">ພາສາ (Language)</div>
                      <div className="text-xs text-gray-500">Lao (ລາວ)</div>
                    </div>
                  </div>
                  <button className="text-xs uppercase underline text-gray-400 hover:text-white">ປ່ຽນ</button>
                </div>
                <button 
                  onClick={() => setIsLogoutModalOpen(true)}
                  className="w-full border border-red-900 text-red-500 py-3 font-bold uppercase text-sm hover:bg-red-900/20 flex items-center justify-center gap-2 mt-4"
                >
                  <LogOut size={16} /> ອອກຈາກລະບົບ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setIsLogoutModalOpen(false)}
          ></div>
          <div className="relative bg-[#0a0a0a] border border-white/20 p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wider">
                ຢືນຢັນການອອກຈາກລະບົບ
              </h2>
              <button 
                onClick={() => setIsLogoutModalOpen(false)}
                className="hover:rotate-90 transition-transform"
              >
                <X size={24} />
              </button>
            </div>
            
            <p className="text-gray-400 mb-8">
              Confirm to logout
            </p>

            <div className="flex gap-4">
              <button
                onClick={handleLogout}
                className="flex-1 bg-white text-black py-3 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors"
              >
                Yes
              </button>
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="flex-1 border border-white/20 text-white py-3 font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

