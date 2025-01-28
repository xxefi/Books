"use client";

import { useRouter } from "next/navigation";
import { Typography, Button, Box, Container } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/books/getallbooks");
  };

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to the Book Manager!
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            Easily manage your book collection with our intuitive interface.
            Add, update, or delete books with just a few clicks.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#ff9800",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#e68900",
              },
            }}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </main>
  );
}
