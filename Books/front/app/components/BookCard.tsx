import { Card, CardContent, Typography } from "@mui/material";
import { BookCardProps } from "../interfaces/bookcard.props";

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
        borderRadius: "16px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            marginBottom: 1,
          }}
          title={book.title}
        >
          {book.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: 1,
          }}
        >
          Author: {book.author}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: 1,
          }}
        >
          Year: {book.year}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          Genre: {book.genre}
        </Typography>
      </CardContent>
    </Card>
  );
}
