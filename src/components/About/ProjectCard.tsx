import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 2,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {project.description}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {project.technologies.map((tech) => (
          <Chip
            key={tech}
            label={tech}
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
  );
};

export default ProjectCard;
