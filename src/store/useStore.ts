import { create } from 'zustand';

interface AppState {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  isCommandMenuOpen: boolean;
  setCommandMenuOpen: (isOpen: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark', // Dark mode by default
  setTheme: (theme) => set({ theme }),
  activeFilter: 'All', // Default filter for projects
  setActiveFilter: (activeFilter) => set({ activeFilter }),
  isCommandMenuOpen: false,
  setCommandMenuOpen: (isCommandMenuOpen) => set({ isCommandMenuOpen }),
}));
