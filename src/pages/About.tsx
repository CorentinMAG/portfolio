import React from "react";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import {
  Code,
  Work,
  Folder as Project,
  School,
  RocketLaunch,
  Code as CodeIcon,
  Cloud,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json";
import { useLanguage } from "../contexts/LanguageContext";
import Profile from "../components/Profile";
import SkillCategory from "../components/About/SkillCategory";
import ExperienceItem from "../components/About/ExperienceItem";
import EducationItem from "../components/About/EducationItem";
import ProjectCard from "../components/About/ProjectCard";
import { IconMap } from "../components/About/types";

const About = () => {
  const { t, tArray } = useLanguage();
  const skills = skillsData;

  const iconMap: IconMap = {
    rocket: RocketLaunch,
    code: CodeIcon,
    cloud: Cloud,
  };

  const projects = [
    {
      title: "Football Team Management App",
      description:
        "Development of a Flutter application to manage a football team (US GrandVertois)",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Homelab",
      description:
        "creation of a homelab to test new technologies and improve my skills in system administration and security",
      technologies: ["GCP", "Docker", "Nginx", "DNS", "IAM", "Firewall"],
    },
    {
      title: "SRGAN Image Enhancement",
      description:
        "Implementation of an SRGAN model for image enhancement in Deep Learning",
      technologies: ["Python", "TensorFlow"],
    },
    {
      title: "Social Network",
      description:
        "Development of a Django social network with instant messaging and permission management",
      technologies: [
        "Django",
        "React",
        "WebSocket",
        "PostgreSQL",
        "Redis",
        "API",
      ],
    },
  ];

  const highlightSkills = (text: string) => {
    const skillNames = Object.values(skills)
      .flat()
      .map((skill) => skill.name.toLowerCase());
    const escapedSkillNames = skillNames.map((name) =>
      name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const pattern = new RegExp(`(${escapedSkillNames.join("|")})`, "gi");

    return text.split(pattern).map((part, index) => {
      if (skillNames.includes(part.toLowerCase())) {
        return (
          <Typography
            key={index}
            component="span"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              display: "inline",
            }}
          >
            {part}
          </Typography>
        );
      }
      return part;
    });
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
              background: "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("about.title")}
          </Typography>

          {/* Profile Section */}
          <Profile />

          {/* Professional Summary */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 8,
              backgroundColor: "background.paper",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              {t("about.professionalSummary")}
            </Typography>
            <Typography variant="body1" paragraph>
              {t("about.summaryText")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              {[
                "DevOps",
                "Kubernetes",
                "Terraform",
                "Ansible",
                "Cloud",
                "CI/CD",
                "Python",
                "Infrastructure as Code",
                "Agile",
                "SRE",
              ].map((keyword) => (
                <Chip
                  key={keyword}
                  label={keyword}
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

          {/* Skills & Expertise Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Code /> {t("about.skills")}
            </Typography>
            <Grid container spacing={4}>
              {Object.entries(skills).map(([category, items]) => (
                <Grid item xs={12} md={4} key={category}>
                  <SkillCategory category={category} items={items} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Professional Experience Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Work /> {t("about.experience")}
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: "background.paper",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "primary.main",
              }}
            >
              {tArray("experiences").map((exp, index) => (
                <ExperienceItem
                  key={index}
                  experience={exp}
                  iconMap={iconMap}
                  highlightSkills={highlightSkills}
                />
              ))}
            </Paper>
          </Box>

          {/* Education Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <School /> {t("about.education")}
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: "background.paper",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "primary.main",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: "relative",
                      "&:not(:last-child)::after": {
                        content: '""',
                        position: "absolute",
                        left: "24px",
                        top: "100%",
                        bottom: "-16px",
                        width: "2px",
                        background:
                          "linear-gradient(to bottom, rgba(100, 255, 218, 0.2), rgba(100, 255, 218, 0.1))",
                      },
                    }}
                  >
                    <EducationItem
                      education={{
                        title: t("education.epf.title"),
                        degree: t("education.epf.degree"),
                        period: t("education.epf.period"),
                        courses: [],
                      }}
                      courses={tArray("education.epf.courses")}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box>
                    <EducationItem
                      education={{
                        title: t("education.university.title"),
                        degree: t("education.university.degree"),
                        period: t("education.university.period"),
                        courses: [],
                      }}
                      courses={tArray("education.university.courses")}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>

          {/* Personal Projects Section */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Project /> {t("about.projects")}
            </Typography>
            <Grid container spacing={2}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
