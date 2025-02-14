'use client';

import { getCurrentStep, StepResponse } from '@/app/lib/requests/configurator/currentStep';
import { useConfiguratorStore } from '../../store/useConfiguratorStore';
import { useEffect, useState } from 'react';
import { Title } from '../Title';
import { CurrentStepForm } from '../CurrentStepForm';

export const InitialStep = () => {
  const { step, setNewHero } = useConfiguratorStore();
  const [data, setData] = useState<StepResponse>({ currentStep: null, totalSteps: 0 });

  const getData = async (step: number) => {
    const res = await getCurrentStep(step);
    setData(res);
  };

  useEffect(() => {
    setNewHero({
      rolls: {}
    })
  }, [setNewHero]);
  
  useEffect(() => {
    getData(step)
  }, [step]);

  return data.currentStep ? (
      <div className="p-4 overflow-hidden"> 
        <Title orderNo={step}>{data.currentStep.title}</Title>
        <p>{data.currentStep.description}</p>
        {data.currentStep && data.currentStep.questions && (
          <CurrentStepForm questions={data.currentStep.questions} totalSteps={data.totalSteps} />
        )}
      </div>
    
    
  ) : null;
}
