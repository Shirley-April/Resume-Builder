import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import { Stack, Typography, Box } from "@mui/material";
import { addResume } from "../features/resumeSlice";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const resume = useSelector((state) => state.resume);

  let resumeId;

  resume.length > 0 ? (resumeId = resume.at(-1).id) : null;

  const newResume = {
    resumeName: "",
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

  const handleCreateResume = () => {
    dispatch(addResume(newResume));
  };

  useEffect(() => {
    // Wait for the resume to update in the Redux store
    if (resume.length > 0) {
      const resumeId = resume.slice(-1)[0].id;

      router.push({
        pathname: "/create-resume",
        query: { id: resumeId },
      });
    }
  }, [resume]);

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Stack
        alignItems="center"
        sx={{ border: 1, borderRadius: 2, py: 8, px: 4, cursor: "pointer" }}
        onClick={handleCreateResume}
      >
        <Typography>+</Typography>
        <Typography>Create resume</Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
