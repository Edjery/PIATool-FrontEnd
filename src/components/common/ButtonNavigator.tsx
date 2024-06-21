import { Box, Button } from "@mui/material";
import { btnBack, btnFinish, btnNext } from "../../values/string";

interface Props {
  activeStep: number;
  onNext: () => void;
  onBack: () => void;
  stepsComponentsLength: number;
}

const ButtonStepsNavigator = ({
  activeStep,
  onNext,
  onBack,
  stepsComponentsLength,
}: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "end",
        px: "1vh",
        py: "2vh",
      }}
    >
      <Button variant="contained" disabled={activeStep === 0} onClick={onBack}>
        {btnBack}
      </Button>
      <Button variant="contained" onClick={onNext}>
        {activeStep === stepsComponentsLength - 1 ? btnFinish : btnNext}
      </Button>
    </Box>
  );
};

export default ButtonStepsNavigator;
