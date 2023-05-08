import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import FormikCustomInput from "../Atoms/FormikCustomInput";
import { Form, Formik } from "formik";

import { textAdded } from "../features/text";

const TextPreview = () => {
  const text = useSelector((state) => state.text.firstName);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const initialValues = {
    firstName: "",
    lastName: "",
  };

  const attributes = [
    { name: "firstName", id: "firstName", label: "First name" },
    { name: "lastName", id: "lastName", label: "Last name" },
  ];

  return (
    <Box p={20}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Typography variant="h5" fontWeight="bold">
            Form
          </Typography>
          <form>
            <label>
              Enter your name:
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  dispatch(textAdded(name));
                }}
              />
            </label>
          </form>
          {/* <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <Stack spacing={2} pr={4} pt={4}>
                {attributes.map((attribute) => (
                  <FormikCustomInput
                    key={attribute.id}
                    name={attribute.name}
                    id={attribute.id}
                    label={attribute.label}
                  />
                ))}
                <FormikCustomInput
                  name="firstName"
                  id="firstName"
                  label="Firstname"
                  size="small"
                />
                <FormikCustomInput
                  name="lastName"
                  id="lastName"
                  label="Last name"
                  size="small"
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Stack>
            </Form>
          </Formik> */}
        </Grid>
        <Grid item md={4}>
          <Typography variant="h6" fontWeight="bold">
            Text Preview
          </Typography>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextPreview;
