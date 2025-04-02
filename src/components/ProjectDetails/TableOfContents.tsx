import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { TableOfContentsProps } from "./types";

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
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

export default TableOfContents;
