import { useState } from "react";

import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import FormikCustomInput from "../../Atoms/FormikCustomInput";

const ResumeFormInputs = () => {
  const [inputs, setInputs] = useState({
    contact: {
      "Job Title": "",
      Name: "Shirley",
      Phone: "",
      Email: "",
      LinkedIn: "",
      GitHub: "",
    },
    summary: "",
    workExperience: {
      "Job Title": "",
      Company: "",
      description: "NA",
    },
  });

  const handleChangeContact = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({
      ...values,
      contact: {
        ...values.contact,
        [name]: value,
      },
    }));
  };

  const handleChangeSummary = (event) => {
    const value = event.target.value;
    setInputs((prevState) => ({
      ...prevState,
      summary: value,
    }));
  };

  const handleChangeExperience = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({
      ...prevState,
      workExperience: {
        ...prevState.workExperience,
        [name]: value,
      },
    }));
  };

  console.log("EXPERIENCE::", inputs.workExperience);

  const contactInfo = [
    "Job Title",
    "Name",
    "Phone",
    "Email",
    "LinkedIn",
    "GitHub",
  ];

  const workExperience = ["Job Title", "Company"];

  const experiences = [
    "Collaborated with team member to ensure...",
    "Collaborated with team member to ensure...",
  ];

  const skills = [
    "JavaScript",
    "Next Js",
    "Node Js",
    "Material UI",
    "React native",
  ];

  const education = ["School Name", "Field of study"];

  const handleSubmit = () => {
    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <Stack p={8} spacing={2}>
      {/* Contact Info */}
      <Box>
        <Typography variant="h5">Contact Info</Typography>
        <Grid container spacing={3}>
          {contactInfo.map((contact) => (
            <Grid item xs={12} md={6} key={contact}>
              <Stack spacing={2}>
                <TextField
                  label={contact}
                  onChange={handleChangeContact}
                  name={contact}
                  value={inputs.contact[contact] || ""}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Proffesional Summary */}
      <Box>
        <Typography variant="h5">Professional Summary</Typography>
        <TextField
          rows={4}
          label="Summary"
          multiline
          fullWidth
          onChange={handleChangeSummary}
        />
      </Box>

      {/* Work Experience */}
      <Stack rowGap={3}>
        <Typography variant="h5">Work Experience</Typography>
        <Grid container>
          <Stack width="100%" direction="row" columnGap={3}>
            {workExperience.map((experience) => (
              <Grid item key={experience} md={6} xs={12}>
                <Stack spacing={2}>
                  <TextField
                    name={experience}
                    label={experience}
                    onChange={handleChangeExperience}
                    value={inputs.workExperience[experience]}
                    fullWidth
                  />
                </Stack>
              </Grid>
            ))}
          </Stack>
        </Grid>
        <Box>
          <TextField
            label="Work Description"
            multiline
            fullWidth
            onChange={handleChangeExperience}
            value={inputs.workExperience.description}
            name="description"
          />
        </Box>
        <Button variant="outlined" fullWidth>
          Add Experience
        </Button>
      </Stack>

      {/* Skills */}
      <Stack spacing={2}>
        <Typography variant="h5">Skills</Typography>
        <Box>
          {skills.map((skill) => (
            <Typography key={skill}>{skill}</Typography>
          ))}
        </Box>
      </Stack>

      {/* Education */}
      <Stack>
        <Typography variant="h5">Education</Typography>
        <Grid container spacing={3}>
          {education.map((education) => (
            <Grid item key={education} md={6} xs={12}>
              <TextField
                key={education}
                name={education}
                label={education}
                fullWidth
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
};

export default ResumeFormInputs;

// add experience to store data and clear form
//
