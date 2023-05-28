import { Button, Input, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { formWrapperContainer } from "./styles";
import ActionButtons from "./ActionButtons";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = {
  data: UserData;
  updateFormData: (values: UserData) => void;
  handleCancelFormStep: () => void;
};

const multiStepFormScema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required(),
});

const UserForm = ({ data, updateFormData, handleCancelFormStep }: UserFormProps) => {
  const { register, formState, handleSubmit } = useForm<UserData>({
    mode: "onChange",
    defaultValues: {
      firstName: data.firstName !== "" ? data.firstName : "",
      lastName: data.lastName !== "" ? data.lastName : "",
      age: data.age !== "" ? data.age : "",
    },
    resolver: yupResolver(multiStepFormScema),
  });

  const { errors } = formState;

  const onSubmitSuccess = (data: UserData) => {
    updateFormData(data);
  };

  return (
    <>
      {/* // <section css={formWrapperContainer}>
    //   <form onSubmit={handleSubmit(onSubmitSuccess)}> */}
      <TextField
        {...register("firstName")}
        label="First name"
        autoComplete="firstName"
        margin="normal"
        inputProps={{ form: "userInfo" }}
        fullWidth
        autoFocus
        error={Boolean(errors.firstName)}
        helperText={Boolean(errors.firstName) && "First name is a required field"}
      />

      <TextField
        {...register("lastName")}
        label="Last name"
        autoComplete="lastName"
        margin="normal"
        inputProps={{ form: "userInfo" }}
        fullWidth
        autoFocus
        error={Boolean(errors.lastName)}
        helperText={Boolean(errors.lastName) && "Last name is a required field"}
      />

      <TextField
        {...register("age")}
        id="age"
        label="Age"
        margin="normal"
        inputProps={{ form: "userInfo" }}
        fullWidth
        autoFocus
        error={Boolean(errors.age)}
        helperText={Boolean(errors.age) && "Age is a required field"}
      />
      {/* <div className="form-action-buttons">
        <ActionButtons /> */}
      {/* <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleCancelFormStep}>
            Cancel
            </Button>
            
            <Button variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
            Next
          </Button> */}
      {/* </div> */}
    </>
    //   </form>
    // </section>
  );
};

export default UserForm;
