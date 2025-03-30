import React from "react";
import Gravatar from "react-gravatar";
import { Box, Typography, Link } from "@mui/material";
import { ContactMail } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext.tsx";

const Profile = () => {
  const { t } = useLanguage();
  return (
    <Box sx={{ display: "flex", gap: 4, mb: 8, alignItems: "center" }}>
      <Box
        sx={{
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "50%",
            border: "2px solid",
            borderColor: "primary.main",
            transform: "scale(1.1)",
          },
        }}
      >
        <Gravatar
          email="corentin.magyar@protonmail.com"
          size={200}
          rating="pg"
          default="identicon"
          className="gravatar"
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
          Corentin Magyar
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
          {t("about.role")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {t("about.location")}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link
            href="mailto:corentin.magyar@protonmail.com"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <ContactMail />
            corentin.magyar@protonmail.com
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
