import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { SearchBarProps } from "./types";
import { useLanguage } from "../../contexts/LanguageContext.tsx";
const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const { t } = useLanguage();
  return (
    <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={t("projects.placeholder")}
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          maxWidth: "600px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
