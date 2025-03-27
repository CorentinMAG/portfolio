import React, { useState, useMemo } from "react";
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
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  GitHub,
  Launch,
  Web,
  PhoneAndroid,
  Security,
  Cloud,
  Psychology,
} from "@mui/icons-material";
import { motion } from "framer-motion";

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
    category: "mobile",
  },
  {
    title: "VM Services Setup",
    description:
      "Configuration of web, mail, and DNS servers on GCP & VirtualBox",
    technologies: ["GCP", "VirtualBox", "Docker", "Nginx", "Postfix", "Bind9"],
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
    category: "devops",
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
    category: "ai",
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
    category: "web",
  },
  {
    title: "AI-Powered Chat Application",
    description:
      "Development of a chat application with AI-powered responses and natural language processing",
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "React"],
    image: "/images/ai-chat.jpg",
    github: "https://github.com/yourusername/ai-chat",
    demo: "https://yourdomain.com/ai-chat",
    features: [
      "Natural language processing",
      "Context-aware responses",
      "Multi-language support",
      "Sentiment analysis",
      "Custom model training",
    ],
    category: "ai",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

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

          {/* Category Filter */}
          <Box sx={{ mb: 6, display: "flex", justifyContent: "center" }}>
            <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              onChange={handleCategoryChange}
              aria-label="project categories"
              sx={{
                "& .MuiToggleButton-root": {
                  color: "text.secondary",
                  "&.Mui-selected": {
                    color: "primary.main",
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                    "&:hover": {
                      backgroundColor: "rgba(100, 255, 218, 0.2)",
                    },
                  },
                },
              }}
            >
              <ToggleButton value="all" aria-label="all projects">
                All Projects
              </ToggleButton>
              <ToggleButton value="web" aria-label="web projects">
                <Web sx={{ mr: 1 }} /> Web
              </ToggleButton>
              <ToggleButton value="mobile" aria-label="mobile projects">
                <PhoneAndroid sx={{ mr: 1 }} /> Mobile
              </ToggleButton>
              <ToggleButton value="devops" aria-label="devops projects">
                <Cloud sx={{ mr: 1 }} /> DevOps
              </ToggleButton>
              <ToggleButton value="security" aria-label="security projects">
                <Security sx={{ mr: 1 }} /> Security
              </ToggleButton>
              <ToggleButton value="ai" aria-label="ai projects">
                <Psychology sx={{ mr: 1 }} /> AI
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
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
                      </Box>
                      <Box sx={{ display: "flex", gap: 2, mt: "auto" }}>
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
