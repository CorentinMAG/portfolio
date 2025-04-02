import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { StatCardProps } from "./types";

const StatCard: React.FC<StatCardProps> = ({ item, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 3,
          borderRadius: 2,
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "primary.main",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
            color: "primary.main",
          }}
        >
          {item.icon}
        </Box>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: 700,
            mb: 1,
            background: "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {item.value}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.label}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default StatCard;
