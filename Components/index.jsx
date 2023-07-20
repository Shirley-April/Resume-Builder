import { useDispatch, useSelector } from "react-redux";

import { Form, Formik } from "formik";

import dayjs from "dayjs";

import resumeSlice, {
  addContact,
  addSummary,
  addSkills,
  addEducation,
} from "../features/resumeSlice";

import { Box, Button, Grid, Stack } from "@mui/material";

import ResumePreview from "./ResumePreview";

import Contact from "./ResumeFormInputs/Contact";
import ProfessionalSummary from "./ResumeFormInputs/ProfessionalSummary";
import Experience from "./ResumeFormInputs/Experience";
import Skills from "./ResumeFormInputs/Skills";
import Education from "./ResumeFormInputs/Education";

const Resume = () => {
  const dispatch = useDispatch();

  const resumeValues = useSelector((state) => state.resume);

  const initialValues = {
    contact: {
      jobTitle: "",
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    },
    summary: "",
    workExperience: resumeValues.workExperience || [],
    newExperience: {
      jobTitle: "",
      company: "",
      description: "",
    },
    skills: "•",
    education: {
      school: "",
      fieldOfStudy: "",
      startDate: dayjs("Jan 2023"),
      endDate: dayjs("Dec 2023"),
    },
  };

  const handleSubmit = (values) => {
    dispatch(addContact(values.contact));
    dispatch(addSummary(values.summary));
    dispatch(addEducation(values.education));
    dispatch(addSkills(values.skills));
  };

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <Grid container sx={{ background: "#dcebf7" }} spacing={2}>
              <Grid item md={7} border={1}>
                <Stack sx={{ background: "#ffffff" }}>
                  <Stack p={8} spacing={2}>
                    <Contact />
                    <ProfessionalSummary />
                    <Experience
                      values={values.workExperience}
                      newExperience={values.newExperience}
                    />
                    <Skills />
                    <Education
                      setFieldValue={setFieldValue}
                      values={values.education}
                    />

                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={5}>
                <Stack sx={{ background: "#ffffff" }}>
                  <ResumePreview inputs={initialValues} />
                </Stack>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Resume;
