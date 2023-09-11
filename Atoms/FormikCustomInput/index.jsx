import { Field, ErrorMessage, getIn } from "formik";

import { TextField, MenuItem } from "@mui/material";

const FormikCustomInput = ({
  type,
  label,
  variant,
  name,
  multiline,
  required,
  error,
  helperText,
  select,
  selectItem,
  onChange,
  onBlur,
  ...restProps
}) => {

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <TextField
            {...field}
            id={label}
            variant={variant}
            type="text"
            name={name}
            onChange={onChange !== null ? onChange : form.handleChange}
            onBlur={onBlur !== null ? onBlur : form.handleBlur}
            required={required}
            helperText={<ErrorMessage name={name} />}
            error={Boolean(
              getIn(form.touched, name) && getIn(form.errors, name)
            )}
            InputProps={{ style: { listStyleType: "disc" } }} // Add bullet points style to textarea
            placeholder={label}
            size="medium"
            fullWidth
            multiline={multiline}
            select={select}
            {...restProps}
          >
            {select &&
              selectItem.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                  {option.key}
                </MenuItem>
              ))}
          </TextField>
        );
      }}
    </Field>
  );
};

export default FormikCustomInput;
