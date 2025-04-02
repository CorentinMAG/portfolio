import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  CardMedia,
  Chip,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { TableOfContentsItem, ProjectDates } from "./types";
import { markdownComponents } from "./MarkdownComponents";
import TableOfContents from "./TableOfContents";
import DateDisplay from "./DateDisplay";

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectImage, setProjectImage] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [tocItems, setTocItems] = useState<TableOfContentsItem[]>([]);
  const [dates, setDates] = useState<ProjectDates>({
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`/portfolio/projects/${projectId}.md`);
        if (!response.ok) {
          throw new Error("Project details not found");
        }
        const text = await response.text();

        // Extract headings for table of contents
        const headingRegex = /^(#{1,3})\s+(.+)$/gm;
        const headings: TableOfContentsItem[] = [];
        let match;
        while ((match = headingRegex.exec(text)) !== null) {
          const level = match[1].length;
          const text = match[2];
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          headings.push({ id, text, level });
        }
        setTocItems(headings);

        // Extract image URL from the markdown content
        const imageMatch = text.match(/!\[.*?\]\((.*?)\)/);
        if (imageMatch) {
          setProjectImage(imageMatch[1]);
        } else {
          setProjectImage(`/portfolio/images/${projectId}.jpg`);
        }

        // Extract keywords from the markdown content
        const keywordMatch = text.match(/keywords:\s*\[(.*?)\]/);
        if (keywordMatch) {
          const keywordString = keywordMatch[1];
          const extractedKeywords = keywordString
            .split(",")
            .map((k) => k.trim().replace(/['"]/g, ""));
          setKeywords(extractedKeywords);
        }

        // Extract dates from the markdown content
        const dateMatch = text.match(/dates:\s*\[(.*?)\]/);
        if (dateMatch) {
          const dateString = dateMatch[1];
          const [startDate, endDate] = dateString
            .split(",")
            .map((d) => d.trim().replace(/['"]/g, ""));
          setDates({ startDate, endDate });
        }

        // Remove the first image, title, and keywords from the markdown content
        let processedContent = text;
        // Remove the first image if it exists
        processedContent = processedContent.replace(/!\[.*?\]\((.*?)\)/, "");
        // Remove the first h1 if it exists
        processedContent = processedContent.replace(/^#\s+.*$/m, "");
        // Remove the keywords section if it exists
        processedContent = processedContent.replace(/keywords:\s*\[.*?\]/, "");
        // Remove the dates section if it exists
        processedContent = processedContent.replace(/dates:\s*\[.*?\]/, "");

        setContent(processedContent);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load project details"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error" variant="h5" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Box>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Project Header */}
          <Box sx={{ mb: 6, textAlign: "center" }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                background: "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {projectId
                ?.split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Typography>
            {dates.startDate && dates.endDate && <DateDisplay dates={dates} />}
          </Box>

          {/* Project Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              mb: 4,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <CardMedia
              component="img"
              image={projectImage}
              alt={`${projectId} preview`}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: "transform 0.3s ease-in-out",
                objectFit: "cover",
                imageRendering: "crisp-edges",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
              loading="lazy"
              decoding="async"
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
                "&:hover": {
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Keywords */}
          {keywords.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
                mb: 6,
              }}
            >
              {keywords.map((keyword, index) => (
                <Chip
                  key={index}
                  label={keyword}
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
          )}

          {/* Content with Table of Contents */}
          <Box sx={{ display: "flex", gap: 4 }}>
            {/* Main Content */}
            <Box sx={{ flex: 1 }}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {content}
              </ReactMarkdown>
            </Box>

            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <Box sx={{ width: 280, display: { xs: "none", lg: "block" } }}>
                <TableOfContents items={tocItems} />
              </Box>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
