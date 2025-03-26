import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Football Team Management App",
      description:
        "Development of a Flutter application for managing a football team (US GrandVertois)",
      technologies: ["Flutter", "Dart", "Firebase", "REST API"],
      image: "/images/football-app.jpg",
      github: "https://github.com/yourusername/football-app",
      demo: "https://play.google.com/store/apps/details?id=com.yourusername.footballapp",
      features: [
        "Team roster management",
        "Match scheduling and tracking",
        "Player statistics and performance metrics",
        "Real-time notifications",
        "Offline data synchronization",
      ],
    },
    {
      title: "VM Services Setup",
      description:
        "Configuration of web, mail, and DNS servers on GCP & VirtualBox",
      technologies: [
        "GCP",
        "VirtualBox",
        "Docker",
        "Nginx",
        "Postfix",
        "Bind9",
      ],
      image: "/images/vm-services.jpg",
      github: "https://github.com/yourusername/vm-services",
      demo: "https://yourdomain.com",
      features: [
        "Automated server provisioning",
        "SSL/TLS configuration",
        "Email server setup",
        "DNS management",
        "Monitoring and logging",
      ],
    },
    {
      title: "SRGAN Image Enhancement",
      description:
        "Implementation of an SRGAN model for image enhancement in Deep Learning",
      technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "NumPy"],
      image: "/images/srgan.jpg",
      github: "https://github.com/yourusername/srgan-enhancement",
      demo: "https://yourdomain.com/srgan-demo",
      features: [
        "Super-resolution model training",
        "Real-time image processing",
        "Batch processing support",
        "Custom dataset handling",
        "Performance optimization",
      ],
    },
    {
      title: "Social Network Development",
      description:
        "Development of a Django social network with instant messaging and permission management",
      technologies: ["Django", "Python", "PostgreSQL", "WebSocket", "Redis"],
      image: "/images/social-network.jpg",
      github: "https://github.com/yourusername/social-network",
      demo: "https://yourdomain.com/social",
      features: [
        "Real-time messaging",
        "User authentication and authorization",
        "Content sharing and media upload",
        "Activity feed and notifications",
        "Search and filtering",
      ],
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
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
                        width: { xs: "100%", md: "40%" },
                        height: { xs: 200, md: "100%" },
                        objectFit: "cover",
                      }}
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flex: 1, p: 4 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ mb: 2, fontWeight: 600 }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        color="text.secondary"
                      >
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: "primary.main",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "primary.dark",
                              },
                            }}
                          />
                        ))}
                      </Stack>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ mb: 1, fontWeight: 600 }}
                        >
                          Key Features:
                        </Typography>
                        <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {feature}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                        <Button
                          variant="outlined"
                          startIcon={<GitHub />}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<Launch />}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
