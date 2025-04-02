import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { SortOrderProps } from "./types";

const SortOrder: React.FC<SortOrderProps> = ({ sortOrder, onChange }) => {
  return (
    <ToggleButtonGroup
      value={sortOrder}
      exclusive
      onChange={onChange}
      aria-label="sort order"
      size="small"
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
      <ToggleButton value="newest" aria-label="newest first">
        Newest First
      </ToggleButton>
      <ToggleButton value="oldest" aria-label="oldest first">
        Oldest First
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SortOrder;
