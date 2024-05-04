import { create } from 'zustand';

interface Store {
  dateFilter: string;
  setDateFilter: (date: string) => void; 
  period: string;
  setPeriod: (selectedPeriod: string) => void;
}

export const dashboardStore  = create<Store>((set) => ({
  dateFilter: '',
  setDateFilter: (date) => {
    set({ dateFilter: date });
  },
  period: 'today',
  setPeriod: (selectedPeriod) => {
    set({ period: selectedPeriod });
  },
}));

