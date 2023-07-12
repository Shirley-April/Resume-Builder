import { Box, Typography } from "@mui/material";

import TextFieldCustomInput from "../../Atoms/TextFieldCustomInput";
import FormikCustomInput from "../../Atoms/FormikCustomInput";

const ProfessionalSummary = ({ setInputs }) => {
  // const handleChangeSummary = (event) => {
  //   const value = event.target.value;
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     summary: value,
  //   }));
  // };

  return (
    <Box>
      <Typography variant="h5">Professional Summary</Typography>
      <FormikCustomInput multiline rows={4} name="summary" />
    </Box>
  );
};

export default ProfessionalSummary;
