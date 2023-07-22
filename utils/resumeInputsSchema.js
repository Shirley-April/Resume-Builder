import * as yup from "yup";
7
export const resumeInputsSchema = yup.object({
  contact: yup.object({
    jobTitle: yup.string().required("Job title is required"),
    name: yup.string().required("Full name is required"),
    email: yup.string().required("Email is required"),
    phone: yup.string().required("Phone is required"),
    github: yup.string(),
    linkedin: yup.string(),
  }),
  summary: yup.string().required("Professional summary is required"),
  newExperience: yup.object({
    jobTitle: yup.string().required("Job title is required"),
    company: yup.string().required("Company is required"),
    description: yup.string().required("Work description is required"),

  })
});
