"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { BookDetailsCardProps } from "../interfaces/props/bookdetailscard.props";

export const BookDetailsCard = ({ book }: BookDetailsCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "20px auto",
        padding: 3,
        borderRadius: 4,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: "#333",
          }}
        >
          {book.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: 1,
            color: "#555",
          }}
        >
          <strong>Author:</strong> {book.author}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: 1,
            color: "#555",
          }}
        >
          <strong>Year:</strong> {book.year}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#555",
          }}
        >
          <strong>Genre:</strong> {book.genre}
        </Typography>
      </CardContent>
    </Card>
  );
};
