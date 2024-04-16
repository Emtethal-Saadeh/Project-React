import { create } from 'zustand';

interface Store {
  dateFilter: string;
  setDateFilter: (date: string) => void; 
}

export const useDateFilterStore  = create<Store>((set) => ({
  dateFilter: '',
  setDateFilter: (date) => {
    set({ dateFilter: date });
  },
}));
