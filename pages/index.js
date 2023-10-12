import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import {
  Button,
  Dialog,
  DialogContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { addResume } from "../features/resumeSlice";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const newResume = {
    resumeName: "",
    contact: {
      jobTitle: "",
      name: "",
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

  const [resume, setResume] = useState(newResume);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateResume = () => {
    dispatch(addResume(newResume));
    router.push({
      pathname: "/create-resume",
    });
  };

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Stack
        alignItems="center"
        sx={{ border: 1, borderRadius: 2, py: 8, px: 4, cursor: "pointer" }}
        onClick={handleOpen}
      >
        <Typography>+</Typography>
        <Typography>New resume</Typography>
      </Stack>

      {/* Resume Name Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogContent>
          <Stack spacing={2}>
            <Typography variant="h6">Resume Name</Typography>
            <TextField
              label="eg JOHN DOE CV"
              name="resumeName"
              required
              value={resume.resumeName}
              onChange={(e) => setResume({...resume, resumeName: e.target.value})}
            />
            <Button variant="teal" onClick={handleCreateResume}>Create</Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export default Home;
