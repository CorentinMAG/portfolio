import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Work, Code, Groups } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";
import Hero from "../components/Hero";
import ExpertiseCard from "../components/Home/ExpertiseCard";
import StatCard from "../components/Home/StatCard";
import { ExpertiseItem, StatItem } from "../components/Home/types";

const Home = () => {
  const { t, tArray } = useLanguage();

  const roles = tArray("home.roles")
    .map((r) => [r, 2000])
    .flat();

  const sequences = tArray("home.sequences")
    .map((s) => [s, 2000])
    .flat();

  const expertiseItems: ExpertiseItem[] = tArray("home.expertise.items");

  const statItems: StatItem[] = [
    {
      icon: <Work sx={{ fontSize: 40 }} />,
      value: "5+",
      label: "Years of Experience",
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      value: "20+",
      label: "Projects Completed",
    },
    {
      icon: <Groups sx={{ fontSize: 40 }} />,
      value: "10+",
      label: "Happy Clients",
    },
  ];

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
            {expertiseItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ExpertiseCard item={item} index={index} />
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
            {statItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StatCard item={item} delay={index * 0.2} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
