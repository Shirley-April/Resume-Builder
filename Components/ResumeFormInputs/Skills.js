import { Stack, Typography, Box } from "@mui/material";

import TextFieldCustomInput from "../../Atoms/TextFieldCustomInput";

const Skills = ({ setInputs }) => {
  const handleChangeSkills = (event) => {
    const value = event.target.value;

    setInputs((prevState) => ({
      ...prevState,
      skills: value,
    }));
  };

  return <Stack spacing={2}>
    <Typography variant="h5">Skills</Typography>
    <Box>
      <TextFieldCustomInput
        name="skills"
        id="skills"
        multiline
        rows={4}
        onChange={handleChangeSkills}
      />
    </Box>
  </Stack>;
};

export default Skills;