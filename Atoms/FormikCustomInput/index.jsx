import { TextField, InputAdornment } from "@mui/material";
import { Field } from "formik";

const FormikCustomInput = ({
  name,
  type,
  select,
  value,
  multiline,
  icon,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <TextField
          {...field}
          select={select}
          multiline={multiline}
          fullWidth
          name={name}
          value={value}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#DADEF0", // change the border color here
              },
            },
          }}
          InputLabelProps={{ shrink: false }} 
          {...rest}
        ></TextField>
      )}
    </Field>
  );
};

export default FormikCustomInput;
