import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Chip,
} from "@mui/material";
import {
  Code,
  Work,
  Folder as Project,
  LocationOn,
  School,
  RocketLaunch,
  Code as CodeIcon,
  Cloud,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json";
import { useLanguage } from "../contexts/LanguageContext";
import Profile from "../components/Profile";

const About = () => {
  const { t, tArray } = useLanguage();
  const skills = skillsData;

  const iconMap: Record<string, typeof RocketLaunch> = {
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
    // Create a regex pattern from all skill names, escaping special characters
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
                              background:
                                "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Paper>
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
                <Box
                  key={index}
                  sx={{
                    mb: 4,
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
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(100, 255, 218, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          opacity: 0.2,
                          transform: "scale(1.5)",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                        },
                      }}
                    >
                      {React.createElement(iconMap[exp.icon], {
                        color: "primary",
                        sx: { zIndex: 1 },
                      })}
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: "-24px",
                          top: "24px",
                          width: "24px",
                          height: "2px",
                          backgroundColor: "primary.main",
                          opacity: 0.2,
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "primary.main",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        {exp.title}
                        <Chip
                          label={exp.period}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(100, 255, 218, 0.1)",
                            color: "primary.main",
                            border: "1px solid",
                            borderColor: "primary.main",
                            height: "24px",
                            "& .MuiChip-label": {
                              px: 1,
                              fontSize: "0.75rem",
                            },
                          }}
                        />
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          mb: 2,
                          fontWeight: 500,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "text.secondary",
                        }}
                      >
                        {exp.company}
                        <Typography
                          component="span"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            color: "text.secondary",
                          }}
                        >
                          <LocationOn sx={{ fontSize: 16 }} />
                          {exp.location}
                        </Typography>
                      </Typography>
                      {exp.description && (
                        <Typography
                          variant="body1"
                          sx={{
                            mb: 2,
                            color: "text.secondary",
                          }}
                        >
                          {exp.description}
                        </Typography>
                      )}
                      <List sx={{ py: 0 }}>
                        {exp.achievements.map(
                          (achievement: string, idx: number) => (
                            <ListItem
                              key={idx}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                py: 1,
                                px: 0,
                                position: "relative",
                                "&::before": {
                                  content: '""',
                                  position: "absolute",
                                  left: "-24px",
                                  top: "50%",
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  backgroundColor: "primary.main",
                                  opacity: 0.2,
                                  transform: "translateY(-50%)",
                                },
                              }}
                            >
                              <ListItemText
                                primary={highlightSkills(achievement)}
                                primaryTypographyProps={{
                                  sx: { fontSize: "0.9rem" },
                                }}
                              />
                            </ListItem>
                          )
                        )}
                      </List>
                    </Box>
                  </Box>
                </Box>
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
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                            opacity: 0.2,
                            transform: "scale(1.5)",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                          },
                        }}
                      >
                        <School color="primary" sx={{ zIndex: 1 }} />
                      </Box>
                      <Box
                        sx={{
                          flex: 1,
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: "-24px",
                            top: "24px",
                            width: "24px",
                            height: "2px",
                            backgroundColor: "primary.main",
                            opacity: 0.2,
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          {t("education.epf.title")}
                          <Chip
                            label={t("education.epf.period")}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(100, 255, 218, 0.1)",
                              color: "primary.main",
                              border: "1px solid",
                              borderColor: "primary.main",
                              height: "24px",
                              "& .MuiChip-label": {
                                px: 1,
                                fontSize: "0.75rem",
                              },
                            }}
                          />
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            mb: 2,
                            fontWeight: 500,
                            color: "text.secondary",
                          }}
                        >
                          {t("education.epf.degree")}
                        </Typography>
                        <List sx={{ py: 0 }}>
                          {tArray("education.epf.courses").map(
                            (course: string, idx: number) => (
                              <ListItem
                                key={idx}
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  py: 1,
                                  px: 0,
                                  position: "relative",
                                  "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    left: "-24px",
                                    top: "50%",
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    backgroundColor: "primary.main",
                                    opacity: 0.2,
                                    transform: "translateY(-50%)",
                                  },
                                }}
                              >
                                <ListItemText
                                  primary={course}
                                  primaryTypographyProps={{
                                    sx: { fontSize: "0.9rem" },
                                  }}
                                />
                              </ListItem>
                            )
                          )}
                        </List>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                            opacity: 0.2,
                            transform: "scale(1.5)",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                          },
                        }}
                      >
                        <School color="primary" sx={{ zIndex: 1 }} />
                      </Box>
                      <Box
                        sx={{
                          flex: 1,
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: "-24px",
                            top: "24px",
                            width: "24px",
                            height: "2px",
                            backgroundColor: "primary.main",
                            opacity: 0.2,
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          {t("education.university.title")}
                          <Chip
                            label={t("education.university.period")}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(100, 255, 218, 0.1)",
                              color: "primary.main",
                              border: "1px solid",
                              borderColor: "primary.main",
                              height: "24px",
                              "& .MuiChip-label": {
                                px: 1,
                                fontSize: "0.75rem",
                              },
                            }}
                          />
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            mb: 2,
                            fontWeight: 500,
                            color: "text.secondary",
                          }}
                        >
                          {t("education.university.degree")}
                        </Typography>
                        <List sx={{ py: 0 }}>
                          {tArray("education.university.courses").map(
                            (course: string, idx: number) => (
                              <ListItem
                                key={idx}
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  py: 1,
                                  px: 0,
                                  position: "relative",
                                  "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    left: "-24px",
                                    top: "50%",
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    backgroundColor: "primary.main",
                                    opacity: 0.2,
                                    transform: "translateY(-50%)",
                                  },
                                }}
                              >
                                <ListItemText
                                  primary={course}
                                  primaryTypographyProps={{
                                    sx: { fontSize: "0.9rem" },
                                  }}
                                />
                              </ListItem>
                            )
                          )}
                        </List>
                      </Box>
                    </Box>
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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
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
