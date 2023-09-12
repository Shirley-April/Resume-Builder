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
        fontSize: 14,
      },
      listFont: {
        fontSize: 14,
      },
    },
  });
  const sections = ["Contact", "Summary", "Experience", "Education", "Skills"];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      px={{ md: 20, xs: 2 }}
      pb={10}
      pt={5}
    >
      <Typography>Resume Name</Typography>
      <Grid container justifyContent="center" spacing={6}>
        <Grid item md={3}>
          <Stack height="100%">
            <Stack >
              <Typography sx={{ fontWeight: "bold" }}>
                RESUME SECTIONS
              </Typography>
              <Stack spacing={2} >
                {sections.map((section, index) => (
                  <Typography key={index} sx={{borderBottom: 1}}>{section}</Typography>
                ))}
              </Stack>
            </Stack>
            <Stack pt={3}>
              <Button variant="contained">Download</Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={9} xs={12}>
          <Resume resume={resume} theme={theme} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FinalResume;
