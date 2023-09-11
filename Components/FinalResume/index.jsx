import { Grid, Stack, Typography, Button, createTheme } from "@mui/material";
import Resume from "../../Atoms/Resume";

const FinalResume = ({ resume }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 28,
        fontWeight: "bold",
      },
      h2: {
        fontSize: 16,
        fontWeight: "bold",
      },
      h3: {
        fontSize: 14,
        fontWeight: "bold",
      },
      body1: {
        fontSize: 14,
      },
      subtitlebold: {
        fontWeight: "bold",
        fontSize: 10,
      },
      listFont: {
        fontSize: 14
      }
    },
  });
  const sections = ["Contact", "Summary", "Experience", "Education", "Skills"];

  return (
    <Stack alignItems="center" justifyContent="center" px={20}>
      <Typography>Resume Name</Typography>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item md={9}>
          <Resume resume={resume} theme={theme}/>
        </Grid>
        <Grid item md={3}>
          <Stack height="100%">
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
