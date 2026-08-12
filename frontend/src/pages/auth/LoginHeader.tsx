import { Typography } from "@mui/material";

interface LoginHeaderProps {
  title: string;
  subtitle: string;
}

function LoginHeader({ title, subtitle }: LoginHeaderProps) {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
      >
        {subtitle}
      </Typography>
    </>
  );
}

export default LoginHeader;