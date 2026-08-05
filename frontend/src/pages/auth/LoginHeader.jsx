import { Typography } from "@mui/material";

function LoginHeader() {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Employee Management Portal
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
      >
        Welcome Back!
      </Typography>
    </>
  );
}

export default LoginHeader;