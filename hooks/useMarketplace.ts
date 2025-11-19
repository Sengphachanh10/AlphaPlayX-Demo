import { useState, useEffect } from 'react';
import { Game, Order, Wallet, UserProfile, ViewType, SortOption } from '@/types';
import { GAMES, INITIAL_ORDERS, INITIAL_WALLET, INITIAL_PROFILE } from '@/data/mockData';

export function useMarketplace() {
  const [cart, setCart] = useState<Game[]>([]);
  const [wishlist, setWishlist] = useState<Game[]>([]);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [wallet, setWallet] = useState<Wallet>(INITIAL_WALLET);
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("recommended");
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToastMessage = (message: string) => {
    setToast(message);
  };

  const getProcessedGames = () => {
    let processed = GAMES.filter(game => {
      const matchesCategory = activeCategory === "All" || game.category === activeCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    switch (sortOption) {
      case "price-asc":
        return processed.sort((a, b) => a.price - b.price);
      case "price-desc":
        return processed.sort((a, b) => b.price - a.price);
      case "rating":
        return processed.sort((a, b) => b.rating - a.rating);
      default:
        return processed;
    }
  };

  const filteredGames = getProcessedGames();

  const addToCart = (game: Game) => {
    if (!cart.find(item => item.id === game.id)) {
      setCart([...cart, game]);
      showToastMessage(`ເພີ່ມ "${game.title}" ລົງໃນກະຕ່າແລ້ວ`);
    } else {
      showToastMessage(`"${game.title}" ມີຢູ່ໃນກະຕ່າແລ້ວ`);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const toggleWishlist = (game: Game) => {
    if (wishlist.find(item => item.id === game.id)) {
      setWishlist(wishlist.filter(item => item.id !== game.id));
      showToastMessage(`ລົບ "${game.title}" ອອກຈາກ Wishlist`);
    } else {
      setWishlist([...wishlist, game]);
      showToastMessage(`ບັນທຶກ "${game.title}" ໄວ້ແລ້ວ`);
    }
  };

  const navigateTo = (view: ViewType, game: Game | null = null) => {
    setCurrentView(view);
    if (view === 'detail' && game) {
      setSelectedGame(game);
    } else {
      setSelectedGame(null);
    }
    window.scrollTo(0, 0);
  };

  const handleTopUp = () => {
    setWallet(prev => ({
      ...prev,
      balance: prev.balance + 50,
      transactions: [{
        id: `TX-${Date.now()}`,
        type: "Deposit",
        amount: 50.00,
        date: new Date().toLocaleDateString('en-GB'),
        status: "Completed"
      }, ...prev.transactions]
    }));
    showToastMessage("ເຕີມເງິນ $50.00 ສຳເລັດ!");
  };

  const handlePaymentSubmit = (totalCost: number) => {
    const now = new Date();
    const newOrder: Order = {
      id: `ORD-${now.getFullYear()}-${Math.floor(Math.random() * 10000)}`,
      date: now.toLocaleDateString('en-GB'),
      total: totalCost,
      status: "Processing",
      tracking: [
        { step: "Ordered", date: now.toLocaleString(), done: true },
        { step: "Processing", date: "Pending", done: false },
        { step: "Shipped", date: "Pending", done: false },
        { step: "Delivered", date: "Pending", done: false }
      ],
      items: [...cart]
    };

    setWallet(prev => ({
      ...prev,
      balance: prev.balance - totalCost,
      transactions: [{
        id: `TX-${Date.now()}`,
        type: "Purchase",
        amount: -totalCost,
        date: now.toLocaleDateString('en-GB'),
        status: "Completed"
      }, ...prev.transactions]
    }));

    setUserProfile(prev => ({
      ...prev,
      gamesOwned: prev.gamesOwned + cart.length,
      totalSpent: prev.totalSpent + totalCost
    }));

    setOrders([newOrder, ...orders]);
    setCart([]);

    setTimeout(() => {
      setOrders(prev => prev.map(o => o.id === newOrder.id ? {
        ...o,
        status: "Shipped",
        tracking: o.tracking.map(t => t.step === "Processing" || t.step === "Shipped" ? {...t, done: true, date: new Date().toLocaleString()} : t)
      } : o));
      showToastMessage(`Order ${newOrder.id} has been shipped!`);
    }, 8000);

    return newOrder;
  };

  return {
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
  };
}

