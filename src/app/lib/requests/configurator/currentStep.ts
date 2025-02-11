import { Step } from '../../configurator/steps';

export type StepResponse = {
  currentStep: Step | null;
  totalSteps: number;
}

export const getCurrentStep = async (configuratorId: number): Promise<StepResponse> => {
  const res = await fetch(`/api/configurator/step`, { method: 'POST', body: JSON.stringify({ configuratorId }) });
  const { currentStep, totalSteps } = await res.json();

  return {
    currentStep,
    totalSteps, 
  };
}
