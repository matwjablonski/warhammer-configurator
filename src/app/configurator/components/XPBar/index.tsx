'use client';

import { getInitialXP } from '@/app/lib/calculator/xp';
import { useConfiguratorStore } from '../../store/useConfiguratorStore';

export const XPBar = () => {
  const { newHero } = useConfiguratorStore();
  const xp = getInitialXP(newHero);

  if (!newHero) {
    return null;
  }

  return <div className="flex items-center justify-between mt-4">
    <span className="font-medieval text-lg text-primary">XP: {xp}</span>
  </div>;
};
