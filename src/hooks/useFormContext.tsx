import { useState, createContext, useContext, ReactNode } from "react";

export type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

export const DEFAULT_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

type FormProviderProps = {
  children: ReactNode;
};

type FormContextType = {
  formData: FormData | null;
  activeStep: number;
  handleNextFormStep: () => void;
  handlePreviousFormStep: () => void;
  handleChangeFormStep: (index: number) => void;
  updateMultiStepFormValues: (newValues: FormData) => void;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
};

export const FormContext = createContext<FormContextType | null>(null);

export default function MultiStepFormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState<FormData | null>(DEFAULT_DATA);
  const [activeStep, setActiveStep] = useState(0);

  const updateMultiStepFormValues = (newValues: FormData) => {
    setFormData((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  const handleNextFormStep = () => setActiveStep((currentStep) => currentStep + 1);
  const handlePreviousFormStep = () => setActiveStep((currentStep) => currentStep - 1);
  const handleChangeFormStep = (index: number) => setActiveStep(index);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        updateMultiStepFormValues,
        activeStep,
        setActiveStep,
        handleNextFormStep,
        handlePreviousFormStep,
        handleChangeFormStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
