import { Alert } from "@mui/material";
import { AlertMessageProps } from "../interfaces/alertmessage.props";

export const AlertMessage = ({ message, severity }: AlertMessageProps) => {
  return (
    <Alert severity={severity} sx={{ marginBottom: 2 }}>
      {message}
    </Alert>
  );
};
