import React from "react";
import styles from "./index.module.css";
import { Button } from "@mui/material";

interface AuthButtonProps {
  type: "Login" | "Sign Up";
}

const AuthButton: React.FC<AuthButtonProps> = ({ type }) => {
  const buttonStyle = {
    backgroundColor: type === "Login" ? "white" : "#5ebef8",
    color: type === "Sign Up" ? "white" : "black",
  };

  return (
    <Button
      style={{
        width: 80,
        fontSize: 12,
        borderRadius: 33,
        borderColor: "#5dbef6",
        textTransform: "none",
        ...buttonStyle,
      }}
      className={styles.authButtons}
      variant="outlined"
    >
      {type}
    </Button>
  );
};

export default AuthButton;
