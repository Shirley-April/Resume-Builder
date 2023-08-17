import { Box } from "@mui/material";
import Resume from "../../Atoms/Resume";

const ResumePreview = ({resume}) => {
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
      <Resume resume={resume}/>
    </Box>
  );
};

export default ResumePreview;
