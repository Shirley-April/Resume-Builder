import { useState } from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { addResume } from "../features/resumeSlice";

import EditIcon from "@mui/icons-material/Edit";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const allResumes = useSelector((state) => state.resume);

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
    dispatch(addResume(resume));
    router.push({
      pathname: "/create-resume",
    });
  };

  const handleEditResume = (id) => {
    router.push({
      pathname: `/create-resume`,
      query: { id, edit: true },
    });
  };

  return (
    <Box>
      <Grid container py={15} px={5}>
        {allResumes.map((resume) => (
          <Grid
            item
            key={resume.id}
            md={2}
            sx={{ py: 8, px: 4, border: 1, borderRadius: 2 }}
          >
            <Typography>{resume.resumeName}</Typography>
            <IconButton onClick={() => handleEditResume(resume.id)}>
              <EditIcon />
            </IconButton>
          </Grid>
        ))}
      </Grid>
      <Stack justifyContent="center" alignItems="center">
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
                onChange={(e) =>
                  setResume({ ...resume, resumeName: e.target.value })
                }
              />
              <Button variant="teal" onClick={handleCreateResume}>
                Create
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
      </Stack>
    </Box>
  );
};

export default Home;
