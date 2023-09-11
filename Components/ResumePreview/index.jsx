import { Box, createTheme } from "@mui/material";

import Resume from "../../Atoms/Resume";

const LivePreview = ({ resume }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 20,
        fontWeight: "bold",
      },
      h2: {
        fontSize: 12,
        fontWeight: "bold",
      },
      h3: {
        fontSize: 10,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#181818",
      },
      body1: {
        fontSize: 10,
      },
      subtitlebold: {
        fontWeight: "bold",
        fontSize: 10,
      },
    },
  });
  return (
    <Box
      px={4}
      py={2}
      width="100%"
      sx={{
        position: "fixed",
        right: 0,
        width: "40vw",
        background: "#fff",
        height: "100vh",
      }}
    >
      <Resume resume={resume} theme={theme} />
    </Box>
  );
};

export default LivePreview;
