import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = {
  data: UserData;
};

const UserForm = ({ data }: UserFormProps) => {
  const { formState, register } = useForm<UserData>({
    mode: "onChange",
  });
  const { errors } = formState;

  return (
    <>
      <TextField
        id="firstName"
        label="First name"
        value={data.firstName}
        autoComplete="firstName"
        margin="normal"
        fullWidth
        autoFocus
        error={Boolean(errors.firstName)}
        helperText={Boolean(errors.firstName) && "First name is a required field"}
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
    </>
  );
};

export default UserForm;
