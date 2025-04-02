import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { ExperienceItemProps } from "./types";

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  iconMap,
  highlightSkills,
}) => {
  const Icon = iconMap[experience.icon];

  return (
    <Box
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
          {Icon && <Icon color="primary" sx={{ zIndex: 1 }} />}
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
            {experience.title}
            <Chip
              label={experience.period}
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
            {experience.company}
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
              {experience.location}
            </Typography>
          </Typography>
          {experience.description && (
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: "text.secondary",
              }}
            >
              {experience.description}
            </Typography>
          )}
          <List sx={{ py: 0 }}>
            {experience.achievements.map((achievement, idx) => (
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
  );
};

export default ExperienceItem;
