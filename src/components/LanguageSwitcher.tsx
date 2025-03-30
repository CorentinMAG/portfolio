import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { GB, FR } from "country-flag-icons/react/3x2";

const languages = [
  { code: "en", name: "English", flag: GB },
  { code: "fr", name: "Français", flag: FR },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (langCode: "en" | "fr") => {
    setLanguage(langCode);
    handleClose();
  };

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={
          currentLanguage && (
            <Box
              sx={{
                width: 20,
                height: 15,
                display: "flex",
                alignItems: "center",
              }}
            >
              <currentLanguage.flag />
            </Box>
          )
        }
        sx={{
          color: "text.secondary",
          "&:hover": {
            backgroundColor: "rgba(100, 255, 218, 0.1)",
            color: "primary.main",
          },
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {currentLanguage?.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "primary.main",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code as "en" | "fr")}
            selected={language === lang.code}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.2)",
                },
              },
            }}
          >
            <ListItemIcon>
              <Box
                sx={{
                  width: 20,
                  height: 15,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <lang.flag />
              </Box>
            </ListItemIcon>
            <ListItemText
              primary={lang.name}
              primaryTypographyProps={{
                sx: {
                  color: language === lang.code ? "primary.main" : "inherit",
                  fontWeight: language === lang.code ? 600 : 400,
                },
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
