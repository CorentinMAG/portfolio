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
  Link,
  LinearProgress,
  Chip,
} from "@mui/material";
import {
  Code,
  Work,
  Folder as Project,
  ContactMail,
  LocationOn,
  School,
  RocketLaunch,
  Code as CodeIcon,
  Cloud,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Gravatar from "react-gravatar";

const About = () => {
  const skills = {
    development: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "Java", level: 70 },
      { name: "C++", level: 65 },
      { name: "Go", level: 50 },
    ],
    devops: [
      { name: "Ansible", level: 95 },
      { name: "Kubernetes", level: 95 },
      { name: "Docker", level: 90 },
      { name: "Terraform", level: 85 },
      { name: "CI/CD", level: 90 },
      { name: "GitLab", level: 85 },
      { name: "Nutanix", level: 80 },
    ],
    monitoring: [
      { name: "Grafana", level: 85 },
      { name: "Prometheus", level: 80 },
      { name: "ELK Stack", level: 75 },
      { name: "Kafka", level: 70 },
    ],
  };

  const experiences = [
    {
      title: "Integrator Engineer",
      company: "Airbus Defense & Space",
      period: "June 2023 - Present",
      location: "Toulouse",
      icon: RocketLaunch,
      description:
        "Lead integrator engineer of the ground segment on the POLEOS project. Introduce agile methodologies in the team. Works closely with development and IVV teams",
      achievements: [
        "ground segment integration & tests via Ansible and Kubernetes",
        "VM management and hardening on Nutanix",
        "Development of a critical component of the ground segment in Python",
        "CI/CD pipelines for automated deploiements & tests",
        "Monitoring of the ground segment with Grafana and Prometheus",
        "Ensure best security practices are enforced and firewalls management",
        "Introduce & integrate LLM model to boost team productivity",
      ],
    },
    {
      title: "Python Developer",
      company: "Airbus Defense & Space",
      period: "July 2022 - April 2023",
      location: "Élancourt",
      icon: CodeIcon,
      description:
        "Development of a worst case circuit analysis simulator to help engineer better design satellite components and reduce cost",
      achievements: [
        "Development in Python",
        "Performance optimization with various techniques (C++, parallelization, symbolic)",
        "Detailed technical & user documentation",
        "CI/CD pipelines to automate delivery",
      ],
    },
    {
      title: "DevOps & Software Developer",
      company: "EXPLEO",
      period: "September 2021 - June 2023",
      location: "Montigny-le-Bretonneux",
      icon: Cloud,
      description:
        "Key point of the Pegase project. This project aims to improve EXPLEO's reactiveness to customer needs to win more contracts. It involves a smart use of the company data to provide a custom-tailored offer",
      achievements: [
        "Development of APIs to consume EXPLEO data",
        "Development of a Node.js real-time application for data synchronization",
        "Development of several python scripts to improve data quality and automate tasks",
        "Creation of CI/CD pipelines",
        "Work closely with multiple teams all around the world",
      ],
    },
    {
      title: "DevOps & Software Developer",
      company: "EXPLEO",
      period: "September 2021 - June 2023",
      location: "Montigny-le-Bretonneux",
      icon: Cloud,
      description:
        "Administration and evolution of the internal IT platform. Also helps in responding to calls for tenders and create realistic architecture proposals for internal needs (data teams & internal dev projects)",
      achievements: [
        "Creation of Helms charts",
        "Migration to the VMWare CSI",
        "Architecture and implementation of a backup solution",
        "Deployment automation with Ansible, Terraform, Packer and several python & bash scripts",
        "Creation of CI/CD pipelines",
        "Creation of multiples web applications using Angular and spring boot",
        "Migration and update of platform components (GitLab, Nexus, Jenkins, SonarQube, Grafana, Prometheus, etc.)",
      ],
    },
  ];

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
            About Me
          </Typography>

          {/* Profile Section */}
          <Box sx={{ display: "flex", gap: 4, mb: 8, alignItems: "center" }}>
            <Box
              sx={{
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "primary.main",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Gravatar
                email="corentin.magyar@protonmail.com"
                size={200}
                rating="pg"
                default="identicon"
                className="gravatar"
                style={{ borderRadius: "50%" }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                Corentin Magyar
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
                DevOps Engineer
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Based in Paris, France
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Link
                  href="mailto:corentin.magyar@protonmail.com"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <ContactMail />
                  corentin.magyar@protonmail.com
                </Link>
              </Box>
            </Box>
          </Box>

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
              Professional Summary
            </Typography>
            <Typography variant="body1" paragraph>
              Passionate about new technologies, I have solid experience in web
              and mobile development, as well as system integration, with a
              specialization in DevOps. My expertise allows me to manage complex
              projects, from continuous integration to deployment automation,
              while developing innovative and scalable solutions.
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
              <Code /> Skills & Expertise
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
              <Work /> Professional Experience
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
              {experiences.map((exp, index) => (
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
                      <exp.icon color="primary" sx={{ zIndex: 1 }} />
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
                        {exp.achievements.map((achievement, idx) => (
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
                        ))}
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
              <School /> Education
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
                          EPF
                          <Chip
                            label="September 2019 - December 2021"
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
                          Master in Information Technology
                        </Typography>
                        <List sx={{ py: 0 }}>
                          <ListItem
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
                              primary="Docker introduction"
                              primaryTypographyProps={{
                                sx: { fontSize: "0.9rem" },
                              }}
                            />
                          </ListItem>
                          <ListItem
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
                              primary="Linux introduction"
                              primaryTypographyProps={{
                                sx: { fontSize: "0.9rem" },
                              }}
                            />
                          </ListItem>
                          <ListItem
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
                              primary="JavaScript introduction"
                              primaryTypographyProps={{
                                sx: { fontSize: "0.9rem" },
                              }}
                            />
                          </ListItem>
                          <ListItem
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
                              primary="Security / Pentesting introduction"
                              primaryTypographyProps={{
                                sx: { fontSize: "0.9rem" },
                              }}
                            />
                          </ListItem>
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
                          University of Bologna
                          <Chip
                            label="September 2021 - February 2022"
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
                          Master in Artifical Intelligence
                        </Typography>
                        <List sx={{ py: 0 }}>
                          <ListItem
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
                              primary="Natural language processing"
                              primaryTypographyProps={{
                                sx: { fontSize: "0.9rem" },
                              }}
                            />
                          </ListItem>
                          <ListItem
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
                              primary="Computer Vision"
                              primaryTypographyProps={{
                                sx: { fontSize: "0.9rem" },
                              }}
                            />
                          </ListItem>
                          <ListItem
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
                              primary="Business Analytics"
                              primaryTypographyProps={{
                                sx: { fontSize: "0.9rem" },
                              }}
                            />
                          </ListItem>
                          <ListItem
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
                              primary="Big data / data analysis"
                              primaryTypographyProps={{
                                sx: { fontSize: "0.9rem" },
                              }}
                            />
                          </ListItem>
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
              <Project /> Personal Projects
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
