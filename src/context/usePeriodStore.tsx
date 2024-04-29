import { create } from 'zustand';

interface Store {
  period: string;
  setPeriod: (selectedPeriod: string) => void;
}

export const usePeriodStore = create<Store>((set) => ({
  period: 'today',
  setPeriod: (selectedPeriod) => {
    set({ period: selectedPeriod });
  },
}));
