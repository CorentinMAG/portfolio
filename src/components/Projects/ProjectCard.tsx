import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion } from "framer-motion";
import { ProjectCardProps } from "./types";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.paper",
          borderRadius: 2,
          overflow: "hidden",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 200,
            objectFit: "cover",
          }}
          image={project.image}
          alt={project.title}
        />
        <CardContent
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 2,
              }}
            >
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                {project.title}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ ml: 1 }}
              >
                {new Date(project.date).toLocaleDateString()}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              paragraph
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {project.description}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}
            >
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
            </Stack>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Key Features:
              </Typography>
              <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    <Typography variant="body2" color="text.secondary">
                      {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: "auto" }}>
            {project.github ? (
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                disabled={project.wip}
              >
                View Code
              </Button>
            ) : null}
            <Button
              variant="contained"
              startIcon={<Launch />}
              href={project.demo}
              disabled={project.wip}
              target={project.demo.startsWith("http") ? "_blank" : undefined}
              rel={
                project.demo.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              Live Demo
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
