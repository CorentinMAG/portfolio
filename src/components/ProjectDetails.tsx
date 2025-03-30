import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  CircularProgress,
  CardMedia,
  Link,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectImage, setProjectImage] = useState<string>("");

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`/projects/${projectId}.md`);
        if (!response.ok) {
          throw new Error("Project details not found");
        }
        const text = await response.text();
        setContent(text);

        // Extract image URL from the markdown content
        const imageMatch = text.match(/!\[.*?\]\((.*?)\)/);
        if (imageMatch) {
          setProjectImage(imageMatch[1]);
        } else {
          // Fallback to default image path
          setProjectImage(`/images/${projectId}.jpg`);
        }
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
      {/* Image Header */}
      <Box
        sx={{
          position: "relative",
          height: "40vh",
          width: "100%",
          overflow: "hidden",
          mb: 6,
        }}
      >
        <CardMedia
          component="img"
          image={projectImage}
          alt={`${projectId} header`}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "white",
              textAlign: "center",
              fontWeight: 700,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {projectId
              ?.split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Typography>
        </Box>
      </Box>

      {/* Content */}
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: "background.paper",
              mb: 6,
            }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <Typography variant="h3" component="h1" gutterBottom>
                    {children}
                  </Typography>
                ),
                h2: ({ children }) => (
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{ mt: 4 }}
                  >
                    {children}
                  </Typography>
                ),
                h3: ({ children }) => (
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ mt: 3 }}
                  >
                    {children}
                  </Typography>
                ),
                p: ({ children }) => (
                  <Typography variant="body1" paragraph>
                    {children}
                  </Typography>
                ),
                ul: ({ children }) => (
                  <Box component="ul" sx={{ pl: 2 }}>
                    {children}
                  </Box>
                ),
                li: ({ children }) => (
                  <Typography component="li" variant="body1">
                    {children}
                  </Typography>
                ),
                strong: ({ children }) => (
                  <Typography component="strong" sx={{ fontWeight: 600 }}>
                    {children}
                  </Typography>
                ),
                img: ({ src, alt }) => (
                  <Box
                    component="img"
                    src={src}
                    alt={alt}
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: 1,
                      my: 2,
                      boxShadow: 3,
                    }}
                  />
                ),
                code: ({ node, ...props }) => (
                  <SyntaxHighlighter language="javascript">
                    {props.children}
                  </SyntaxHighlighter>
                ),
                a: ({ children, ...props }) => (
                  <Link
                    to={props.href}
                    {...props}
                    underline="hover"
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </Link>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
