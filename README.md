# AlphaPlayX - BlackMarket Game Marketplace

A modern game marketplace platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 📁 Project Structure

```
alphaplayx/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main marketplace page
│   └── globals.css          # Global styles and animations
│
├── components/              # React components
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── Footer.tsx       # Footer component
│   │
│   ├── modals/              # Modal components
│   │   ├── CartModal.tsx    # Shopping cart sidebar
│   │   ├── WishlistModal.tsx # Wishlist sidebar
│   │   ├── CheckoutModal.tsx # Checkout/payment modal
│   │   ├── TrackingModal.tsx # Order tracking modal
│   │   ├── BillModal.tsx    # Receipt/bill modal
│   │   └── ChatWidget.tsx   # Customer support chat
│   │
│   ├── views/               # Page view components
│   │   ├── HomeView.tsx     # Home/marketplace view
│   │   ├── OrdersView.tsx   # Orders history view
│   │   ├── WalletView.tsx   # Wallet/balance view
│   │   ├── ProfileView.tsx  # User profile view
│   │   └── GameDetailView.tsx # Game detail page
│   │
│   └── ui/                  # Reusable UI components
│       └── Toast.tsx         # Toast notification
│
├── hooks/                   # Custom React hooks
│   └── useMarketplace.ts    # Main marketplace state hook
│
├── types/                   # TypeScript type definitions
│   └── index.ts             # All type interfaces
│
├── data/                    # Mock data and constants
│   └── mockData.ts          # Games, orders, wallet, profile data
│
├── public/                  # Static assets
└── package.json            # Dependencies
```

## 🚀 Features

- **Game Marketplace**: Browse games by category with search and sorting
- **Shopping Cart**: Add/remove games from cart
- **Wishlist**: Save favorite games
- **Order Management**: Track orders and view receipts
- **Wallet System**: Manage balance and transactions
- **User Profile**: View and edit profile settings
- **Live Chat**: Customer support chat widget
- **Responsive Design**: Mobile-first responsive layout

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State Management**: React Hooks (Custom hooks)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Component Architecture

### Layout Components
- **Navbar**: Main navigation with search, cart, and user menu
- **Footer**: Site footer with links

### Modal Components
All modals are self-contained and handle their own state:
- **CartModal**: Shopping cart with checkout button
- **WishlistModal**: Saved games list
- **CheckoutModal**: Payment form and success screen
- **TrackingModal**: Order tracking timeline
- **BillModal**: Printable receipt
- **ChatWidget**: Floating chat support

### View Components
Each view represents a full page:
- **HomeView**: Game grid with filters and search
- **OrdersView**: Order history with tracking
- **WalletView**: Balance and transaction history
- **ProfileView**: User profile and settings
- **GameDetailView**: Individual game details

### Custom Hooks
- **useMarketplace**: Centralized state management for:
  - Cart, wishlist, orders, wallet, profile
  - Navigation and view state
  - Game filtering and sorting
  - Toast notifications

## 🔧 Development

### Adding New Features

1. **New Component**: Add to appropriate folder in `components/`
2. **New Type**: Add to `types/index.ts`
3. **New Data**: Add to `data/mockData.ts`
4. **New Hook**: Add to `hooks/`

### Styling

- Uses Tailwind CSS utility classes
- Custom animations in `globals.css`
- Dark theme with monochrome aesthetic

## 📝 Notes

- All text is in Lao language (ລາວ)
- Mock data is used for demonstration
- Payment processing is simulated
- Chat support uses auto-reply simulation

## 🎯 Future Enhancements

- [ ] Authentication system
- [ ] Real payment integration
- [ ] Backend API integration
- [ ] User reviews and ratings
- [ ] Game library management
- [ ] Multi-language support
- [ ] Dark/light theme toggle
