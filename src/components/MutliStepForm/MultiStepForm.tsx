import { useState } from "react";
import { formWrapperContainer } from "./components/styles";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import MultiStepFormProvider from "@hooks/useFormContext";
import { UserForm, AddressForm, AccountForm } from "./components";
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

type FormWrapperProps = {
  formType: "edit" | "new";
};

//const steps = ["User info", "Address info", "Account info"];

const steps = {
  userInfo: "User info",
  addressInfo: "Address info",
  accountInfo: "Account info",
};

const multiStepFormScema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required(),
});

const MultiStepForm = ({ formType }: FormWrapperProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(DEFAULT_DATA);
  const isFirstFormStep = currentStep === 0;
  const isLastFormStep = currentStep === Object.keys(steps).length - 1;
  const navigate = useNavigate();

  const updateMultiStepFormValues = (newValues: Partial<FormData>) => {
    setFormData((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
    console.log("formData", formData);
    console.log("currentStep", currentStep);
    handleNextFormStep();
  };

  const { register, formState, handleSubmit } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(multiStepFormScema),
  });

  const { errors } = formState;

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
        return (
          <UserForm
            data={formData}
            updateFormData={updateMultiStepFormValues}
            handleCancelFormStep={handleCancelFormStep}
          />
        );
      case 1:
        return (
          <AddressForm
            data={formData}
            updateFormData={updateMultiStepFormValues}
            handlePreviousFormStep={handlePreviousFormStep}
            handleCancelFormStep={handleCancelFormStep}
          />
        );
      case 2:
        return (
          <AccountForm
            data={formData}
            updateFormData={updateMultiStepFormValues}
            handlePreviousFormStep={handlePreviousFormStep}
            handleCancelFormStep={handleCancelFormStep}
          />
        );
      default:
        return <></>;
    }
  };

  console.log("Object.keys(steps)[currentStep]", Object.keys(steps)[currentStep]);

  return (
    <section css={formWrapperContainer}>
      <h1 className="form_title">{formType.toUpperCase()}</h1>
      <Stepper activeStep={currentStep} alternativeLabel>
        {Object.keys(steps).map((label, index) => (
          <Step
            key={label}
            disabled={formType === "new"}
            onClick={() => handleChangeFormStep(index)}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <h2 className="form_title">{Object.values(steps)[currentStep]}</h2>
      <section css={formWrapperContainer}>
        <form onSubmit={handleSubmit(onSubmit)} id={Object.keys(steps)[currentStep]}>
          {getStepContent(currentStep)}

          <div className="form-action-buttons">
            <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleCancelFormStep}>
              Cancel
            </Button>
            {!isFirstFormStep && (
              <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handlePreviousFormStep}>
                Back
              </Button>
            )}
            <Button variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
              {isLastFormStep ? "Save" : "Next"}
            </Button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </section>
  );
};

export default MultiStepForm;
