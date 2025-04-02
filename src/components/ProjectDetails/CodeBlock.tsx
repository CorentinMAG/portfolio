import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CodeBlockProps } from "./types";

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

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

export default CodeBlock;
