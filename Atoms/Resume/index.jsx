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

const Resume = ({ resume }) => {
  return (
    <Stack border={1} p={2}>
      <Stack>
        <Typography sx={{ fontWeight: "bold" }}>
          {resume.contact.name}
        </Typography>
        <Typography sx={{ fontSize: 10 }}>{resume.contact.jobTitle}</Typography>
      </Stack>
      <Box pt={2}>
        <Grid container>
          <Grid item md={4} xs={4}>
            <Stack spacing={1}>
              {/* CONTACT */}
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                  CONTACT
                </Typography>
                <Typography sx={{ fontSize: 10 }}>
                  {resume.contact.email}
                </Typography>
                <Typography sx={{ fontSize: 10 }}>
                  {resume.contact.github}
                </Typography>
                <Typography sx={{ fontSize: 10 }}>
                  {resume.contact.phone}
                </Typography>
              </Stack>

              {/* SKILLS */}
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                  SKILLS
                </Typography>
                {/* {resume.skills.map((skill) => (
                  <Typography sx={{ fontSize: 10 }} key={skill}>
                    • {skill}
                  </Typography>
                ))} */}
              </Stack>

              {/* EDUCATION */}
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                  EDUCATION
                </Typography>
                <Stack spacing={1}>
                  {data.education.map((edu, index) => (
                    <Box key={index}>
                      <Typography sx={{ fontWeight: "bold", fontSize: 10 }}>
                        {edu.school}
                      </Typography>
                      <Typography sx={{ fontSize: 10 }}>
                        {edu.fieldOfStudy}
                      </Typography>
                      {/* <Typography sx={{fontSize: 10}}>{edu.}</Typography> */}
                    </Box>
                  ))}
                </Stack>
              </Stack>

              {/* REFEREES */}
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                  REFEREES
                </Typography>
                {data.referees.map((referee, index) => (
                  <Box key={index}>
                    <Typography sx={{ fontSize: 10, fontWeight: "bold" }}>
                      {referee.name}
                    </Typography>
                    <Typography sx={{ fontSize: 10 }}>
                      {referee.title}
                    </Typography>
                    <Typography sx={{ fontSize: 10 }}>
                      {" "}
                      {referee.company}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={8} xs={8}>
            <Stack spacing={1}>
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                  PROFILE
                </Typography>
                <Typography sx={{ fontSize: 10 }}>{resume.summary}</Typography>
              </Stack>

              {/* EXPERIENCE */}
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                  EXPERIENCE
                </Typography>
                <Stack spacing={1}>
                  {resume.workExperience.map((experience, index) => (
                    <Box key={index}>
                      <Typography sx={{ fontSize: 10 }}>
                        {experience.startDate} - {experience.endDate}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 10,
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          color: "#181818",
                        }}
                      >
                        {experience.jobTitle} | {experience.company}
                      </Typography>
                      <List
                        disablePadding
                        dense={true}
                        sx={{
                          fontSize: 10,
                          listStyleType: "disc",
                          ml: "0.8rem",
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
                                primaryTypographyProps={{ fontSize: "10px" }}
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
              <Stack>
                {resume.newExperience.jobTitle !== "" && (
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#181818",
                    }}
                  >
                    {resume.newExperience.jobTitle} |{" "}
                    {resume.newExperience.company}
                  </Typography>
                )}

                {resume.newExperience.description !== "" && (
                  <List
                    disablePadding
                    dense={true}
                    sx={{ fontSize: 10, listStyleType: "disc", ml: "0.8rem" }}
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
                            primaryTypographyProps={{ fontSize: "10px" }}
                            primary={desc}
                          />
                        </ListItem>
                      ))}
                  </List>
                )}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Resume;
