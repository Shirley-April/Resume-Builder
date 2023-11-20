import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [];

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addResume: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({
        resumeName,
        contact,
        summary,
        workExperience,
        skills,
        education,
      }) {
        return {
          payload: {
            id: nanoid(),
            resumeName: resumeName,
            contact: contact,
            summary: summary,
            workExperience: workExperience,
            skills: skills,
            education: education,
          },
        };
      },
    },

    deleteResume(state, action) {
      const { resumeId } = action.payload;

      const existingResume = state.findIndex((resume) => resume.id === resumeId);

      if (existingResume) {
        state.splice(existingResume, 1);
      }
    },

    addContact(state, action) {
      const { name, phone, email, github, jobTitle, linkedIn, resumeId } =
        action.payload;

      const existingResume = state.find((resume) => resume.id === resumeId);

      if (existingResume) {
        existingResume.contact = {
          ...existingResume.contact,
          name,
          phone,
          email,
          github,
          jobTitle,
          linkedIn,
        };
      }
    },
    addSummary(state, action) {
      const { resumeId, summary } = action.payload;

      const existingResume = state.find((resume) => resume.id === resumeId);

      if (existingResume) {
        existingResume.summary = summary;
      }
    },
    addExperience: {
      reducer(state, action) {
        const { resumeId } = action.payload;
        const resume = state.find((item) => item.id === resumeId);

        if (resume) {
          resume.workExperience.push(action.payload);
        }
      },
      prepare({
        jobTitle,
        description,
        company,
        startDate,
        endDate,
        resumeId,
      }) {
        return {
          payload: {
            id: nanoid(),
            jobTitle,
            description,
            company,
            startDate,
            endDate,
            resumeId,
          },
        };
      },
    },
    editExperience(state, action) {
      const {
        id,
        jobTitle,
        company,
        description,
        startDate,
        endDate,
        resumeId,
      } = action.payload;

      const existingResume = state.find((resume) => resume.id === resumeId);

      if (existingResume) {
        const existingExperience = existingResume.workExperience.find(
          (exp) => exp.id === id
        );

        if (existingExperience) {
          existingExperience.jobTitle = jobTitle;
          existingExperience.company = company;
          existingExperience.description = description;
          existingExperience.startDate = startDate;
          existingExperience.endDate = endDate;
          existingExperience.id = id;
        }
      }
    },
    deleteExperience(state, action) {
      const { resumeId, id } = action.payload;

      const existingResume = state.find((resume) => resume.id === resumeId);

      if (existingResume) {
        const existingExperience = existingResume.workExperience.findIndex(
          (exp) => exp.id === id
        );

        if (existingExperience !== -1) {
          existingResume.workExperience.splice(existingExperience, 1);
        }
      }
    },
    addSkills(state, action) {
      const { resumeId, skills } = action.payload;

      const existingResume = state.find((resume) => resume.id === resumeId);

      if (existingResume) {
        existingResume.skills = skills;
      }
    },
    addEducation(state, action) {
      return { ...state, education: state.education.concat(action.payload) };
    },
  },
});

export const {
  addResume,
  deleteResume,
  addExperience,
  editExperience,
  addContact,
  addSummary,
  addSkills,
  addEducation,
  deleteExperience,
} = resumeSlice.actions;

export default resumeSlice.reducer;
