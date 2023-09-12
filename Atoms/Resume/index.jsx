import {
  Grid,
  Stack,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { data } from "./data";

import { useRouter } from "next/router";

import { ThemeProvider } from "@mui/material";

import dayjs from "dayjs";

const Resume = ({ resume, theme }) => {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      {resume !== undefined && (
        <Stack border={1} p={2}>
          <Stack>
            <Typography variant="h1">{resume.contact.name}</Typography>
            <Typography>{resume.contact.jobTitle}</Typography>
          </Stack>
          <Box pt={2}>
            <Grid container>
              <Grid item md={4} xs={4}>
                <Stack spacing={0}>
                  {/* CONTACT */}
                  <Typography variant="h2">CONTACT</Typography>
                  <Stack spacing={0.5}>
                    <Stack>
                      <Typography variant="subtitlebold">Email</Typography>
                      <Typography>{resume.contact.email}</Typography>
                    </Stack>
                    <Stack>
                      <Typography variant="subtitlebold">Github</Typography>
                      <Typography>{resume.contact.github}</Typography>
                    </Stack>
                    <Stack>
                      <Typography variant="subtitlebold">Phone</Typography>
                      <Typography>{resume.contact.phone}</Typography>
                    </Stack>
                  </Stack>

                  {/* SKILLS */}
                  <Stack pt={1}>
                    <Typography variant="h2">SKILLS</Typography>

                    <List
                      disablePadding
                      dense={true}
                      sx={{
                        fontSize: 10,
                        listStyleType: "disc",
                        ml: "1.2rem",
                      }}
                    >
                      {resume.skills.split("\n").map((skill, index) => (
                        <ListItem
                          key={index}
                          disablePadding
                          disableGutters
                          sx={{
                            display: "list-item",
                          }}
                        >
                          <ListItemText
                            primaryTypographyProps={{
                              fontSize:
                                router.pathname === "/create-resume" ? 10 : 14,
                            }}
                            primary={skill}
                            sx={{ my: 0 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Stack>

                  {/* EDUCATION */}
                  <Stack pt={1}>
                    <Typography variant="h2">EDUCATION</Typography>
                    <Stack spacing={1}>
                      {data.education.map((edu, index) => (
                        <Box key={index}>
                          <Typography sx={{ fontWeight: "bold", fontSize: 10 }}>
                            {edu.school}
                          </Typography>
                          <Typography>{edu.fieldOfStudy}</Typography>
                          {/* <Typography sx={{fontSize: 10}}>{edu.}</Typography> */}
                        </Box>
                      ))}
                    </Stack>
                  </Stack>

                  {/* REFEREES */}
                  <Stack>
                    <Typography variant="h2">REFEREES</Typography>
                    {data.referees.map((referee, index) => (
                      <Box key={index}>
                        <Typography sx={{ fontSize: 10, fontWeight: "bold" }}>
                          {referee.name}
                        </Typography>
                        <Typography>{referee.title}</Typography>
                        <Typography> {referee.company}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={8} xs={8}>
                <Stack spacing={1}>
                  <Stack>
                    <Typography variant="h2">PROFILE</Typography>
                    <Typography>{resume.summary}</Typography>
                  </Stack>

                  {/* EXPERIENCE */}
                  <Stack>
                    <Typography variant="h2">EXPERIENCE</Typography>
                    <Stack spacing={1}>
                      {resume.workExperience.map((experience, index) => (
                        <Box key={index}>
                          <Typography>
                            {experience.startDate} - {experience.endDate}
                          </Typography>
                          <Typography variant="h3">
                            {experience.jobTitle} | {experience.company}
                          </Typography>
                          <List
                            disablePadding
                            dense={true}
                            sx={{
                              fontSize: 12,
                              listStyleType: "disc",
                              ml: "1.7rem",
                            }}
                          >
                            {experience.description
                              .split("\n")
                              .map((desc, index) => (
                                <ListItem
                                  key={index}
                                  disablePadding
                                  disableGutters
                                  sx={{
                                    display: "list-item",
                                  }}
                                >
                                  <ListItemText
                                    primaryTypographyProps={{
                                      fontSize:
                                        router.pathname === "/create-resume"
                                          ? 10
                                          : 14,
                                    }}
                                    primary={desc}
                                    sx={{ my: 0 }}
                                  />
                                </ListItem>
                              ))}
                          </List>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                  {/* NEW EXPERIENCE */}
                  {router.pathname === "/create-resume" && (
                    <Stack>
                      {(resume.newExperience.jobTitle !== "" ||
                        resume.newExperience.company) && (
                        <Box>
                          <Typography>
                            {dayjs(resume.newExperience.startDate).format(
                              "MMMM YYYY"
                            )}{" "}
                            -{" "}
                            {dayjs(resume.newExperience.endDate).format(
                              "MMMM YYYY"
                            )}
                          </Typography>
                          <Typography variant="h3">
                            {resume.newExperience.jobTitle} |{" "}
                            {resume.newExperience.company}
                          </Typography>
                        </Box>
                      )}

                      {resume.newExperience.description !== "" && (
                        <List
                          disablePadding
                          dense={true}
                          sx={{
                            fontSize: 10,
                            listStyleType: "disc",
                            ml: "0.8rem",
                          }}
                        >
                          {resume.newExperience.description
                            .split("\n")
                            .map((desc, index) => (
                              <ListItem
                                key={index}
                                disablePadding
                                disableGutters
                                sx={{ display: "list-item" }}
                              >
                                <ListItemText
                                  primaryTypographyProps={{
                                    fontSize:
                                      router.pathname === "/create-resume"
                                        ? 10
                                        : 26,
                                  }}
                                  primary={desc}
                                />
                              </ListItem>
                            ))}
                        </List>
                      )}
                    </Stack>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      )}
    </ThemeProvider>
  );
};

export default Resume;
