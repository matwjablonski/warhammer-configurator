import { Hero, HeroProperty } from '@/app/lib/configurator/types';
import { create } from 'zustand';
import { devtools } from "zustand/middleware";

type ConfiguratorStoreType = { 
  step: number;
  setStep(s: number): void;
  newHero: Hero; 
  setNewHero(hero: Hero): void;
  updateHero(property: HeroProperty, roll: string): void;
  updateRoll(diceRoll: number, roll: string): void;
  cleanRoll(roll: string): void;
}

export const useConfiguratorStore = create<ConfiguratorStoreType, [["zustand/devtools", never]]>(
  devtools(
    (set) => ({
      step: 0,
      setStep: (step: number) => set({ step }),
      newHero: {
        rolls: {},
      },
      setNewHero: () => set((state) => ({ 
        ...state,
        newHero: {
          rolls: {},
        }
      })),
      updateRoll: (diceRoll: number, roll: string) => set((state) => ({
        ...state,
        newHero: {
          ...state.newHero,
          rolls: {
            ...state.newHero.rolls,
            [roll]: {
              result: diceRoll,
              rollTimes: state.newHero.rolls[roll]?.rollTimes ?? 1,
            },
          },
        },
      })),
      updateHero: (property: HeroProperty, roll: string) => set((state) => ({
        ...state,
        newHero: {
          ...state.newHero,
          [roll]: property,
        },
      })),
      cleanRoll: (roll: string) => set((state) => ({
        ...state,
        newHero: {
          ...state.newHero,
          [roll]: null,
          rolls: {
            ...state.newHero.rolls,
            [roll]: {
              result: null,
              rollTimes: state.newHero.rolls[roll].rollTimes + 1,
            },
          },
        }
      }))
    })
  )
);
