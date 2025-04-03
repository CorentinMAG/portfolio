import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 4,
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
              fontWeight: "bold",
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: "text.primary",
              fontWeight: "medium",
            }}
          >
            {t("notFound.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            {t("notFound.description")}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/")}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1.1rem",
            }}
          >
            {t("notFound.backToHome")}
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default NotFound;
