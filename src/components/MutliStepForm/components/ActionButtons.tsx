import { Button } from "@mui/material";

type ActionButtonsProps = {
  handleCancelFormStep?: () => void;
  handlePreviousFormStep?: () => void;
};

const ActionButtons = ({ handleCancelFormStep, handlePreviousFormStep }: ActionButtonsProps) => {
  return (
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
  );
};

export default ActionButtons;
