import React, { useState, useMemo } from "react";
import { Box, Container, Typography, Grid, Pagination } from "@mui/material";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";
import { Categories } from "../components/Projects/types";
import SearchBar from "../components/Projects/SearchBar";
import CategoryFilter from "../components/Projects/CategoryFilter";
import SortOrder from "../components/Projects/SortOrder";
import ProjectCard from "../components/Projects/ProjectCard";

const projects = projectsData.projects
  .filter((p) => p.enabled)
  .map((p) => ({
    ...p,
    category: p.category as Categories,
  }));

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
          <SearchBar value={searchQuery} onChange={handleSearchChange} />

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
            <CategoryFilter
              selectedCategory={selectedCategory}
              onChange={handleCategoryChange}
            />
            <SortOrder sortOrder={sortOrder} onChange={handleSortChange} />
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

          {/* Project Grid */}
          <Grid container spacing={4}>
            {paginatedProjects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ProjectCard project={project} index={index} />
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
