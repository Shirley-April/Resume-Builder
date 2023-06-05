import { useSelector } from "react-redux";
import { Typography, Stack, Box, Button } from "@mui/material";
import WorkExperience from "../../WorkExperience";

const JobHistory = ({ form, handleOpenForm, handleCloseForm, setInputs, inputs }) => {
  const jobHistory = useSelector((state) => state.resume.workExperience);

  console.log("History", jobHistory);
  return (
    <Stack>
      <Stack spacing={1}>
        {Object.entries(jobHistory).map(([key, value], index) => (
          <Box key={index}>
            {console.log({key, "Val": value.description?.split("\n")})}
            <Typography variant="h6">
              {value.jobTitle} | {value.company}
            </Typography>

            {value.description?.split("\n").map((duty, index) => (
              <Typography sx={{ fontSize: 12 }} key={index}>
                • {duty}
              </Typography>
            ))}
          </Box>
        ))}
        {form ? null : (
          <Button variant="contained" onClick={handleOpenForm}>
            Add Experience
          </Button>
        )}
        {/* {props.workExperience.map((experience, index) => (
          <Box key={index}>
            <Typography variant="h3">
              {experience.jobTitle} | {experience.company}
            </Typography>

            {experience.description.split("\n").map((duty, index) => (
              <Typography key={index}>• {duty}</Typography>
            ))}
          </Box>
        ))} */}
      </Stack>
      {form && (
        <Stack spacing={2}>
          <WorkExperience setInputs={setInputs} inputs={inputs}/>{" "}
          <Button variant="contained" onClick={handleCloseForm}>
            Close
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default JobHistory;
