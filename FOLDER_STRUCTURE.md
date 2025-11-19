# 📂 Folder Structure Overview

## Complete Project Structure

```
alphaplayx/
│
├── 📁 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout with metadata
│   ├── page.tsx                     # Main marketplace component
│   ├── globals.css                  # Global styles & animations
│   └── favicon.ico                  # Site favicon
│
├── 📁 components/                   # React Components
│   │
│   ├── 📁 layout/                   # Layout Components
│   │   ├── Navbar.tsx               # Top navigation bar
│   │   └── Footer.tsx               # Site footer
│   │
│   ├── 📁 modals/                   # Modal & Sidebar Components
│   │   ├── CartModal.tsx            # Shopping cart sidebar
│   │   ├── WishlistModal.tsx        # Wishlist sidebar
│   │   ├── CheckoutModal.tsx        # Payment checkout modal
│   │   ├── TrackingModal.tsx        # Order tracking modal
│   │   ├── BillModal.tsx            # Receipt/bill modal
│   │   └── ChatWidget.tsx           # Support chat widget
│   │
│   ├── 📁 views/                    # Page View Components
│   │   ├── HomeView.tsx             # Marketplace home page
│   │   ├── OrdersView.tsx           # Orders history page
│   │   ├── WalletView.tsx           # Wallet/balance page
│   │   ├── ProfileView.tsx          # User profile page
│   │   └── GameDetailView.tsx       # Game detail page
│   │
│   └── 📁 ui/                       # Reusable UI Components
│       └── Toast.tsx                # Toast notification component
│
├── 📁 hooks/                        # Custom React Hooks
│   └── useMarketplace.ts            # Main state management hook
│
├── 📁 types/                        # TypeScript Definitions
│   └── index.ts                     # All type interfaces & types
│
├── 📁 data/                         # Mock Data & Constants
│   └── mockData.ts                  # Games, orders, wallet, profile data
│
├── 📁 public/                       # Static Assets
│   └── *.svg                        # Image assets
│
└── 📄 Configuration Files
    ├── package.json                 # Dependencies
    ├── tsconfig.json                # TypeScript config
    ├── next.config.ts              # Next.js config
    ├── tailwind.config.ts           # Tailwind CSS config
    └── README.md                    # Project documentation
```

## 📋 Component Organization

### **Layout Components** (`components/layout/`)
- **Navbar.tsx**: Main navigation with search, cart icon, wishlist, and user menu
- **Footer.tsx**: Site footer with links and copyright

### **Modal Components** (`components/modals/`)
- **CartModal.tsx**: Shopping cart with items list and checkout button
- **WishlistModal.tsx**: Saved games list with add to cart option
- **CheckoutModal.tsx**: Payment form and success screen
- **TrackingModal.tsx**: Order tracking timeline visualization
- **BillModal.tsx**: Printable receipt/bill
- **ChatWidget.tsx**: Floating customer support chat

### **View Components** (`components/views/`)
- **HomeView.tsx**: Game marketplace with filters, search, and grid
- **OrdersView.tsx**: Order history with tracking and receipt options
- **WalletView.tsx**: Balance display and transaction history
- **ProfileView.tsx**: User profile information and settings
- **GameDetailView.tsx**: Individual game details with specs

### **UI Components** (`components/ui/`)
- **Toast.tsx**: Toast notification for user feedback

## 🔧 Core Files

### **Hooks** (`hooks/`)
- **useMarketplace.ts**: Centralized state management hook containing:
  - Cart, wishlist, orders, wallet, profile state
  - Navigation and view state
  - Game filtering and sorting logic
  - Toast notification system
  - Payment processing logic

### **Types** (`types/`)
- **index.ts**: TypeScript interfaces for:
  - Game, Order, Wallet, UserProfile
  - ChatMessage, Transaction, TrackingStep
  - ViewType, SortOption, PaymentStep

### **Data** (`data/`)
- **mockData.ts**: Mock data including:
  - GAMES array (8 sample games)
  - CATEGORIES array
  - INITIAL_ORDERS
  - INITIAL_WALLET
  - INITIAL_PROFILE

## 🎯 Import Paths

All imports use the `@/` alias configured in `tsconfig.json`:

```typescript
// Examples:
import { Game } from '@/types';
import { GAMES } from '@/data/mockData';
import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from '@/components/layout/Navbar';
```

## 📦 Key Features by Folder

- **app/**: Next.js routing and global configuration
- **components/**: Reusable React components organized by purpose
- **hooks/**: Custom React hooks for state management
- **types/**: TypeScript type safety
- **data/**: Mock data for development and testing

## 🔄 Data Flow

1. **Main Page** (`app/page.tsx`) uses `useMarketplace` hook
2. **Hook** (`hooks/useMarketplace.ts`) manages all state
3. **Views** (`components/views/`) display data
4. **Modals** (`components/modals/`) handle user interactions
5. **Types** (`types/index.ts`) ensure type safety throughout

