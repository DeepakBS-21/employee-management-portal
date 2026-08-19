import {
  Card,
  CardContent,
  Container,
} from "@mui/material";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 8 }}>
        <CardContent>
          <LoginHeader
            title="Employee Management Portal"
            subtitle="Welcome Back!"
          />
          <LoginForm />
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;