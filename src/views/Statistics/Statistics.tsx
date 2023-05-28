import { FC } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type UserData = {
  firstName: string;
};

const multiStepFormScema = yup.object().shape({
  firstName: yup.string().required(),
});

const Statistics: FC = () => {
  const { register, formState, handleSubmit } = useForm<UserData>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
    },
    resolver: yupResolver(multiStepFormScema),
  });

  const { errors } = formState;

  const onSubmit = (data: UserData) => {
    console.log(data);
    console.log("form is submitted");
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="First name"
          {...register("firstName")}
          autoComplete="firstName"
          margin="normal"
          fullWidth
          autoFocus
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) && "First name is a required field"}
        />

        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth>
          Next
        </Button>
      </form>
    </section>
  );
};

export default Statistics;
