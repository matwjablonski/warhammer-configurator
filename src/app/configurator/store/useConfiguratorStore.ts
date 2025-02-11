import { create } from 'zustand';

export const useConfiguratorStore = create<{ step: number, setStep(s: number): void}>((set) => ({
  step: 0,
  setStep: (step: number) => set({ step }),
}))
