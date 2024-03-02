import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  TextFieldProps,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface CustomTextFieldProps {
  id: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  InputProps?: {
    endAdornment: React.JSX.Element;
  };
  icon: React.ElementType;
  showError: boolean;
  errorMessage?: string;
  handleClickShowPassword?: () => void;
  handleMouseDownPassword?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  icon: Icon,
  showError,
  errorMessage,
  handleClickShowPassword,
  handleMouseDownPassword,
  ...textFieldProps
}) => {
  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "33px",
          margin: "10px 0",
          borderStyle: "none",
        },
      }}
      {...textFieldProps}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon style={{ color: "#5dbef6", marginRight: 5 }} />
          </InputAdornment>
        ),
        endAdornment:
          textFieldProps.type === "password" && handleClickShowPassword ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {textFieldProps.value ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null,
        ...textFieldProps.InputProps,
      }}
      error={showError}
      helperText={showError ? errorMessage : ""}
    />
  );
};

export default CustomTextField;
