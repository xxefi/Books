"use client";

import { Box, Typography } from "@mui/material";
import { useAddBookForm } from "@/app/hooks/useAddBookForm";
import { AlertMessage } from "@/app/components/AlertMessage";
import { BookAddForm } from "@/app/components/BookAddForm";

export default function AddBook() {
  const { formData, handleChange, onSubmit, loading, error, success } =
    useAddBookForm();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4e73df, #1e3c72)",
        color: "#fff",
        padding: 3,
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: 3,
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Add New Book
        </Typography>

        {success && <AlertMessage message={success} severity="success" />}
        {error && <AlertMessage message={error} severity="error" />}

        <BookAddForm
          formData={formData}
          loading={loading}
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
      </Box>
    </Box>
  );
}
