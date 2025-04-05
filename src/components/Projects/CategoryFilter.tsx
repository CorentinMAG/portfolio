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
import { useLanguage } from "../../contexts/LanguageContext.tsx";
const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onChange,
}) => {
  const { t } = useLanguage();
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
        {t("projects.categories.all")}
      </ToggleButton>
      <ToggleButton value="web" aria-label="web projects">
        <Web sx={{ mr: 1 }} /> {t("projects.categories.web")}
      </ToggleButton>
      <ToggleButton value="mobile" aria-label="mobile projects">
        <PhoneAndroid sx={{ mr: 1 }} /> {t("projects.categories.mobile")}
      </ToggleButton>
      <ToggleButton value="devops" aria-label="devops projects">
        <Cloud sx={{ mr: 1 }} /> {t("projects.categories.devops")}
      </ToggleButton>
      <ToggleButton value="security" aria-label="security projects">
        <Security sx={{ mr: 1 }} /> {t("projects.categories.security")}
      </ToggleButton>
      <ToggleButton value="ai" aria-label="ai projects">
        <Psychology sx={{ mr: 1 }} /> {t("projects.categories.ai")}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CategoryFilter;
