import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { ExpertiseCardProps } from "./types";
import { iconMapper } from "../../utils/icon";

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          height: "100%",
          backgroundColor: "background.paper",
          borderRadius: 2,
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
            alignItems: "center",
            gap: 2,
            mb: 2,
            color: "primary.main",
          }}
        >
          {iconMapper[item.icon]}
          <Typography
            variant="h5"
            component="h3"
            sx={{ fontWeight: 600, whiteSpace: "nowrap" }}
          >
            {item.title}
          </Typography>
        </Box>
        <Typography variant="body1" paragraph color="text.secondary">
          {item.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {item.skills.map((skill: string) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                color: "primary.main",
                border: "1px solid",
                borderColor: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.2)",
                  borderColor: "primary.main",
                },
              }}
            />
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default ExpertiseCard;
