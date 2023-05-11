import { Grid, Stack, Typography, Box } from "@mui/material";
import { data } from "./data";

const Resume = ({ inputs }) => {

  return (
    <Stack border={1} p={2}>
      <Stack>
        <Typography sx={{ fontWeight: "bold" }}>{data.contact.name}</Typography>
        <Typography sx={{fontSize: 10}}>{data.contact.jobTitle}</Typography>
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
                  {data.contact.email}
                </Typography>
                <Typography sx={{ fontSize: 10 }}>
                  {data.contact.github}
                </Typography>
                <Typography sx={{ fontSize: 10 }}>
                  {data.contact.phone}
                </Typography>
              </Stack>

              {/* SKILLS */}
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                  SKILLS
                </Typography>
                {data.skills.map((skill) => (
                  <Typography sx={{ fontSize: 10 }} key={skill}>
                    • {skill}
                  </Typography>
                ))}
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
                <Typography sx={{ fontSize: 10 }}>{data.profile}</Typography>
              </Stack>

              {/* EXPERIENCE */}
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                  EXPERIENCE
                </Typography>
                <Stack spacing={1}>
                  {data.experience.map((experience, index) => (
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
                      {experience.description.map((duty, index) => (
                        <Typography sx={{ fontSize: 10 }} key={index}>
                          • {duty}
                        </Typography>
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
  );
};

export default Resume;
