import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import { GitHub, LinkedIn, Email, LocationOn } from "@mui/icons-material";
import socialData from "../data/social.json";
import { useLanguage } from "../contexts/LanguageContext.tsx";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email color="primary" />
                <Link
                  href="mailto:corentin.magyar@protonmail.com"
                  color="inherit"
                  underline="none"
                >
                  corentin.magyar@protonmail.com
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn color="primary" />
                <Typography>Paris, France</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t("footer.quickLinks")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="inherit" underline="none">
                {t("nav.home")}
              </Link>
              <Link href="/about" color="inherit" underline="none">
                {t("nav.about")}
              </Link>
              <Link href="/projects" color="inherit" underline="none">
                {t("nav.projects")}
              </Link>
              <Link href="/contact" color="inherit" underline="none">
                {t("nav.contact")}
              </Link>
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                href={socialData.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href={socialData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Corentin MAGYAR. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
