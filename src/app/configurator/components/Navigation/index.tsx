import { Button } from '@/app/components/Button';
import { Nav } from './styles';

type NavigationProps = {
  shouldShowPrevBtn: boolean;
  shouldShowFinishBtn: boolean;
  shouldShowNextBtn: boolean;
  prevStep: () => void;
  nextStep: () => void;
}

export const Navigation = ({ shouldShowFinishBtn, shouldShowNextBtn, shouldShowPrevBtn, nextStep, prevStep }: NavigationProps) => (
  <Nav>
    <div>
    {
      shouldShowPrevBtn && <button onClick={prevStep}>WSTECZ</button>
    }
    </div>
    <div>
      {
        shouldShowFinishBtn && <button>ZAKOŃCZ</button>
      }
      {
        shouldShowNextBtn && <Button onClick={nextStep} label="DALEJ" />
      }
    </div>
  </Nav>
)
