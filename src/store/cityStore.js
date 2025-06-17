import { create } from 'zustand';

const useCityStore = create((set) => ({
  city: '',
  setCity: (city) => set({ city }),
}));

export default useCityStore;
