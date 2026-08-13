import { useState } from "react";
import { z } from "zod";

import {
  Button,
  Typography,
} from "@mui/material";

import CustomInput from "./CustomInput";

const loginSchema =z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password is required"),
});

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();

  setEmailError("");
  setPasswordError("");

  const loginData = {
    email,
    password,
  };

  const result = loginSchema.safeParse(loginData);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      if (issue.path[0] === "email") {
        setEmailError(issue.message);
      }

      if (issue.path[0] === "password") {
        setPasswordError(issue.message);
      }
    });

    return;
  }

  console.log("Valid login data:", result.data);

  setLoading(true);

  setTimeout(() => {
    console.log("Login Successful");

    setLoading(false);

    setEmail("");
    setPassword("");
  }, 2000);
};

    console.log(email);

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        label="Email Address"
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setEmailError("");
        }}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      <CustomInput
        label="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
          setPasswordError("");
        }}
        error={Boolean(passwordError)}
        helperText={passwordError}
        isPassword={true}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 3 }}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>

      <Typography
        align="center"
        sx={{
          mt: 2,
          color: "primary.main",
          cursor: "pointer",
        }}
      >
        Forgot Password?
      </Typography>
    </form>
  );
}

export default LoginForm;