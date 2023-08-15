import { useRouter } from "next/router";

import { Stack, Typography, Box } from "@mui/material";

const Home = () => {
  const router = useRouter();
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Stack
        alignItems="center"
        sx={{ border: 1, borderRadius: 2, py: 8, px: 4, cursor: "pointer" }}
        onClick={() => router.push("/create-resume")}
      >
        <Typography>+</Typography>
        <Typography>Create resume</Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
