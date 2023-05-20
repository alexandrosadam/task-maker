import { FormEvent, useState } from "react";
import { newTodoContainer } from "./styles";
import useMultiStepForm from "@hooks/useMultiStepForm";
import { UserForm } from "./components/UserForm";
import { AddressForm } from "./components/AddressForm";
import { AccountForm } from "./components/AccountForm";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useForm } from "react-hook-form";

const steps = ["User info", "Address info", "Account info"];

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

const TodoNew = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm();
  const [data, setData] = useState(DEFAULT_DATA);

  const updateFormFields = (fields: Partial<FormData>) => {
    setData((prevData) => ({ ...prevData, ...fields }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <UserForm {...data} updateFields={updateFormFields} />;
      case 1:
        return <AddressForm {...data} updateFields={updateFormFields} />;
      case 2:
        return <AccountForm {...data} updateFields={updateFormFields} />;
      default:
        return null;
    }
  };

  return (
    <div css={newTodoContainer}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep)}
      <div>
        {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
        {activeStep !== steps.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </div>
    </div>
  );
};

export default TodoNew;
