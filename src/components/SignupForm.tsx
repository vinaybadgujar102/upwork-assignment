"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, FormControl, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import CustomTextField from "./CustomTextField"; // Adjust this path as necessary
import styles from "./index.module.css";
import LockIcon from "@mui/icons-material/Lock";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange =
    (prop: keyof FormData) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data submitted", formData);
    }
  };

  return (
    <div className={styles.signupForm}>
      <FormControl component="form">
        <CustomTextField
          id="username"
          placeholder="User Name"
          icon={Person2Icon}
          value={formData.username}
          onChange={handleChange("username")}
          showError={!!errors.username}
          errorMessage={errors.username}
        />
        <CustomTextField
          id="email"
          type="email"
          placeholder="Email"
          icon={EmailIcon}
          value={formData.email}
          onChange={handleChange("email")}
          showError={!!errors.email}
          errorMessage={errors.email}
        />
        <CustomTextField
          id="password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          icon={LockIcon}
          value={formData.password}
          onChange={handleChange("password")}
          showError={!!errors.password}
          errorMessage={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <CustomTextField
          id="confirmPassword"
          placeholder="Confirm Password"
          type={showPassword ? "text" : "password"}
          icon={LockIcon}
          value={formData.confirmPassword}
          onChange={handleChange("confirmPassword")}
          showError={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          className={styles.signupButton}
          sx={{
            mt: 2,
            borderRadius: "15px",
            textTransform: "none",
            backgroundColor: "#5dbef6",
          }}
        >
          Signup
        </Button>
      </FormControl>
    </div>
  );
}
