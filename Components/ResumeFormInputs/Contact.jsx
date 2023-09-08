import { Grid, Typography, Box, Stack } from "@mui/material";
import FormikCustomInput from "../../Atoms/FormikCustomInput";

const Contact = () => {
  const contactInfo = [
    { name: "jobTitle", label: "Job Title" },
    { name: "name", label: "Name" },
    { name: "phone", label: "Phone" },
    { name: "email", label: "Email" },
    { name: "github", label: "Github" },
    { name: "linkedin", label: "LinkedIn" },
  ];

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        Contact Info
      </Typography>
      <Grid container spacing={3} pt={0.5}>
        {contactInfo.map((contact, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Stack spacing={0.5}>
              <Typography>{contact.label}</Typography>
              <FormikCustomInput
                name={`contact.${contact.name}`}
                id={`contact.${contact.name}`}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
