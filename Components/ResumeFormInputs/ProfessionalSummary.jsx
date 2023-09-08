import { Box, Typography } from "@mui/material";

import FormikCustomInput from "../../Atoms/FormikCustomInput";

const ProfessionalSummary = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        Professional Summary
      </Typography>
      <FormikCustomInput multiline rows={4} name="summary" />
    </Box>
  );
};

export default ProfessionalSummary;
