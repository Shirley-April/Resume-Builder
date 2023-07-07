import {
  Stack,
  Typography,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
// import { props } from "../Resume/props";

// import ThemeProvider from "@mui/material";

const Preview = ({ props }) => {
  console.log("PP", props);
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
        fontSize: 11,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack border={1} p={3}>
        <Stack>
          <Typography variant="h1">{props.contact.name}</Typography>
          <Typography>{props.contact.jobTitle}</Typography>
        </Stack>
        <Box pt={2}>
          <Grid container>
            <Grid item md={5} xs={4}>
              <Stack spacing={1}>
                {/* CONTACT */}
                <Stack>
                  <Typography variant="h2">Contact</Typography>
                  <Typography>{props.contact.email}</Typography>
                  <Typography>{props.contact.github}</Typography>
                  <Typography>{props.contact.phone}</Typography>
                </Stack>

                {/* SKILLS */}
                <Stack>
                  <Typography variant="h2">Skills</Typography>
                  {props.skills.split("\n").map((skill) => (
                    <Typography key={skill}>• {skill}</Typography>
                  ))}
                </Stack>

                {/* EDUCATION */}
                <Stack>
                  <Typography variant="h2">Education</Typography>
                  <Stack spacing={1}>
                    {props.education.map((edu, index) => (
                      <Box key={index}>
                        <Typography>{edu.school}</Typography>
                        <Typography>{edu.fieldOfStudy}</Typography>
                        {/* <Typography sx={{fontSize: 10}}>{edu.}</Typography> */}
                      </Box>
                    ))}
                  </Stack>
                </Stack>

                {/* REFEREES */}
                {/* <Stack>
                  <Typography variant="h2">REFEREES</Typography>
                  {props.referees.map((referee, index) => (
                    <Box key={index}>
                      <Typography>{referee.name}</Typography>
                      <Typography>{referee.title}</Typography>
                      <Typography> {referee.company}</Typography>
                    </Box>
                  ))}
                </Stack> */}
              </Stack>
            </Grid>
            <Grid item md={7} xs={8}>
              <Stack spacing={1}>
                <Stack>
                  <Typography variant="h2">Profile</Typography>
                  <Typography>{props.summary}</Typography>
                </Stack>

                {/* EXPERIENCE */}
                <Stack>
                  <Typography variant="h2">Experience</Typography>
                  <Stack spacing={1}>
                    {props.workExperience.map((experience, index) => (
                      <Box key={index}>
                        <Typography variant="h3">
                          {experience.jobTitle} | {experience.company}
                        </Typography>

                        {experience.description?.split("\n")
                          .map((duty, index) => (
                            <Typography key={index}>• {duty}</Typography>
                          ))}
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default Preview;
