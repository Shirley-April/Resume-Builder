import { useSelector } from "react-redux";

import { Stack, Typography } from "@mui/material";

import Resume from "../Components/FinalResume";

const FinalResume = () => {
  const resume = useSelector((state) => state.resume);

  console.log(resume);

  return (
    <Stack>
      <Resume resume={resume} />
    </Stack>
  );
};

export default FinalResume;
