import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { formWrapperContainer } from "./styles";

type AddressData = {
  street: string;
  city: string;
  zip: string;
};

type AddressFormProps = {
  data: AddressData;
  updateFormData: (values: AddressData) => void;
  handleCancelFormStep: () => void;
  handlePreviousFormStep: () => void;
};

const multiStepFormScema = yup.object().shape({
  street: yup.string().required(),
  city: yup.string().required(),
  zip: yup.string().required(),
});

const AddressForm = ({
  data,
  updateFormData,
  handleCancelFormStep,
  handlePreviousFormStep,
}: AddressFormProps) => {
  const { register, formState, handleSubmit } = useForm<AddressData>({
    mode: "onChange",
    defaultValues: {
      street: data.street !== "" ? data.street : "",
      city: data.city !== "" ? data.city : "",
      zip: data.zip !== "" ? data.zip : "",
    },
    resolver: yupResolver(multiStepFormScema),
  });

  const { errors } = formState;

  const onSubmitSuccess = (data: AddressData) => {
    updateFormData(data);
  };

  return (
    <section css={formWrapperContainer}>
      <form onSubmit={handleSubmit(onSubmitSuccess)}>
        <TextField
          {...register("street")}
          label="Street"
          autoComplete="street"
          margin="normal"
          fullWidth
          autoFocus
          error={Boolean(errors.street)}
          helperText={Boolean(errors.street) && "Street name is a required field"}
        />

        <TextField
          {...register("city")}
          label="City"
          autoComplete="city"
          margin="normal"
          fullWidth
          autoFocus
          error={Boolean(errors.city)}
          helperText={Boolean(errors.city) && "City is a required field"}
        />

        <TextField
          {...register("zip")}
          label="Zip"
          margin="normal"
          fullWidth
          type="number"
          autoFocus
          error={Boolean(errors.zip)}
          helperText={Boolean(errors.zip) && "Zip is a required field"}
        />

        <div className="form-action-buttons">
          <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleCancelFormStep}>
            Cancel
          </Button>

          <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handlePreviousFormStep}>
            Back
          </Button>

          <Button variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
            Next
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddressForm;
