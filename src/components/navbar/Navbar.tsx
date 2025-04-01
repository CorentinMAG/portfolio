import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../../contexts/LanguageContext";
import NavbarDrawer from "./drawer";

export interface MenuItem {
  text: string;
  path: string;
  icon: React.ReactNode;
  badge?: number;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(10, 25, 47, 0.85)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(10, 25, 47, 0.95)",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: 0,
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    transition: "all 0.3s ease-in-out",
    transform: "translateX(-50%)",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useLanguage();

  const menuItems = useMemo<MenuItem[]>(
    () => [
      {
        text: t("nav.home"),
        path: "/",
        icon: <HomeIcon sx={{ fontSize: 24 }} />,
      },
      {
        text: t("nav.about"),
        path: "/about",
        icon: <PersonIcon sx={{ fontSize: 24 }} />,
      },
      {
        text: t("nav.projects"),
        path: "/projects",
        icon: <WorkIcon sx={{ fontSize: 24 }} />,
      },
      {
        text: t("nav.contact"),
        path: "/contact",
        icon: <ContactMailIcon sx={{ fontSize: 24 }} />,
      },
    ],
    [t]
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = useMemo(
    () => (
      <NavbarDrawer
        items={menuItems}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    ),
    [menuItems, theme.palette.primary.main, mobileOpen]
  );

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Toolbar>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: "0.5px",
              mr: 4,
            }}
          >
            CM
          </Typography>
        </motion.div>

        {isMobile ? (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <LanguageSwitcher />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.text}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StyledButton
                  color="inherit"
                  onClick={() => navigate(item.path)}
                  startIcon={
                    item.badge ? (
                      <Badge badgeContent={item.badge} color="primary">
                        {item.icon}
                      </Badge>
                    ) : (
                      item.icon
                    )
                  }
                  sx={{
                    color:
                      location.pathname === item.path
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                >
                  {item.text}
                </StyledButton>
              </motion.div>
            ))}
            <LanguageSwitcher />
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
