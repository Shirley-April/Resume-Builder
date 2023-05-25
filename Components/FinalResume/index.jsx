import { Grid, Stack, Typography } from "@mui/material";
import Resume from "../../Atoms/Resume";

import Preview from "../../Atoms/Preview";

const FinalResume = ({ resume }) => {
  console.log("Props", resume);
  return (
    <Stack alignItems="center" justifyContent="center" border={5} px={6}>
      <Typography>Final Preview</Typography>
      <Grid container  justifyContent="center">
        <Grid item md={6}>
            <Preview props={resume} />
        </Grid>
        <Grid item md={5}>
            <Typography>Actions here</Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FinalResume;
