import { useRouter } from "next/router";

import axios from "axios";

import { useState } from "react";

import { Grid, Stack, Typography, Button, createTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import Resume from "../../Atoms/Resume";

const FinalResume = ({ resume }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 28,
        fontWeight: "bold",
      },
      h2: {
        fontSize: 16,
        fontWeight: "bold",
      },
      h3: {
        fontSize: 14,
        fontWeight: "bold",
      },
      body1: {
        fontSize: 14,
      },
      subtitlebold: {
        fontWeight: "bold",
        fontSize: 14,
      },
      listFont: {
        fontSize: 14,
      },
    },
  });
  const sections = ["Contact", "Summary", "Experience", "Education", "Skills"];

  const handleGeneratePdf = () => {
    setLoading(true);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3005/api/file",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(resume),
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          router.push(response.data.response);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Stack px={{ md: 20, xs: 2 }} pb={10} pt={5}>
      <Grid container justifyContent="center" spacing={6}>
        <Grid item md={3}>
          <Stack height="100%">
            <Stack>
              <Typography sx={{ fontWeight: "bold" }}>
                RESUME SECTIONS
              </Typography>
              <Stack spacing={2}>
                {sections.map((section, index) => (
                  <Typography key={index} sx={{ borderBottom: 1 }}>
                    {section}
                  </Typography>
                ))}
              </Stack>
            </Stack>
            <Stack pt={3}>
              <LoadingButton
                loading={loading}
                loadingIndicator="Loading..."
                variant="teal"
                onClick={handleGeneratePdf}
              >
                Download
              </LoadingButton>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={9} xs={12}>
          <Typography>{resume.resumeName}</Typography>
          <Resume resume={resume} theme={theme} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FinalResume;
