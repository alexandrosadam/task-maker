import { Button, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerContainer } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { URLS } from "@constants/urls";
import { LoginPostData, signIn } from "@api/app";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import useMultiStepForm from "@hooks/useMultiStepForm";
import { AccountForm, AddressForm, BasicInformationForm } from "./components";

const signInFormSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Register = () => {
  const {
    step,
    steps,
    currentStep,
    isFirstStep,
    handleGoNextStep,
    handleGoPreviousStep,
    isLastStep,
  } = useMultiStepForm([<BasicInformationForm />, <AddressForm />, <AccountForm />]);

  const {
    register,
    formState: { errors },
  } = useForm<LoginPostData>({
    mode: "onChange",
    resolver: yupResolver(signInFormSchema),
  });

  return (
    <section css={registerContainer}>
      <form className="registerForm">
        <Typography component="h1" variant="h5" className="steps-container">
          {currentStep + 1} / {steps.length}
        </Typography>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <div>{step}</div>

        <Grid container className="buttons-container">
          {isFirstStep && (
            <Button
              className="back-button"
              type="button"
              variant="contained"
              onClick={handleGoPreviousStep}
            >
              Back
            </Button>
          )}

          <Button variant="contained" type="button" onClick={handleGoNextStep}>
            {isLastStep ? "Finish" : "Next"}
          </Button>
        </Grid>
      </form>
    </section>
  );
};

export default Register;
