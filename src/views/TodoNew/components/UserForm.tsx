import FormWrapper from "@components/FormWrapper/FormWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
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

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  const { formState } = useForm<UserData>({
    mode: "onChange",
    resolver: yupResolver(userFormScema),
  });
  const { errors } = formState;

  const handleSubmit = () => {
    updateFields;
  };

  return (
    <FormWrapper title="User Details">
      <form onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          label="First name"
          autoComplete="firstName"
          margin="normal"
          fullWidth
          autoFocus
          value={firstName}
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) && "First name is a required field"}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />

        <TextField
          id="lastName"
          label="Last name"
          autoComplete="lastName"
          margin="normal"
          fullWidth
          autoFocus
          value={lastName}
          error={Boolean(errors.lastName)}
          helperText={Boolean(errors.lastName) && "Last name is a required field"}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />

        <TextField
          id="age"
          label="Age"
          margin="normal"
          fullWidth
          type="number"
          autoFocus
          value={age}
          error={Boolean(errors.age)}
          helperText={Boolean(errors.age) && "Age is a required field"}
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </form>
    </FormWrapper>
  );
}
