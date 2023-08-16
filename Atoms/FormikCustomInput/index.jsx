import { useState, useEffect } from "react";

import { Field, ErrorMessage, getIn, FastField } from "formik";
import PropTypes from "prop-types";

import {
  TextField,
  IconButton,
  InputAdornment,
  Tooltip,
  MenuItem,
  Typography,
  InputLabel,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// import { withStyles } from "@mui/styles";

const FormikCustomInput = ({
  type,
  pClass,
  label,
  variant,
  name,
  haveTooltip,
  tooltipText,
  multiline,
  required,
  error,
  helperText,
  select,
  selectItem,
  onChange,
  onBlur,
  fastField,
  shrink,
  disabled,
  autoFocus,
  ...restProps
}) => {
  const [visibility, setVisibility] = useState(false);


  const typeChangeHandler = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <TextField
            {...field}
            label={<Typography variant="subtitle3">{label}</Typography>}
            id={label}
            variant={variant}
            type={
              type !== "password" ? type : visibility ? "text" : "password"
            }
            name={name}
            onChange={onChange !== null ? onChange : form.handleChange}
            onBlur={onBlur !== null ? onBlur : form.handleBlur}
            required={required}
            helperText={<ErrorMessage name={name} />}
            error={Boolean(
              getIn(form.touched, name) && getIn(form.errors, name)
            )}
            InputProps={{ style: { listStyleType: 'disc' } }} // Add bullet points style to textarea
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

FormikCustomInput.defaultProps = {
  pClass: "",
  tooltipText: "",
  label: "",
  haveTooltip: false,
  multiline: false,
  variant: "outlined",
  required: false,
  error: false,
  helperText: "",
  select: false,
  selectItem: [],
  onChange: null,
  onBlur: null,
  fastField: true,
  shrink: false,
  type: "text",
  disabled: false,
  autoFocus: false,
};

FormikCustomInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  haveTooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
  multiline: PropTypes.bool,
  pClass: PropTypes.string,
  variant: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  select: PropTypes.bool,
  selectItem: PropTypes.arrayOf(PropTypes.shape({})),
  fastField: PropTypes.bool,
  shrink: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

export default FormikCustomInput;
