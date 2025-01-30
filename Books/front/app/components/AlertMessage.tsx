"use client";

import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { AlertMessageProps } from "../interfaces/props/alertmessage.props";

export const AlertMessage = ({ message, severity }: AlertMessageProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) return;

    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, [message]);
  if (!visible) return null;
  return (
    <Alert severity={severity} sx={{ marginBottom: 2, marginTop: 2 }}>
      {message}
    </Alert>
  );
};
