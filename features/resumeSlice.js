import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  contact: {
    jobTitle: "",
    name: "Shirley",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  },
  summary: "",
  workExperience: [],
  skills: "",
  education: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addContact(state, action) {
      return { ...state, contact: action.payload };
    },
    // addContact: {
    //   reducer(state, action) {
    //     return { ...state, contact: action.payload };
    //   },
    //   prepare(jobTitle, name, phone, email, linkedin, github) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         jobTitle,
    //         name,
    //         phone,
    //         email,
    //         linkedin,
    //         github,
    //       },
    //     };
    //   },
    // },
    editContact(state, action) {
      return {};
    },
    addSummary(state, action) {
      return { ...state, summary: action.payload };
    },
    addExperience: {
      reducer(state, action) {
        return {
          ...state,
          workExperience: state.workExperience.concat(action.payload),
        };
      },
      prepare({ jobTitle, description, company, startDate, endDate }) {
        return {
          payload: {
            id: nanoid(),
            jobTitle,
            description,
            company,
            startDate,
            endDate,
          },
        };
      },
    },
    editExperience(state, action) {
      const { id, jobTitle, company, description, startDate, endDate } =
        action.payload;
      const existingExperience = state.workExperience.find(
        (exp) => exp.id === id
      );

      if (existingExperience) {
        existingExperience.jobTitle = jobTitle;
        existingExperience.company = company;
        existingExperience.description = description;
        existingExperience.startDate = startDate;
        existingExperience.endDate = endDate;
      }
    },
    deleteExperience(state, action) {
      const existingExperience = state.workExperience.findIndex(
        (exp) => exp.id === action.payload.id
      );

      if (existingExperience !== -1) {
        state.workExperience.splice(existingExperience, 1);
      }
    },
    addSkills(state, action) {
      return { ...state, skills: action.payload };
    },
    addEducation(state, action) {
      return { ...state, education: state.education.concat(action.payload) };
    },
  },
});

export const {
  addExperience,
  editExperience,
  addContact,
  addSummary,
  addSkills,
  addEducation,
  deleteExperience,
} = resumeSlice.actions;
export default resumeSlice.reducer;
