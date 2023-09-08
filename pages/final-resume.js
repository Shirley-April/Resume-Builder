import { useRouter } from "next/router";

import { useSelector } from "react-redux";

import { Stack, Typography } from "@mui/material";

import Resume from "../Components/FinalResume";

const FinalResume = () => {
  const router = useRouter();
  const { id } = router.query;

  const resume = useSelector((state) =>
    state.resume.find((res) => res.id === id)
  );

  return (
    <Stack>
      <Resume resume={resume} />{" "}
    </Stack>
  );
};

export default FinalResume;
