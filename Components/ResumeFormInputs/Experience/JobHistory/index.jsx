import { useState } from "react";
import { useSelector } from "react-redux";

import {
  Typography,
  Stack,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import WorkExperience from "../../WorkExperience";
import EditExperence from "../EditExperience";

const JobHistory = ({
  form,
  handleOpenForm,
  handleCloseForm,
  setInputs,
  inputs,
}) => {
  const jobHistory = useSelector((state) => state.resume.workExperience);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log("History", jobHistory);

  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        {Object.entries(jobHistory).map(([key, value], index) => (
          <Box key={index}>
            <Accordion
              expanded={expanded === value.id}
              onChange={handleChange(value.id)}
              elevation={0}
              sx={{ border: 1 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  {value.jobTitle} | {value.company}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Display Form Here!</Typography>
                <EditExperence
                  setInputs={setInputs}
                  inputs={inputs}
                  value={value}
                />
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
        {form ? null : (
          <Button variant="contained" onClick={handleOpenForm}>
            Add Experience
          </Button>
        )}
      </Stack>
      {form && (
        <Stack spacing={2}>
          <WorkExperience setInputs={setInputs} inputs={inputs} />{" "}
          <Button variant="contained" onClick={handleCloseForm}>
            Close
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default JobHistory;
