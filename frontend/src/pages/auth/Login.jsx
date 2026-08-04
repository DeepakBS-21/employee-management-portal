import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f7fa",
        }}
      >
        <Card
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: 450,
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              gutterBottom
            >
              Employee Management Portal
            </Typography>

            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              mb={4}
            >
              Welcome Back! Please login to continue.
            </Typography>

            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 3,
                py: 1.5,
              }}
            >
              Login
            </Button>

            <Typography
              align="center"
              sx={{
                mt: 3,
                color: "primary.main",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Login;