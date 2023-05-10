import { Box, Typography } from "@mui/material";

import TextFieldCustomInput from "../../Atoms/TextFieldCustomInput";

const ProfessionalSummary = ({ setInputs }) => {
  const handleChangeSummary = (event) => {
    const value = event.target.value;
    setInputs((prevState) => ({
      ...prevState,
      summary: value,
    }));
  };

  return (
    <Box>
      <Typography variant="h5">Professional Summary</Typography>
      <TextFieldCustomInput multiline rows={4} onChange={handleChangeSummary} />
    </Box>
  );
};

export default ProfessionalSummary;
