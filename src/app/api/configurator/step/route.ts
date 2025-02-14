import steps from '@/app/lib/configurator/steps';
import { Step } from '@/app/lib/configurator/types';
import { NextRequest, NextResponse } from 'next/server';

const POST = async (req: NextRequest) => {
  const body = await req.json();
  const step = steps.find((step) => step.orderNo === body.configuratorId) as Step;
  
  return NextResponse.json({
    currentStep: step,
    totalSteps: steps.length,
  });
}

export { POST }
