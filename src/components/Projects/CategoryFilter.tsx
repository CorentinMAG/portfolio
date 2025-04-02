import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import {
  Web,
  PhoneAndroid,
  Security,
  Cloud,
  Psychology,
} from "@mui/icons-material";
import { CategoryFilterProps } from "./types";

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onChange,
}) => {
  return (
    <ToggleButtonGroup
      value={selectedCategory}
      exclusive
      onChange={onChange}
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
  );
};

export default CategoryFilter;
