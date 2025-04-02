import React from "react";
import { Box, Typography, LinearProgress, Paper } from "@mui/material";
import { SkillCategoryProps } from "./types";

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, items }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        backgroundColor: "background.paper",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      {items.map((skill) => (
        <Box key={skill.name} sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography variant="body2">{skill.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {skill.level}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: "rgba(100, 255, 218, 0.1)",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
              },
            }}
          />
        </Box>
      ))}
    </Paper>
  );
};

export default SkillCategory;
