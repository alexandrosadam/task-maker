import { useState } from "react";
import { formWrapperContainer } from "./styles";
import { Step, StepLabel, Stepper } from "@mui/material";
import MultiStepFormProvider from "@hooks/useFormContext";
import { UserForm } from "./components";

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
  firstName: "Alex",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

type FormWrapperProps = {
  formType: "edit" | "new";
};

const steps = ["User info", "Address info", "Account info"];

const MultiStepForm = ({ formType }: FormWrapperProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(DEFAULT_DATA);

  const updateMultiStepFormValues = (newValues: Partial<FormData>) => {
    setFormData((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  const handleNextFormStep = () => setCurrentStep((activeStep) => activeStep + 1);
  const handlePreviousFormStep = () => setCurrentStep((activeStep) => activeStep - 1);
  const handleChangeFormStep = (index: number) => setCurrentStep(index);

  const getStepContent = (step: number): JSX.Element => {
    switch (step) {
      case 0:
        return (
          <UserForm
            data={formData}
            handleNextFormStep={handleNextFormStep}
            updateMultiStepFormValues={updateMultiStepFormValues}
          />
        );
      case 1:
        return <div> Multi step 2</div>;
      case 2:
        return <div> Multi step 2</div>;
      default:
        return <></>;
    }
  };

  return (
    <section css={formWrapperContainer}>
      <h1 className="form_title">{formType.toUpperCase()}</h1>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            disabled={formType === "new"}
            onClick={() => handleChangeFormStep(index)}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <h2 className="form_title">{steps[currentStep]}</h2>
      <form>{getStepContent(currentStep)}</form>
      {/* create buttons as well */}
    </section>
  );
};

export default MultiStepForm;
