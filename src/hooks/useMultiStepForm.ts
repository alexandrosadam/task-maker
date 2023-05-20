import { ReactElement, useState } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleChangeFormStep = (index: number) => setCurrentStep(index);

  const handleNextFormStep = () =>
    setCurrentStep((currentStep) => {
      if (currentStep >= steps.length - 1) return currentStep;
      return currentStep + 1;
    });

  const handlePreviousFormStep = () =>
    setCurrentStep((currentStep) => {
      if (currentStep <= 0) return currentStep;
      return currentStep - 1;
    });

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    handleChangeFormStep,
    handleNextFormStep,
    handlePreviousFormStep,
  };
};

export default useMultiStepForm;
