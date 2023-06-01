import { Grid, Stack, Typography, Button } from "@mui/material";
import Resume from "../../Atoms/Resume";

import Preview from "../../Atoms/Preview";

const FinalResume = ({ resume }) => {
  const sections = ["Contact", "Summary", "Experience", "Education", "Skills"];
  console.log("Props", resume);
  return (
    <Stack alignItems="center" justifyContent="center" px={20}>
      <Typography>Resume Name</Typography>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item md={9}>
          <Preview props={resume} />
        </Grid>
        <Grid item md={3} >
          <Stack height="100%" >
            <Stack>
              <Typography sx={{ fontWeight: "bold" }}>
                RESUME SECTIONS
              </Typography>
              {sections.map((section, index) => (
                <Typography key={index}>{section}</Typography>
              ))}
            </Stack>
            <Stack>
              <Button variant="contained">Download</Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FinalResume;
