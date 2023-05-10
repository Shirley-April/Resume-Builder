import { TextField } from "@mui/material";

const TextFieldCustomInput = ({ name, id, onChange, value, ...rest }) => {
  return (
    <TextField
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      fullWidth
      {...rest}
    />
  );
};

export default TextFieldCustomInput;
