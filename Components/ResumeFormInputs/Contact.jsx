import { Grid, Typography, Box, Stack } from "@mui/material";
import FormikCustomInput from "../../Atoms/FormikCustomInput";

const Contact = () => {
  const contactInfo = [
    "jobTitle",
    "name",
    "phone",
    "email",
    "linkedin",
    "github",
  ];

  const labels = ["Job Title", "Name", "Phone", "Email", "LinkedIn", "GitHub"];

  return (
    <Box>
      <Typography variant="h5">Contact Info</Typography>
      <Grid container spacing={3}>
        {contactInfo.map((contact, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Stack spacing={2}>
              <Typography>{contact}</Typography>
              <FormikCustomInput name={`contact.${contact}`} id={contact} />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
