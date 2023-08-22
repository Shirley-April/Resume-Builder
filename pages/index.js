import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import { Stack, Typography, Box } from "@mui/material";
import { addResume } from "../features/resumeSlice";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch()

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
  }

  const handleCreateResume = () => {
    dispatch(addResume(newResume))
    router.push("/create-resume")
  }

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
