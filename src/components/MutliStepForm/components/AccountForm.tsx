import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { formWrapperContainer } from "./styles";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = {
  data: AccountData;
  updateFormData: (values: AccountData) => void;
  handleCancelFormStep: () => void;
  handlePreviousFormStep: () => void;
};

const multiStepFormScema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const AccountForm = ({
  data,
  updateFormData,
  handleCancelFormStep,
  handlePreviousFormStep,
}: AccountFormProps) => {
  const { register, formState, handleSubmit } = useForm<AccountData>({
    mode: "onChange",
    defaultValues: {
      email: data.email !== "" ? data.email : "",
      password: data.password !== "" ? data.password : "",
    },
    resolver: yupResolver(multiStepFormScema),
  });

  const { errors } = formState;

  const onSubmitSuccess = (data: AccountData) => {
    updateFormData(data);
  };

  return (
    <section css={formWrapperContainer}>
      <form onSubmit={handleSubmit(onSubmitSuccess)}>
        <TextField
          {...register("email")}
          label="Email"
          autoComplete="email"
          margin="normal"
          type="email"
          fullWidth
          autoFocus
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) && "Email name is a required field"}
        />

        <TextField
          {...register("password")}
          label="Password"
          autoComplete="password"
          margin="normal"
          type="password"
          fullWidth
          autoFocus
          error={Boolean(errors.password)}
          helperText={Boolean(errors.password) && "Password is a required field"}
        />

        <div className="form-action-buttons">
          <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleCancelFormStep}>
            Cancel
          </Button>

          <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handlePreviousFormStep}>
            Back
          </Button>

          <Button variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
            Save
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AccountForm;
