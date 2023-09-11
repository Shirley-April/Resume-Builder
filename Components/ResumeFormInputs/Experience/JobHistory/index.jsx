import { useState } from "react";

import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import { deleteExperience } from "../../../../features/resumeSlice";

import {
  Typography,
  Stack,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

import WorkExperience from "../../WorkExperience";
import EditExperence from "../EditExperience";

const JobHistory = ({
  formOpen,
  handleOpenForm,
  handleCloseForm,
  values,
  newExperience,
}) => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        {values.map((value, index) => (
          <Box key={index}>
            <Accordion
              expanded={expanded === value.id}
              onChange={handleChange(value.id)}
              elevation={0}
              sx={{ border: 1 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack
                  justifyContent="space-between"
                  direction="row"
                  width="100%"
                >
                  <Typography>
                    {value.jobTitle} | {value.company}
                  </Typography>
                  <IconButton
                    onClick={() =>
                      dispatch(deleteExperience({ ...value, resumeId: id }))
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <EditExperence value={value} index={index} />
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
        {formOpen ? null : (
          <Button variant="teal" onClick={handleOpenForm}>
            Add Experience
          </Button>
        )}
      </Stack>
      {formOpen && (
        <Stack spacing={2}>
          <WorkExperience
            handleCloseForm={handleCloseForm}
            values={values}
            newExperience={newExperience}
          />{" "}
          <Button variant="contained" onClick={handleCloseForm}>
            Close
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default JobHistory;
