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
import { addResume, deleteResume } from "../features/resumeSlice";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <Box sx={{ px: {md: 10, xs: 5}, py: 10 }}>
      {allResumes.length >= 1 ? (
        <Stack justifyContent="flex-end" alignItems="flex-end">
          <Button variant="teal" onClick={handleOpen}>
            Create Resume
          </Button>
        </Stack>
      ) : null}
      <Grid container spacing={3}>
        {allResumes.map((resume) => (
          <Grid
            item
            key={resume.id}
            md={2}
            sx={{ py: 8, px: 4, border: 1, borderRadius: 2, m: 4 }}
          >
            <Stack justifyContent="center" alignItems="center" spacing={2}>
              <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                {resume.resumeName}
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton onClick={() => handleEditResume(resume.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => dispatch(deleteResume(resume.id))}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack justifyContent="center" alignItems="center">
        {allResumes.length >= 1 ? null : (
          <Stack
            alignItems="center"
            sx={{ border: 1, borderRadius: 2, py: 8, px: 4, cursor: "pointer" }}
            onClick={handleOpen}
          >
            <Typography>+</Typography>
            <Typography>New resume</Typography>
          </Stack>
        )}

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
