'use client';

import { useState } from 'react';
import { useMarketplace } from '@/hooks/useMarketplace';
import { PaymentStep, Order } from '@/types';

// Components
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Toast from '@/components/ui/Toast';
import CartModal from '@/components/modals/CartModal';
import WishlistModal from '@/components/modals/WishlistModal';
import CheckoutModal from '@/components/modals/CheckoutModal';
import TrackingModal from '@/components/modals/TrackingModal';
import BillModal from '@/components/modals/BillModal';
import ChatWidget from '@/components/modals/ChatWidget';

// Views
import HomeView from '@/components/views/HomeView';
import OrdersView from '@/components/views/OrdersView';
import WalletView from '@/components/views/WalletView';
import ProfileView from '@/components/views/ProfileView';
import GameDetailView from '@/components/views/GameDetailView';

export default function Marketplace() {
  const {
    cart,
    wishlist,
    orders,
    wallet,
    userProfile,
    currentView,
    selectedGame,
    activeCategory,
    searchQuery,
    sortOption,
    scrolled,
    toast,
    filteredGames,
    setActiveCategory,
    setSearchQuery,
    setSortOption,
    addToCart,
    removeFromCart,
    toggleWishlist,
    navigateTo,
    handleTopUp,
    handlePaymentSubmit,
    setOrders,
    setWallet,
    setUserProfile
  } = useMarketplace();

  // Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [trackingOrder, setTrackingOrder] = useState<Order | null>(null);
  const [viewingBill, setViewingBill] = useState<Order | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState<PaymentStep>('form');

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
    setPaymentStep('form');
  };

  const handlePaymentFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      handlePaymentSubmit(totalAmount);
      setPaymentStep('success');
    }, 1500);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    setPaymentStep('form');
    if (paymentStep === 'success') {
      navigateTo('orders');
    }
  };

  const handleChatClick = (orderId: string) => {
    setIsChatOpen(true);
    // This would be handled by ChatWidget's initialMessage prop
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Global Components */}
      <Toast message={toast} />
      <TrackingModal order={trackingOrder} onClose={() => setTrackingOrder(null)} />
      <BillModal order={viewingBill} onClose={() => setViewingBill(null)} />
      <ChatWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        cart={cart}
        totalAmount={totalAmount}
        paymentStep={paymentStep}
        onClose={closeCheckout}
        onPaymentSubmit={handlePaymentFormSubmit}
        onViewOrders={() => {
          closeCheckout();
          navigateTo('orders');
        }}
      />

      {/* Navbar */}
      <Navbar
        scrolled={scrolled}
        currentView={currentView}
        searchQuery={searchQuery}
        wishlistCount={wishlist.length}
        cartCount={cart.length}
        onSearchChange={setSearchQuery}
        onNavigate={navigateTo}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
      />

      {/* Main View Switcher */}
      {currentView === 'orders' && (
        <OrdersView
          orders={orders}
          onNavigate={navigateTo}
          onTrackingClick={setTrackingOrder}
          onBillClick={setViewingBill}
          onChatClick={handleChatClick}
        />
      )}

      {currentView === 'wallet' && (
        <WalletView
          wallet={wallet}
          onNavigate={navigateTo}
          onTopUp={handleTopUp}
        />
      )}

      {currentView === 'profile' && (
        <ProfileView
          profile={userProfile}
          onNavigate={navigateTo}
        />
      )}

      {currentView === 'detail' && selectedGame && (
        <GameDetailView
          game={selectedGame}
          wishlist={wishlist}
          onNavigate={navigateTo}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {currentView === 'home' && (
        <HomeView
          filteredGames={filteredGames}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          sortOption={sortOption}
          wishlist={wishlist}
          cart={cart}
          onCategoryChange={setActiveCategory}
          onSortChange={setSortOption}
          onGameClick={(game) => navigateTo('detail', game)}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {/* Footer */}
      <Footer />

      {/* Sidebars */}
      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        totalAmount={totalAmount}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        wishlist={wishlist}
        onClose={() => setIsWishlistOpen(false)}
        onRemove={toggleWishlist}
        onAddToCart={addToCart}
      />
    </div>
  );
}
