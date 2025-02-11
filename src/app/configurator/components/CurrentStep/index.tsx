'use client';

import { getCurrentStep, StepResponse } from '@/app/lib/requests/configurator/currentStep';
import { useConfiguratorStore } from '../../store/useConfiguratorStore';
import { useEffect, useState } from 'react';
import { Title } from '../Title';
import { Navigation } from '../Navigation';

export const InitialStep = () => {
  const { step, setStep } = useConfiguratorStore();
  const [data, setData] = useState<StepResponse>({ currentStep: null, totalSteps: 0 });

  const shouldShowNextBtn = data && data.totalSteps - 1 > step;
  const shouldShowPrevBtn = step > 0;
  const shouldShowFinishBtn = data && data.totalSteps - 1 === step;

  const getData = async (step: number) => {
    const res = await getCurrentStep(step);
    setData(res);
  };
  
  useEffect(() => {
    getData(step)
  }, [step]);

  const nextStep = () => {
    setStep(step + 1);
  }

  return data.currentStep ? (
    
      <div className="p-4 overflow-hidden"> 
        <Title orderNo={step}>{data.currentStep.title}</Title>
        <p>{data.currentStep.description}</p>
        <Navigation
          shouldShowFinishBtn={shouldShowFinishBtn}
          shouldShowNextBtn={shouldShowNextBtn}
          shouldShowPrevBtn={shouldShowPrevBtn}
          nextStep={nextStep}
          prevStep={() => setStep(step - 1)}
        />
      </div>
    
    
  ) : null;
}
