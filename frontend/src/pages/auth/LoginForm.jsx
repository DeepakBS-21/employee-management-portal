import { useState } from "react";

import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();


    if(email === ""){
        setEmailError("Email is required");
        return;
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if(!emailPattern.test(email)){
        setEmailError("Please enter a valid email address");
        return;
    }

    if(password === ""){
        setPasswordError("Password is required");
        return; 
    }

    console.log("Email:", email);
    console.log("Password:", password);

    setLoading(true);

    setTimeout(() => {

        console.log("Login Successful");

        setLoading(false);

        setEmail("");
        setPassword("");
        setEmailError("");
        setPasswordError("");
    },2000) 
};

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email Address"
        type="text"
        fullWidth
        margin="normal"
        value={email}
        onChange={(event) => {setEmail(event.target.value);
            setEmailError("");
        }}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      {/* Replace this Password TextField */}
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        margin="normal"
        value={password}
        onChange={(event) => {setPassword(event.target.value);
            setPasswordError("");
        }}
        error={Boolean(passwordError)}
        helperText={passwordError}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 3 }}
        disabled={loading}
      >
        {loading? "Logging in..." : "Login"}
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