import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Tooltip,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

interface MenuItem {
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

  const menuItems = useMemo<MenuItem[]>(
    () => [
      { text: "Home", path: "/", icon: <HomeIcon sx={{ fontSize: 24 }} /> },
      {
        text: "About",
        path: "/about",
        icon: <PersonIcon sx={{ fontSize: 24 }} />,
      },
      {
        text: "Projects",
        path: "/projects",
        icon: <WorkIcon sx={{ fontSize: 24 }} />,
      },
      {
        text: "Contact",
        path: "/contact",
        icon: <ContactMailIcon sx={{ fontSize: 24 }} />,
      },
    ],
    []
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = useMemo(
    () => (
      <List sx={{ width: 250 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
            sx={{
              color:
                location.pathname === item.path
                  ? theme.palette.primary.main
                  : "inherit",
              "&:hover": {
                backgroundColor: "rgba(100, 255, 218, 0.1)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                sx: { fontWeight: location.pathname === item.path ? 600 : 400 },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    ),
    [menuItems, location.pathname, navigate, theme.palette.primary.main]
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
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(10, 25, 47, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {drawer}
            </Drawer>
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
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
