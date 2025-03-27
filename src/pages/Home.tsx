import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Code, Cloud, Devices, Work, Groups } from "@mui/icons-material";

const Home = () => {
  const navigate = useNavigate();

  const expertiseItems = [
    {
      icon: <Cloud sx={{ fontSize: 40 }} />,
      title: "DevOps & Cloud",
      description:
        "Expert in Kubernetes, Docker, Terraform and CI/CD pipelines. Specialized in cloud infrastructure and automation solutions.",
      skills: [
        "Kubernetes",
        "Docker",
        "Terraform",
        "Ansible",
        "CI/CD",
        "Cloud",
      ],
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: "Web Development",
      description:
        "Full-stack development with modern technologies. Creating responsive and performant web applications.",
      skills: [
        "React",
        "Node.js",
        "TypeScript",
        "Python",
        "Django",
        "REST APIs",
      ],
    },
    {
      icon: <Devices sx={{ fontSize: 40 }} />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile app development using Flutter. Building native and hybrid applications.",
      skills: ["Flutter", "Dart", "Kotlin", "React Native", "Mobile UI/UX"],
    },
  ];

  return (
    <Box sx={{ position: "relative" }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center" }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Hi, I'm{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Corentin MAGYAR
              </Box>
            </Typography>
            <Box sx={{ minHeight: "4rem", mb: 4 }}>
              <TypeAnimation
                sequence={["DevOps Engineer", 2000, "Software Engineer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  fontSize: "1.5rem",
                  color: "text.secondary",
                  display: "inline-block",
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                mb: 6,
                color: "text.secondary",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <TypeAnimation
                sequence={[
                  "I create web applications",
                  2000,
                  "I develop mobile applications",
                  2000,
                  "I build monitoring solutions",
                  2000,
                  "I implement automated solutions",
                  2000,
                  "I design innovative solutions",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  display: "inline-block",
                }}
              />
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                mt: 4,
                "& .MuiButton-root": {
                  minWidth: "180px",
                  height: "48px",
                  fontSize: "1.1rem",
                  boxShadow: "0 4px 14px 0 rgba(100, 255, 218, 0.2)",
                  "&:hover": {
                    boxShadow: "0 6px 20px 0 rgba(100, 255, 218, 0.3)",
                  },
                },
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/projects")}
                sx={{
                  background:
                    "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #4fd1c5 30%, #64ffda 90%)",
                  },
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  borderWidth: "2px",
                  "&:hover": {
                    borderWidth: "2px",
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Expertise Section */}
      <Box
        sx={{
          py: 8,
          position: "relative",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Areas of Expertise
          </Typography>
          <Grid container spacing={4}>
            {expertiseItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      {item.icon}
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      paragraph
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {item.skills.map((skill) => (
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box
        sx={{
          py: 8,
          position: "relative",
        }}
      >
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
                    <Work sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background:
                        "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    5+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Years of Experience
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
                    <Code sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background:
                        "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    20+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Projects Completed
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
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
                    <Groups sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background:
                        "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    10+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Happy Clients
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
