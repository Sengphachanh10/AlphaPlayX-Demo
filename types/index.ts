import { ReactNode } from 'react';

export interface Game {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  longDescription: string;
  specs: {
    cpu: string;
    ram: string;
    gpu: string;
  };
  icon: ReactNode;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Completed';
  tracking: TrackingStep[];
  items: Game[];
}

export interface TrackingStep {
  step: string;
  date: string;
  done: boolean;
}

export interface Transaction {
  id: string;
  type: 'Deposit' | 'Purchase';
  amount: number;
  date: string;
  status: string;
}

export interface Wallet {
  balance: number;
  transactions: Transaction[];
}

export interface UserProfile {
  name: string;
  email: string;
  joinDate: string;
  gamesOwned: number;
  totalSpent: number;
}

export interface ChatMessage {
  sender: 'user' | 'admin';
  text: string;
}

export type ViewType = 'home' | 'orders' | 'wallet' | 'profile' | 'detail';
export type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'rating';
export type PaymentStep = 'form' | 'success';

