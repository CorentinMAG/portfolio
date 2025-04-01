import { useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import { MenuItem } from "./Navbar";
const NavbarDrawer = ({
  items,
  isOpen,
  onClose,
}: {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("render drawer");
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isOpen}
      onClose={onClose}
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
      <List sx={{ width: 250 }}>
        {items.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => {
              navigate(item.path);
              onClose();
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
    </Drawer>
  );
};

export default NavbarDrawer;
