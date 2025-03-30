import React from "react";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Work, Groups } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";
import { iconMapper } from "../utils/icon.tsx";
import Hero from "../components/Hero";
const Home = () => {
  const { t, tArray } = useLanguage();

  const roles = tArray("home.roles")
    .map((r) => [r, 2000])
    .flat();

  const sequences = tArray("home.sequences")
    .map((s) => [s, 2000])
    .flat();

  return (
    <Box sx={{ position: "relative" }}>
      {/* Hero Section */}
      <Hero sequences={sequences} roles={roles} />
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
            {t("home.expertise.title")}
          </Typography>
          <Grid container spacing={4}>
            {tArray("home.expertise.items").map((item, index) => (
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
                      {iconMapper[item.icon]}
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 600, whiteSpace: "nowrap" }}
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
