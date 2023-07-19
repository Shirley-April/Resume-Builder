import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const jobHistory = useSelector((state) => state.resume.workExperience);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        {jobHistory.map((value, index) => (
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
                  <IconButton onClick={() => dispatch(deleteExperience(value))}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Display Form Here!</Typography>
                <EditExperence value={value} index={index} />
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
        {formOpen ? null : (
          <Button variant="contained" onClick={handleOpenForm}>
            Add Experienceeeeeeeeeee
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
