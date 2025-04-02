import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeBlock from "./CodeBlock";

export const markdownComponents = {
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
  h1: ({ children }: { children: React.ReactNode }) => {
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
          background: "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </Typography>
    );
  },
  h2: ({ children }: { children: React.ReactNode }) => {
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
  h3: ({ children }: { children: React.ReactNode }) => {
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
  p: ({ children }: { children: React.ReactNode }) => (
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
  ul: ({ children }: { children: React.ReactNode }) => (
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
  ol: ({ children }: { children: React.ReactNode }) => (
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
  li: ({ children }: { children: React.ReactNode }) => (
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
  strong: ({ children }: { children: React.ReactNode }) => (
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
  img: ({ src, alt }: { src?: string; alt?: string }) => (
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
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
    const isGitHub = href?.includes("github.com");
    const isDemo = href?.includes("demo") || href?.includes("live");
    const isCode = href?.includes("code") || href?.includes("source");

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
        component="a"
        href={href || "#"}
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
  blockquote: ({ children }: { children: React.ReactNode }) => (
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
};
