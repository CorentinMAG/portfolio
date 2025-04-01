import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  CardMedia,
  Chip,
  Button,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";

const CodeBlock: React.FC<{ language: string; value: string }> = ({
  language,
  value,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      python: "#3776AB",
      javascript: "#F7DF1E",
      typescript: "#3178C6",
      html: "#E34F26",
      css: "#1572B6",
      json: "#292929",
      bash: "#4EAA25",
      shell: "#4EAA25",
      default: "#64ffda",
    };
    return colors[lang.toLowerCase()] || colors.default;
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "rgba(100, 255, 218, 0.05)",
        borderRadius: 2,
        overflow: "hidden",
        my: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          backgroundColor: "rgba(100, 255, 218, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: getLanguageColor(language),
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {language}
          </Typography>
        </Box>
        <Typography
          variant="caption"
          onClick={handleCopy}
          sx={{
            color: "text.secondary",
            cursor: "pointer",
            userSelect: "none",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </Typography>
      </Box>
      <Box
        component="pre"
        sx={{
          p: 2,
          m: 0,
          overflowX: "auto",
          "& code": {
            fontFamily: "monospace",
            fontSize: "0.9rem",
            lineHeight: 1.5,
          },
        }}
      >
        <Box
          component="code"
          sx={{
            display: "block",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {value}
        </Box>
      </Box>
    </Box>
  );
};

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC<{ items: TableOfContentsItem[] }> = ({
  items,
}) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        position: "sticky",
        top: 100,
        maxHeight: "calc(100vh - 200px)",
        overflow: "auto",
        backgroundColor: "rgba(17, 34, 64, 0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid",
        borderColor: "rgba(100, 255, 218, 0.1)",
        borderRadius: 2,
        p: 2,
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "rgba(100, 255, 218, 0.1)",
          borderRadius: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(100, 255, 218, 0.3)",
          borderRadius: "3px",
          "&:hover": {
            background: "rgba(100, 255, 218, 0.5)",
          },
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "primary.main",
          mb: 2,
          fontWeight: 600,
        }}
      >
        Table of Contents
      </Typography>
      <Divider sx={{ mb: 2, borderColor: "rgba(100, 255, 218, 0.1)" }} />
      <List dense>
        {items.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{
              pl: (item.level - 1) * 2,
            }}
          >
            <ListItemButton
              onClick={() => scrollToHeading(item.id)}
              sx={{
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                },
              }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    color:
                      activeId === item.id ? "primary.main" : "text.secondary",
                    fontWeight: activeId === item.id ? 600 : 400,
                    fontSize: "0.9rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

interface ProjectDates {
  startDate: string;
  endDate: string;
}

const DateDisplay: React.FC<{ dates: ProjectDates }> = ({ dates }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mb: 4,
        color: "text.secondary",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1,
          borderRadius: 2,
          backgroundColor: "rgba(100, 255, 218, 0.1)",
          border: "1px solid",
          borderColor: "rgba(100, 255, 218, 0.2)",
        }}
      >
        <Typography variant="body2" sx={{ color: "primary.main" }}>
          {formatDate(dates.startDate)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          -
        </Typography>
        <Typography variant="body2" sx={{ color: "primary.main" }}>
          {formatDate(dates.endDate)}
        </Typography>
      </Box>
    </Box>
  );
};

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectImage, setProjectImage] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const { t } = useLanguage();
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
                components={{
                  code: ({
                    inline,
                    className,
                    children,
                    ...props
                  }: {
                    inline?: boolean;
                    className?: string;
                    children?: React.ReactNode;
                  } & React.HTMLAttributes<HTMLElement>) => {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <CodeBlock
                        language={match[1]}
                        value={String(children || "").replace(/\n$/, "")}
                      />
                    ) : (
                      <code
                        className={className}
                        {...props}
                        style={{
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                          padding: "0.2em 0.4em",
                          borderRadius: 3,
                          fontSize: "0.9em",
                          color: "primary.main",
                        }}
                      >
                        {children}
                      </code>
                    );
                  },
                  h1: ({ children }) => {
                    const id = String(children)
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-");
                    return (
                      <Typography
                        id={id}
                        variant="h2"
                        component="h1"
                        sx={{
                          mb: 4,
                          fontWeight: 700,
                          background:
                            "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {children}
                      </Typography>
                    );
                  },
                  h2: ({ children }) => {
                    const id = String(children)
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-");
                    return (
                      <Typography
                        id={id}
                        variant="h3"
                        component="h2"
                        sx={{
                          mb: 3,
                          fontWeight: 600,
                          color: "primary.main",
                          mt: 6,
                        }}
                      >
                        {children}
                      </Typography>
                    );
                  },
                  h3: ({ children }) => {
                    const id = String(children)
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-");
                    return (
                      <Typography
                        id={id}
                        variant="h4"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: "text.primary",
                          mt: 4,
                        }}
                      >
                        {children}
                      </Typography>
                    );
                  },
                  p: ({ children }) => (
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: "text.secondary",
                        lineHeight: 1.8,
                      }}
                    >
                      {children}
                    </Typography>
                  ),
                  ul: ({ children }) => (
                    <Box
                      component="ul"
                      sx={{
                        pl: 2,
                        mb: 3,
                        listStyle: "none",
                        "& li": {
                          position: "relative",
                          pl: 2,
                          mb: 2,
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                            opacity: 0.5,
                            transform: "translateY(-50%)",
                          },
                        },
                      }}
                    >
                      {children}
                    </Box>
                  ),
                  ol: ({ children }) => (
                    <Box
                      component="ol"
                      sx={{
                        pl: 2,
                        mb: 3,
                        listStyle: "none",
                        counterReset: "item",
                        "& li": {
                          position: "relative",
                          pl: 2,
                          mb: 2,
                          counterIncrement: "item",
                          "&::before": {
                            content: "counter(item)",
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "primary.main",
                            opacity: 0.7,
                            fontWeight: 500,
                            fontSize: "0.9em",
                          },
                        },
                      }}
                    >
                      {children}
                    </Box>
                  ),
                  li: ({ children }) => (
                    <Typography
                      component="li"
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.8,
                      }}
                    >
                      {children}
                    </Typography>
                  ),
                  strong: ({ children }) => (
                    <Typography
                      component="strong"
                      sx={{
                        fontWeight: 600,
                        color: "primary.main",
                      }}
                    >
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
                        borderRadius: 2,
                        my: 4,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        imageRendering: "crisp-edges",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  ),
                  a: ({ href, children }) => {
                    const isGitHub = href?.includes("github.com");
                    const isDemo =
                      href?.includes("demo") || href?.includes("live");
                    const isCode =
                      href?.includes("code") || href?.includes("source");

                    const getIcon = () => {
                      if (isGitHub) return <GitHubIcon />;
                      if (isDemo) return <VisibilityIcon />;
                      if (isCode) return <CodeIcon />;
                      return <LaunchIcon />;
                    };

                    const getButtonText = () => {
                      if (isGitHub) return "View on GitHub";
                      if (isDemo) return "Live Demo";
                      if (isCode) return "Source Code";
                      return children;
                    };

                    return (
                      <Button
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="text"
                        startIcon={getIcon()}
                        sx={{
                          color: "primary.main",
                          textTransform: "none",
                          borderRadius: 2,
                          px: 3,
                          py: 1,
                          m: 1,
                          "&:hover": {
                            backgroundColor: "rgba(100, 255, 218, 0.1)",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.2s ease-in-out",
                        }}
                      >
                        {getButtonText()}
                      </Button>
                    );
                  },
                  blockquote: ({ children }) => (
                    <Box
                      component="blockquote"
                      sx={{
                        borderLeft: "4px solid",
                        borderColor: "primary.main",
                        pl: 3,
                        my: 4,
                        color: "text.secondary",
                        fontStyle: "italic",
                        backgroundColor: "rgba(100, 255, 218, 0.05)",
                        p: 3,
                        borderRadius: 2,
                      }}
                    >
                      {children}
                    </Box>
                  ),
                }}
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
