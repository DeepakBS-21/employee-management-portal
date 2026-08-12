import {
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

interface CustomInputProps {
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error: boolean;
  helperText: string;
  isPassword?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
}

function CustomInput({
  label,
  type,
  value,
  onChange,
  error,
  helperText,
  isPassword,
  showPassword,
  setShowPassword,
}: CustomInputProps) {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      slotProps={
        isPassword
          ? {
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword?.(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }
          : undefined
      }
    />
  );
}

export default CustomInput;