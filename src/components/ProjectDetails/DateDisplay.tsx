import React from "react";
import { Box, Typography } from "@mui/material";
import { DateDisplayProps } from "./types";

const DateDisplay: React.FC<DateDisplayProps> = ({ dates }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mb: 4,
        color: "text.secondary",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1,
          borderRadius: 2,
          backgroundColor: "rgba(100, 255, 218, 0.1)",
          border: "1px solid",
          borderColor: "rgba(100, 255, 218, 0.2)",
        }}
      >
        <Typography variant="body2" sx={{ color: "primary.main" }}>
          {formatDate(dates.startDate)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          -
        </Typography>
        <Typography variant="body2" sx={{ color: "primary.main" }}>
          {formatDate(dates.endDate)}
        </Typography>
      </Box>
    </Box>
  );
};

export default DateDisplay;
