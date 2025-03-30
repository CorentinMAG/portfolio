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
  TextField,
  Pagination,
  InputAdornment,
} from "@mui/material";
import {
  GitHub,
  Launch,
  Web,
  PhoneAndroid,
  Security,
  Cloud,
  Psychology,
  Search,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";

const projects = projectsData.projects.filter((p) => p.enabled);

enum Categories {
  ALL = "all",
  WEB = "web",
  MOBILE = "mobile",
  DEV_OPS = "devops",
  SECURITY = "security",
  AI = "ai",
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Categories.ALL
  );
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const projectsPerPage = 6;

  // Filter, sort, and search projects
  const filteredProjects = useMemo(() => {
    let filtered =
      selectedCategory === Categories.ALL
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(query)
          ) ||
          project.features.some((feature) =>
            feature.toLowerCase().includes(query)
          )
      );
    }

    // Sort by date
    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

    return filtered;
  }, [selectedCategory, sortOrder, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage
  );

  const handleCategoryChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
      setPage(1); // Reset to first page when category changes
    }
  };

  const handleSortChange = (
    event: React.MouseEvent<HTMLElement>,
    newOrder: "newest" | "oldest" | null
  ) => {
    if (newOrder !== null) {
      setSortOrder(newOrder);
      setPage(1); // Reset to first page when sort order changes
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset to first page when search query changes
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
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

          {/* Search Bar */}
          <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search projects by title, description, technologies, or features..."
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{
                maxWidth: "600px",
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
          </Box>

          {/* Filters and Sort */}
          <Box
            sx={{
              mb: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Category Filter */}
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

            {/* Sort Order */}
            <ToggleButtonGroup
              value={sortOrder}
              exclusive
              onChange={handleSortChange}
              aria-label="sort order"
              size="small"
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
              <ToggleButton value="newest" aria-label="newest first">
                Newest First
              </ToggleButton>
              <ToggleButton value="oldest" aria-label="oldest first">
                Oldest First
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Results Count */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, textAlign: "center" }}
          >
            {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""} found
          </Typography>

          <Grid container spacing={4}>
            {paginatedProjects.map((project, index) => (
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
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            mb: 2,
                          }}
                        >
                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{ fontWeight: 600 }}
                          >
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
                          target={
                            project.demo.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
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
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          {totalPages > 1 && (
            <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
                sx={{
                  "& .MuiPaginationItem-root": {
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
              />
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
