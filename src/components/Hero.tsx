import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = ({
  roles,
  sequences,
}: {
  roles: (string | number)[];
  sequences: (string | number)[];
}) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {t("home.greeting")}{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Corentin MAGYAR
            </Box>
          </Typography>
          <Box sx={{ minHeight: "4rem", mb: 4 }}>
            <TypeAnimation
              key={roles[0]}
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{
                fontSize: "1.5rem",
                color: "text.secondary",
                display: "inline-block",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 6,
              color: "text.secondary",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <TypeAnimation
              key={sequences[0]}
              sequence={sequences}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{
                display: "inline-block",
              }}
            />
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              mt: 4,
              "& .MuiButton-root": {
                minWidth: "180px",
                height: "48px",
                fontSize: "1.1rem",
                boxShadow: "0 4px 14px 0 rgba(100, 255, 218, 0.2)",
                "&:hover": {
                  boxShadow: "0 6px 20px 0 rgba(100, 255, 218, 0.3)",
                },
              },
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/projects")}
              sx={{
                background: "linear-gradient(45deg, #64ffda 30%, #4fd1c5 90%)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #4fd1c5 30%, #64ffda 90%)",
                },
              }}
            >
              {t("home.buttons.viewProjects")}
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                borderWidth: "2px",
                "&:hover": {
                  borderWidth: "2px",
                },
              }}
            >
              {t("home.buttons.contactMe")}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
