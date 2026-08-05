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

  return (
    <>
      <TextField
        label="Email Address"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      {/* Replace this Password TextField */}
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        margin="normal"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
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
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 3 }}
      >
        Login
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
    </>
  );
}

export default LoginForm;