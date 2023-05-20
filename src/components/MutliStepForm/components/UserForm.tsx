import FormWrapper from "@components/MutliStepForm/MultiStepForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContext } from "@hooks/useFormContext";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const userFormScema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required(),
});

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = {
  data: UserData;
  handleNextFormStep: () => void;
  updateMultiStepFormValues: (newValues: UserData) => void;
};

const UserForm = ({ data, handleNextFormStep, updateMultiStepFormValues }: UserFormProps) => {
  const formContext = useContext(FormContext);
  const { formState, register, handleSubmit, control } = useForm<UserData>({
    mode: "onChange",
    // resolver: yupResolver(userFormScema),
  });
  const { errors } = formState;

  const onSubmit = (newValues: UserData, event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("lalala");
    console.log("newValues = ", newValues);
    // step 1: check error validation
    // step 2: update form data using context
    updateMultiStepFormValues(newValues);
    // step 3: go on next step
    handleNextFormStep();
  };

  const handleSubmitClick = () => alert("Clicked");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field: onChange }) => (
          <TextField
            id="firstName"
            label="First name"
            value={data.firstName}
            autoComplete="firstName"
            margin="normal"
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
            fullWidth
            autoFocus
            error={Boolean(errors.firstName)}
            helperText={Boolean(errors.firstName) && "First name is a required field"}
          />
        )}
      />

      <TextField
        {...register}
        id="lastName"
        label="Last name"
        autoComplete="lastName"
        margin="normal"
        fullWidth
        autoFocus
        error={Boolean(errors.lastName)}
        helperText={Boolean(errors.lastName) && "Last name is a required field"}
      />

      <TextField
        {...register}
        id="age"
        label="Age"
        margin="normal"
        fullWidth
        type="number"
        autoFocus
        error={Boolean(errors.age)}
        helperText={Boolean(errors.age) && "Age is a required field"}
      />

      <Button variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
        Next
      </Button>
    </form>
  );
};

export default UserForm;
