import { useRouter } from "next/router";

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

import LivePreview from "./LivePreview";

import Contact from "./ResumeFormInputs/Contact";
import ProfessionalSummary from "./ResumeFormInputs/ProfessionalSummary";
import Experience from "./ResumeFormInputs/Experience";
import Skills from "./ResumeFormInputs/Skills";
import Education from "./ResumeFormInputs/Education";

import { resumeInputsSchema } from "../utils/resumeInputsSchema";
import { useEffect } from "react";

const Resume = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { edit } = router.query;

  const resumee = useSelector((state) => state.resume);

  let id;

  resumee.length > 0 ? (id = resumee.at(-1).id) : null;

  useEffect(() => {
    if (!edit) {
      router.push({
        pathname: "/create-resume",
        query: { id: id },
      });
    }
  }, [id]);

  const resume = useSelector((state) =>
    state.resume.find((resume) => resume.id === id)
  );

  const initialValues = {
    contact: resume?.contact || {
      jobTitle: "",
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    },
    summary: resume?.summary || "",
    workExperience: resume?.workExperience || [],
    newExperience: {
      jobTitle: "",
      company: "",
      description: "",
      startDate: dayjs(),
      endDate: dayjs(),
    },
    skills: resume?.skills || "",
    education: {
      school: "",
      fieldOfStudy: "",
      startDate: dayjs(),
      endDate: dayjs(),
    },
  };

  const handleSubmit = (values) => {
    dispatch(addContact({ ...values.contact, resumeId: id }));
    dispatch(addSummary({ summary: values.summary, resumeId: id }));
    // dispatch(addEducation(values.education));
    dispatch(addSkills({ skills: values.skills, resumeId: id }));
    router.push({
      pathname: "/final-resume",
      query: { id },
    });
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // enableReinitialize={true}
        // validationSchema={resumeInputsSchema}
      >
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
                    {/* <Education
                      setFieldValue={setFieldValue}
                      values={values.education}
                    /> */}

                    <Button variant="teal" type="submit">
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={5}>
                <Stack sx={{ background: "#ffffff" }}>
                  <LivePreview resume={values} />
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
