import React from "react";
import { Typography } from "@mui/material";
import { SkillHighlightProps } from "./types";

const SkillHighlight: React.FC<SkillHighlightProps> = ({ text, skills }) => {
  // Create a regex pattern from all skill names, escaping special characters
  const escapedSkillNames = skills.map((name) =>
    name.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`(${escapedSkillNames.join("|")})`, "gi");

  return (
    <>
      {text.split(pattern).map((part, index) => {
        if (skills.includes(part.toLowerCase())) {
          return (
            <Typography
              key={index}
              component="span"
              sx={{
                color: "primary.main",
                fontWeight: 500,
                display: "inline",
              }}
            >
              {part}
            </Typography>
          );
        }
        return part;
      })}
    </>
  );
};

export default SkillHighlight;
