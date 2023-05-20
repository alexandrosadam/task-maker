import { useState } from "react";
import { formWrapperContainer } from "./styles";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import MultiStepFormProvider from "@hooks/useFormContext";
import { UserForm } from "./components";
import { useNavigate } from "react-router-dom";
import { URLS } from "@constants/urls";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

const multiStepFormScema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required(),
});

const MultiStepForm = ({ formType }: FormWrapperProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(DEFAULT_DATA);
  const isFirstFormStep = currentStep === 0;
  const isLastFormStep = currentStep === steps.length - 1;
  const navigate = useNavigate();

  const updateMultiStepFormValues = (newValues: Partial<FormData>) => {
    setFormData((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  const hookForm = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(multiStepFormScema),
  });

  const handleNextFormStep = () => setCurrentStep((activeStep) => activeStep + 1);
  const handlePreviousFormStep = () => setCurrentStep((activeStep) => activeStep - 1);
  const handleChangeFormStep = (index: number) => setCurrentStep(index);
  const handleCancelFormStep = () => navigate(URLS.dashboard);

  const onSubmit = () => {
    console.log("Inside onSubmit");
    handleNextFormStep();
  };

  const getStepContent = (step: number): JSX.Element => {
    switch (step) {
      case 0:
        return <UserForm data={formData} />;
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
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        {getStepContent(currentStep)}
        {/* create buttons as well */}
        <div className="form-action-buttons">
          <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleCancelFormStep}>
            Cancel
          </Button>
          {!isFirstFormStep && (
            <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handlePreviousFormStep}>
              Back
            </Button>
          )}
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            {isLastFormStep ? "Save" : "Next"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default MultiStepForm;
