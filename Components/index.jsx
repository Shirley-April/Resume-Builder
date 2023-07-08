import { useState, useMemo } from "react";
import dayjs from "dayjs";

import debounce from "lodash.debounce";

import { Box, Button, Grid, Stack } from "@mui/material";

import ResumePreview from "./ResumePreview";

import Contact from "./ResumeFormInputs/Contact";
import ProfessionalSummary from "./ResumeFormInputs/ProfessionalSummary";
import Experience from "./ResumeFormInputs/Experience";
import Skills from "./ResumeFormInputs/Skills";
import Education from "./ResumeFormInputs/Education";

import { Form, Formik } from "formik";

const Resume = () => {
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
    workExperience: {
      jobTitle: "",
      company: "",
      description: "NA",
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
    alert(JSON.stringify(values, null, 2));
  };

  // console.log("EDUCATION", inputs.education);

  // const setInputs = useMemo(() => debounce(setInput, 50));

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            {console.log("Formik Values::", values)}
            <Grid container sx={{ background: "#dcebf7" }} spacing={2}>
              <Grid item md={7} border={1}>
                <Stack sx={{ background: "#ffffff" }}>
                  <Stack p={8} spacing={2}>
                    <Contact setInputs={setInputs} />
                    <ProfessionalSummary setInputs={setInputs} />
                    <Experience setInputs={setInputs} inputs={inputs} />
                    <Skills setInputs={setInputs} inputs={inputs} />
                    <Education
                      setFieldValue={setFieldValue}
                      values={values.education}
                      setInputs={setInputs}
                      inputs={inputs}
                    />

                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={5}>
                <Stack sx={{ background: "#ffffff" }}>
                  <ResumePreview inputs={inputs} />
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
