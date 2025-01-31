"use client";

import { useRouter } from "next/navigation";
import {
  Typography,
  Button,
  Container,
  Paper,
  IconButton,
} from "@mui/material";
import { LibraryBooks, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import "@fontsource/poppins";

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
        background: "linear-gradient(135deg, #4e73df, #1e3c72)",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={8}
            sx={{
              padding: "40px",
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(15px)",
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#fff",
                marginBottom: "16px",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
              }}
            >
              <LibraryBooks fontSize="large" />
            </IconButton>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                color: "white",
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
                fontWeight: 600,
              }}
            >
              Welcome to Book Manager!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "24px",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: 400,
              }}
            >
              Organize and manage your book collection effortlessly. Add,
              update, or remove books with ease.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: "#ff6f61",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                padding: "14px 28px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#ff3e2d",
                },
              }}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </main>
  );
}
