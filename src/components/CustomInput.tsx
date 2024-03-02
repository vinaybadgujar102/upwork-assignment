import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const IconTextField = ({
  id,
  type,
  placeholder,
  icon: Icon,
  inputProps,
  ...props
}) => (
  <TextField
    id={id}
    type={type}
    placeholder={placeholder}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Icon style={{ color: "#5dbef6" }} />
        </InputAdornment>
      ),
      ...inputProps,
    }}
    variant="outlined"
    {...props}
  />
);

export default IconTextField;
