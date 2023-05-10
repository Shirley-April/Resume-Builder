import { Grid, Typography, Box, Stack } from "@mui/material";
import TextFieldCustomInput from "../../Atoms/TextFieldCustomInput";

const Contact = ({ setInputs }) => {
  const handleChangeContact = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({
      ...values,
      contact: {
        ...values.contact,
        [name]: value,
      },
    }));
  };

  const contactInfo = [
    "jobTitle",
    "name",
    "phone",
    "email",
    "linkedin",
    "gitbub",
  ];

  const labels = ["Job Title", "Name", "Phone", "Email", "LinkedIn", "GitHub"];

  return (
    <Box>
      <Typography variant="h5">Contact Info</Typography>
      <Grid container spacing={3}>
        {contactInfo.map((contact, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Stack spacing={2}>
              <TextFieldCustomInput
                name={contact}
                id={contact}
                onChange={handleChangeContact}
                label={contact}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
