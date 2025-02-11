type NavigationProps = {
  shouldShowPrevBtn: boolean;
  shouldShowFinishBtn: boolean;
  shouldShowNextBtn: boolean;
  prevStep: () => void;
  nextStep: () => void;
}

export const Navigation = ({ shouldShowFinishBtn, shouldShowNextBtn, shouldShowPrevBtn, nextStep, prevStep }: NavigationProps) => (
  <nav>
    {
      shouldShowPrevBtn && <button onClick={prevStep}>WSTECZ</button>
    }
    {
      shouldShowFinishBtn && <button>ZAKOŃCZ</button>
    }
    {
      shouldShowNextBtn && <button onClick={nextStep}>DALEJ</button>
    }
  </nav>
)
